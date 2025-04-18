
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Award, BookOpen, Clock, Heart, Music, Brain } from "lucide-react";

const SobreMiPage = () => {
  const achievements = [
    {
      year: "2019",
      title: "Publicación de '7 Pisadas Sobre Una Huella'",
      description: "Mi primer libro publicado, explorando la arquitectura del alma humana.",
    },
    {
      year: "2020",
      title: "Lanzamiento de 'Anatomía de la Poesía'",
      description: "Obra que analiza la estructura y poder emocional de la poesía como herramienta transformadora.",
    },
    {
      year: "2021",
      title: "Publicación de 'Fascinante Cerebro Pedagógico'",
      description: "Estudio sobre el poder oculto de la mente y su potencial para el aprendizaje y la sanación.",
    },
    {
      year: "2022",
      title: "Lanzamiento de 'Sintéticos: La Entropía del Ser'",
      description: "Mi exploración más reciente sobre la naturaleza humana en un mundo cambiante.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <section className="relative pt-20 pb-16 bg-neuro-deepblue text-white">
        <div className="absolute inset-0 bg-[url('/public/lovable-uploads/f5fa7ce4-4d4b-4325-8630-1f648c27e946.png')] bg-cover opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Sobre Mí</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-neuro-amber mb-8">
            Escritor, locutor, poeta y coach en una búsqueda constante por la "armonía de lo imperfecto"
          </p>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-b from-background to-neuro-deepblue/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-neuro-deepblue">Mi Historia</h2>
              <p className="text-gray-700">
                Soy un escritor, locutor, poeta y coach dedicado a explorar el poder sanador de la música, 
                la lectoescritura y la poesía. A lo largo de mi vida, he desarrollado lo que llamo "Inteligencia Ecuativa": 
                la búsqueda de la armonía en lo imperfecto.
              </p>
              <p className="text-gray-700">
                Durante los últimos 12 años, he enfrentado un desafío personal significativo: la lucha contra el Parkinson. 
                Esta condición, lejos de detenerme, se ha convertido en mi mayor maestro y motivación. Cada día 
                es una oportunidad para demostrar que las limitaciones físicas no definen nuestro potencial creativo 
                ni nuestra capacidad para ayudar a otros.
              </p>
              <p className="text-gray-700">
                Mi misión es crear herramientas útiles para superar la depresión, la ansiedad y todo aquello 
                que destruye nuestra paz interior. A través de mis libros, talleres y servicios profesionales, 
                busco compartir las estrategias que me han permitido mantener una actitud positiva y productiva 
                frente a la adversidad.
              </p>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span className="text-neuro-deepblue font-medium italic">
                  "La lucha más importante es la que libramos contra nuestros propios límites mentales."
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-neuro-gold/20 rounded-lg blur-lg"></div>
                <div className="relative grid grid-cols-2 gap-4">
                  <img 
                    src="/public/lovable-uploads/6ab3bbe2-ff3f-466f-bda8-bc53bc2f53e0.png" 
                    alt="Mi libro: 7 Pisadas Sobre Una Huella" 
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                  <img 
                    src="/public/lovable-uploads/f5fa7ce4-4d4b-4325-8630-1f648c27e946.png" 
                    alt="Mi libro: Anatomía de la Poesía" 
                    className="rounded-lg shadow-lg w-full h-auto object-cover transform translate-y-8"
                  />
                  <img 
                    src="/public/lovable-uploads/2cbdaa7f-6c60-4c12-9507-df9979a74a40.png" 
                    alt="Mi libro: Fascinante Cerebro Pedagógico" 
                    className="rounded-lg shadow-lg w-full h-auto object-cover transform translate-y-4"
                  />
                  <img 
                    src="/public/lovable-uploads/e758d0b0-6fe8-43dd-a980-ddbc74dda0ec.png" 
                    alt="Mi libro: Sintéticos" 
                    className="rounded-lg shadow-lg w-full h-auto object-cover transform translate-y-12"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-neuro-deepblue mb-8 text-center">Mi Filosofía</h2>
            <div className="glass-effect p-8">
              <Tabs defaultValue="ecuativa" className="w-full">
                <TabsList className="grid grid-cols-3 bg-neuro-deepblue/10">
                  <TabsTrigger value="ecuativa" className="data-[state=active]:bg-neuro-gold data-[state=active]:text-white">
                    Inteligencia Ecuativa
                  </TabsTrigger>
                  <TabsTrigger value="armonia" className="data-[state=active]:bg-neuro-gold data-[state=active]:text-white">
                    Armonía de lo Imperfecto
                  </TabsTrigger>
                  <TabsTrigger value="sanacion" className="data-[state=active]:bg-neuro-gold data-[state=active]:text-white">
                    Poder Sanador del Arte
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="ecuativa" className="mt-6 space-y-4">
                  <h3 className="text-2xl font-bold text-neuro-deepblue">Inteligencia Ecuativa</h3>
                  <p className="text-gray-700">
                    La Inteligencia Ecuativa es un concepto que he desarrollado a lo largo de mi carrera, basado en la 
                    integración de múltiples formas de expresión y percepción. Representa el equilibrio entre el 
                    pensamiento lógico y la expresión emocional, entre la estructura y la creatividad.
                  </p>
                  <p className="text-gray-700">
                    Este tipo de inteligencia nos permite encontrar patrones y conexiones entre disciplinas aparentemente 
                    dispares, como la música, la literatura y la psicología, creando un enfoque holístico para el 
                    desarrollo personal y la superación de obstáculos.
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <Brain className="h-5 w-5 text-neuro-gold" />
                    <span className="text-neuro-deepblue font-medium italic">
                      "La verdadera inteligencia no reside en un solo tipo de pensamiento, sino en la capacidad de 
                      integrar múltiples perspectivas."
                    </span>
                  </div>
                </TabsContent>
                
                <TabsContent value="armonia" className="mt-6 space-y-4">
                  <h3 className="text-2xl font-bold text-neuro-deepblue">Armonía de lo Imperfecto</h3>
                  <p className="text-gray-700">
                    La búsqueda de la perfección a menudo nos aleja de nuestra humanidad. En cambio, mi filosofía se 
                    centra en encontrar belleza y significado en la imperfección, abrazando nuestras limitaciones como 
                    parte integral de nuestra identidad y potencial.
                  </p>
                  <p className="text-gray-700">
                    El Parkinson me ha enseñado que las limitaciones físicas pueden convertirse en catalizadores para el 
                    crecimiento interior. Cuando aceptamos nuestras imperfecciones, descubrimos una forma más auténtica 
                    y armoniosa de existir y crear.
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <Music className="h-5 w-5 text-neuro-amber" />
                    <span className="text-neuro-deepblue font-medium italic">
                      "En la grieta es donde entra la luz; en lo imperfecto es donde encontramos nuestra humanidad."
                    </span>
                  </div>
                </TabsContent>
                
                <TabsContent value="sanacion" className="mt-6 space-y-4">
                  <h3 className="text-2xl font-bold text-neuro-deepblue">Poder Sanador del Arte</h3>
                  <p className="text-gray-700">
                    El arte en todas sus formas—música, escritura, poesía—posee un poder transformador y terapéutico que 
                    va más allá del simple entretenimiento. Estas expresiones creativas nos conectan con partes de nosotros 
                    mismos que de otra manera permanecerían inexploradas.
                  </p>
                  <p className="text-gray-700">
                    En mi trabajo, utilizo estas herramientas para ayudar a las personas a procesar emociones difíciles, 
                    superar traumas y encontrar nuevas perspectivas para sus desafíos. La creación y apreciación artística 
                    activan procesos neurológicos que promueven la resiliencia y el bienestar emocional.
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <BookOpen className="h-5 w-5 text-neuro-teal" />
                    <span className="text-neuro-deepblue font-medium italic">
                      "Las palabras curan cuando las medicinas fallan; la música alcanza rincones que ningún terapeuta puede visitar."
                    </span>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-neuro-deepblue mb-8 text-center">Mi Trayectoria</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-neuro-deepblue/20"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {achievements.map((item, index) => (
                  <div key={index} className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}>
                    {/* Timeline marker */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-neuro-amber z-10 flex items-center justify-center">
                        <CalendarDays className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                      <Card className="shadow-md">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-3">
                            <Award className="h-5 w-5 text-neuro-gold mr-2" />
                            <h3 className="text-xl font-bold text-neuro-deepblue">{item.title}</h3>
                          </div>
                          <p className="text-sm text-neuro-amber font-semibold mb-2">{item.year}</p>
                          <p className="text-gray-600">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Spacer for opposite side */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-neuro-deepblue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Quieres conocer más sobre mi trabajo?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Te invito a explorar mis libros, servicios o contactarme directamente para conversar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-neuro-amber hover:bg-neuro-amber/80 text-white">
              <Link to="/libros">Ver Mis Libros</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contacto">Contactarme</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SobreMiPage;
