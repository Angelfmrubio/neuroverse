
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Radio, Loader, Volume2 } from "lucide-react";

type RadioStation = {
  name: string;
  streamUrl: string;
};

const RadioWidget = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentStation, setCurrentStation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<string | null>(null);
  
  const stations: RadioStation[] = [
    { name: "Planeta Pop", streamUrl: "https://stream.zeno.fm/llcl4qrmviouv" },
    { name: "Vintage Plus", streamUrl: "https://stream.zeno.fm/wapuwdpgzgruv" },
    { name: "Raza Latina", streamUrl: "https://stream.zeno.fm/ojij13rkbiatv" },
    { name: "Electrodance", streamUrl: "https://stream.zeno.fm/4urismb5ebhtv" },
    { name: "Especie Network", streamUrl: "https://stream.zeno.fm/f2pyx5vmphevv" }
  ];

  const playStation = async (station: RadioStation) => {
    try {
      setIsLoading(station.streamUrl);
      
      if (currentStation === station.streamUrl) {
        if (audioRef.current) {
          audioRef.current.pause();
        }
        setCurrentStation(null);
        setIsLoading(null);
        return;
      }

      if (audioRef.current) {
        audioRef.current.src = station.streamUrl;
        await audioRef.current.play();
        setCurrentStation(station.streamUrl);
        
        // Update page title
        document.title = `▶ ${station.name} - Radio Evolución`;
      }
    } catch (error) {
      console.error('Error playing station:', error);
    } finally {
      setIsLoading(null);
    }
  };

  useEffect(() => {
    const handleError = () => {
      setCurrentStation(null);
      setIsLoading(null);
    };

    const handlePause = () => {
      if (!currentStation) {
        document.title = "Neuro Music";
      }
    };

    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener('error', handleError);
      audioElement.addEventListener('pause', handlePause);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('error', handleError);
        audioElement.removeEventListener('pause', handlePause);
      }
    };
  }, [currentStation]);

  return (
    <Card className="overflow-hidden border-none bg-gradient-to-br from-neuro-deepblue to-black shadow-xl">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white flex items-center justify-center">
            <Radio className="mr-2 h-5 w-5 text-neuro-amber" /> Radio Evolución
          </h3>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
          {stations.map((station) => (
            <Button
              key={station.streamUrl}
              onClick={() => playStation(station)}
              variant="outline"
              className={`
                relative overflow-hidden border-neuro-teal/50 text-white
                hover:bg-neuro-teal/20 hover:-translate-y-1 transition-all
                ${currentStation === station.streamUrl ? 'bg-neuro-teal/30 shadow-lg shadow-neuro-teal/20' : 'bg-black/30'}
              `}
              disabled={isLoading === station.streamUrl}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              
              {isLoading === station.streamUrl ? (
                <Loader className="h-4 w-4 mr-2 animate-spin" />
              ) : currentStation === station.streamUrl ? (
                <Volume2 className="h-4 w-4 mr-2 text-neuro-amber" />
              ) : null}
              
              <span className="text-sm">{station.name}</span>
            </Button>
          ))}
        </div>
        
        <audio ref={audioRef} controls className="w-full mt-4 rounded bg-neuro-deepblue/80">
          <source type="audio/mpeg" />
          Tu navegador no soporta el elemento de audio.
        </audio>
      </CardContent>
    </Card>
  );
};

export default RadioWidget;
