
/**
 * Utility functions to help with audio streaming and autoplay issues
 */

// Lista de servidores proxy CORS para transmisiones de audio
const CORS_PROXIES = [
  'https://cors-anywhere.herokuapp.com/',
  'https://api.allorigins.win/raw?url=',
  '' // Sin proxy (conexión directa)
];

/**
 * Intenta reproducir audio con múltiples alternativas para autoplay
 * @param audioElement El elemento HTML de audio
 * @param streamUrl La URL original del stream
 * @param onSuccess Callback cuando la reproducción inicia correctamente
 * @param onError Callback cuando todos los intentos fallan
 */
export const attemptPlayWithFallbacks = async (
  audioElement: HTMLAudioElement,
  streamUrl: string,
  onSuccess: () => void,
  onError: (error: any) => void
): Promise<void> => {
  // Verificar si el stream es válido
  const checkStreamValidity = async (url: string): Promise<boolean> => {
    try {
      const response = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
      return true; // Si no hay error CORS, asumimos que es válido
    } catch (error) {
      console.log('Error al verificar stream:', error);
      return false;
    }
  };

  // Probar diferentes proxies y métodos de reproducción
  let success = false;
  
  for (const proxy of CORS_PROXIES) {
    if (success) break;
    
    const proxyUrl = proxy ? `${proxy}${encodeURIComponent(streamUrl)}` : streamUrl;
    audioElement.src = proxyUrl;
    
    // Esperar un momento antes de intentar reproducir
    await new Promise(resolve => setTimeout(resolve, 100));
    
    try {
      // Intentar cargar el audio primero
      audioElement.load();
      
      // Intentar el método play
      await audioElement.play();
      success = true;
      onSuccess();
      break;
    } catch (error) {
      console.log(`Intento de reproducción fallido con ${proxy ? 'proxy: ' + proxy : 'conexión directa'}`, error);
      continue;
    }
  }
  
  if (!success) {
    // Si todos los intentos fallaron
    onError(new Error('Todos los intentos de reproducción fallaron'));
  }
};

/**
 * Verifica si una URL de stream es accesible y devuelve una URL que funcione
 * @param originalUrl La URL original del stream
 * @returns Una promesa que resuelve a una URL que funciona o null
 */
export const getWorkingStreamUrl = async (originalUrl: string): Promise<string | null> => {
  // Para streams de radio, estos son formatos alternativos para probar
  const alternativeFormats = [
    originalUrl,
    originalUrl.replace('.mp3', '.aac'),
    originalUrl.replace('http://', 'https://'),
    // Añadir más alternativas comunes aquí
  ];
  
  for (const url of alternativeFormats) {
    try {
      const response = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
      return url;
    } catch (error) {
      continue;
    }
  }
  
  return null;
};

// Lista de estaciones de radio con múltiples URLs alternativas
export const radioStationAlternatives: Record<string, string[]> = {
  // Nueva lista de URLs actualizadas con Zeno.fm
  "https://stream.zeno.fm/llcl4qrmviouv": [
    "https://stream.zeno.fm/llcl4qrmviouv",
    "https://stream.zeno.fm/llcl4qrmviouv?aw_0_1st.playerid=zeno",
    "https://stream.zeno.fm/llcl4qrmviouv.mp3"
  ],
  "https://stream.zeno.fm/wapuwdpgzgruv": [
    "https://stream.zeno.fm/wapuwdpgzgruv",
    "https://stream.zeno.fm/wapuwdpgzgruv?aw_0_1st.playerid=zeno",
    "https://stream.zeno.fm/wapuwdpgzgruv.mp3"
  ],
  "https://stream.zeno.fm/ojij13rkbiatv": [
    "https://stream.zeno.fm/ojij13rkbiatv",
    "https://stream.zeno.fm/ojij13rkbiatv?aw_0_1st.playerid=zeno",
    "https://stream.zeno.fm/ojij13rkbiatv.mp3"
  ],
  "https://stream.zeno.fm/4urismb5ebhtv": [
    "https://stream.zeno.fm/4urismb5ebhtv",
    "https://stream.zeno.fm/4urismb5ebhtv?aw_0_1st.playerid=zeno",
    "https://stream.zeno.fm/4urismb5ebhtv.mp3"
  ],
  "https://stream.zeno.fm/f2pyx5vmphev": [
    "https://stream.zeno.fm/f2pyx5vmphev",
    "https://stream.zeno.fm/f2pyx5vmphev?aw_0_1st.playerid=zeno",
    "https://stream.zeno.fm/f2pyx5vmphev.mp3"
  ]
};

/**
 * Fuerza la reproducción de una estación de radio, usando todas las alternativas posibles
 * @param audioElement El elemento HTML de audio
 * @param stationUrl La URL de la estación
 * @returns Una promesa que se resuelve cuando la reproducción comienza o rechaza con un error
 */
export const forcePlayRadioStation = async (
  audioElement: HTMLAudioElement,
  stationUrl: string
): Promise<void> => {
  // Optimización: Utilizar un buffer de bajo nivel para mejorar la reproducción
  audioElement.preload = "auto";
  
  // Primero intentar reproducir directamente
  try {
    audioElement.src = stationUrl;
    audioElement.load();
    await audioElement.play();
    return;
  } catch (error) {
    console.log('Primer intento de reproducción fallido, probando alternativas...');
  }
  
  // Si falla, probar todas las alternativas
  const alternatives = radioStationAlternatives[stationUrl] || [stationUrl];
  
  for (const altUrl of alternatives) {
    try {
      audioElement.src = altUrl;
      audioElement.load();
      await audioElement.play();
      return;
    } catch (error) {
      console.log(`Intento fallido con URL: ${altUrl}`, error);
    }
  }
  
  // Si todo falla, intentar con proxies CORS
  return new Promise((resolve, reject) => {
    attemptPlayWithFallbacks(
      audioElement,
      stationUrl,
      () => resolve(),
      (error) => reject(error)
    );
  });
};

/**
 * Establece el volumen del audio
 */
export const setAudioVolume = (audioElement: HTMLAudioElement, volume: number, isMuted: boolean): void => {
  if (!audioElement) return;
  
  audioElement.volume = isMuted ? 0 : volume;
  
  // Guardar preferencias de volumen
  try {
    localStorage.setItem('audio_volume', volume.toString());
    localStorage.setItem('audio_muted', isMuted.toString());
  } catch (e) {
    console.log('Error guardando preferencias de audio:', e);
  }
};

/**
 * Obtiene las preferencias de volumen guardadas
 */
export const getSavedAudioPreferences = (): { volume: number, isMuted: boolean } => {
  try {
    const savedVolume = localStorage.getItem('audio_volume');
    const savedMuted = localStorage.getItem('audio_muted');
    
    return {
      volume: savedVolume ? parseFloat(savedVolume) : 0.7,
      isMuted: savedMuted === 'true'
    };
  } catch (e) {
    return { volume: 0.7, isMuted: false };
  }
};
