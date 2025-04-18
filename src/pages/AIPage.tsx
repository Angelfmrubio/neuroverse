
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Brain, Loader2, Send, Sparkles } from "lucide-react";

const AIPage = () => {
  const { toast } = useToast();
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [geminiKey, setGeminiKey] = useState(() => {
    return localStorage.getItem("gemini_api_key") || "";
  });

  const handleApiKeyChange = (value: string) => {
    setGeminiKey(value);
    localStorage.setItem("gemini_api_key", value);
  };

  const generateContent = async () => {
    if (!geminiKey) {
      toast({
        title: "API Key requerida",
        description: "Por favor, introduce tu API Key de Google Gemini para continuar.",
        variant: "destructive",
      });
      return;
    }

    if (!prompt.trim()) {
      toast({
        title: "Prompt vacío",
        description: "Por favor, escribe un prompt para generar contenido.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: prompt,
                  },
                ],
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "Error al generar contenido");
      }

      const data = await response.json();
      console.log("Gemini API response:", data);
      
      // Extract the text from the response
      const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No se pudo generar una respuesta.";
      setResponse(generatedText);
      
      toast({
        title: "Contenido generado",
        description: "El contenido ha sido generado exitosamente.",
      });
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Error al generar contenido",
        variant: "destructive",
      });
      setResponse("Ocurrió un error al generar el contenido. Por favor, intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative pt-20 pb-16 bg-neuro-deepblue text-white">
        <div className="absolute inset-0 bg-[url('/public/lovable-uploads/f5fa7ce4-4d4b-4325-8630-1f648c27e946.png')] bg-cover opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">NeuroIA</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-neuro-amber mb-8">
            Explora el poder de la inteligencia artificial con Gemini
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-background to-neuro-amber/5">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-neuro-deepblue mb-4">
              Asistente IA de NeuroVerse
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Utiliza el poder de la IA para generar contenido creativo, obtener respuestas a tus preguntas, o explorar nuevas ideas para tus proyectos literarios. 
              Potenciado por Google Gemini.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 shadow-lg bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-neuro-amber" />
                  Configuración
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label htmlFor="apiKey" className="text-sm font-medium text-gray-700 block mb-1">
                    Google Gemini API Key
                  </label>
                  <input
                    id="apiKey"
                    type="password"
                    value={geminiKey}
                    onChange={(e) => handleApiKeyChange(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-neuro-amber focus:border-transparent"
                    placeholder="Ingresa tu API Key de Google Gemini"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Puedes obtener tu API Key en{" "}
                    <a
                      href="https://ai.google.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neuro-amber hover:underline"
                    >
                      Google AI Studio
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-neuro-amber" />
                  Generador de Contenido
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label htmlFor="prompt" className="text-sm font-medium text-gray-700 block mb-1">
                    Tu Prompt
                  </label>
                  <Textarea
                    id="prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Escribe tu prompt aquí... (ej. 'Escribe un poema sobre la resiliencia frente al Parkinson')"
                    className="min-h-[120px]"
                  />
                </div>

                {response && (
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-neuro-deepblue mb-2">Respuesta:</h3>
                    <div className="bg-neuro-deepblue/5 p-4 rounded-md whitespace-pre-wrap">
                      {response}
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  onClick={generateContent}
                  disabled={isLoading}
                  className="w-full bg-neuro-amber hover:bg-neuro-amber/80 text-white"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Generar Contenido
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neuro-deepblue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Explora mis Obras Literarias</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Descubre mis cuatro libros publicados: "Anatomía de la poesía", "Sintéticos", 
            "7 pisadas sobre una huella" y "Fascinante cerebro pedagógico".
          </p>
          <Button 
            asChild 
            className="bg-neuro-amber hover:bg-neuro-amber/80 text-white"
          >
            <a href="/libros">Ver Mis Libros</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIPage;
