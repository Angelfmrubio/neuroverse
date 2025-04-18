
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, Headphones, Music, Pen, Brain, MessageSquareQuote } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RadioWidget from "@/components/RadioWidget";
import TalentShowcase from "@/components/TalentShowcase";

const Index = () => {
  const [activeTab, setActiveTab] = useState("escritor");

  const featuredBooks = [
    {
      id: 1,
      title: "7 Pisadas Sobre Una Huella",
      coverImage: "/public/lovable-uploads/6ab3bbe2-ff3f-466f-bda8-bc53bc2f53e0.png",
      description: "Arquitectura del Alma",
      link: "/libros/7-pisadas"
    },
    {
      id: 2,
      title: "Anatomía de la Poesía",
      coverImage: "/public/lovable-uploads/f5fa7ce4-4d4b-4325-8630-1f648c27e946.png",
      description: "Cirujano del Lenguaje",
      link: "/libros/anatomia-poesia"
    },
    {
      id: 3,
      title: "Fascinante Cerebro Pedagógico",
      coverImage: "/public/lovable-uploads/2cbdaa7f-6c60-4c12-9507-df9979a74a40.png",
      description: "El Poder Oculto de la Mente",
      link: "/libros/cerebro-pedagogico"
    },
    {
      id: 4,
      title: "Sintéticos: La Entropía del Ser",
      coverImage: "/public/lovable-uploads/e758d0b0-6fe8-43dd-a980-ddbc74dda0ec.png",
      description: "Orígenes: El Futuro nos Pertenece",
      link: "/libros/sinteticos"
    }
  ];

  const services = [
    {
      id: 1,
      title: "Escritura Creativa",
      icon: <Pen className="h-10 w-10 text-neuro-teal" />,
      description: "Talleres y asesorías personalizadas para desarrollar tu potencial como escritor.",
      link: "/servicios/escritura"
    },
    {
      id: 2,
      title: "Locución Profesional",
      icon: <Headphones className="h-10 w-10 text-neuro-amber" />,
      description: "Servicios de locución para audiolibros, publicidad, documentales y más.",
      link: "/servicios/locucion"
    },
    {
      id: 3,
      title: "Poesía Terapéutica",
      icon: <MessageSquareQuote className="h-10 w-10 text-neuro-copper" />,
      description: "Descubre el poder sanador de la poesía para combatir la ansiedad y depresión.",
      link: "/servicios/poesia"
    },
    {
      id: 4,
      title: "Edición de Audio",
      icon: <Music className="h-10 w-10 text-neuro-deepblue" />,
      description: "Edición profesional de audio para proyectos literarios y musicales.",
      link: "/servicios/audio"
    },
    {
      id: 5,
      title: "Coaching PNL",
      icon: <Brain className="h-10 w-10 text-neuro-gold" />,
      description: "Coaching con programación neurolingüística para desarrollo personal.",
      link: "/servicios/coaching"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "María Rodríguez",
      text: "Los talleres de escritura creativa transformaron mi manera de expresarme. José Ángel es un extraordinario maestro del lenguaje.",
      position: "Escritora"
    },
    {
      id: 2,
      name: "Carlos Méndez",
      text: "La poesía terapéutica me ayudó enormemente a superar mi ansiedad. Estoy eternamente agradecido por estas herramientas poderosas.",
      position: "Profesor"
    },
    {
      id: 3,
      name: "Laura Sánchez",
      text: "Sus técnicas de PNL son revolucionarias. He aprendido a utilizar el pensamiento crítico de manera efectiva en mi vida diaria.",
      position: "Psicóloga"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neuro-deepblue via-neuro-deepblue/70 to-background">
          <div className="absolute inset-0 bg-[url('/public/lovable-uploads/6ab3bbe2-ff3f-466f-bda8-bc53bc2f53e0.png')] bg-center bg-cover opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-shadow">NeuroVerse</h1>
          <h2 className="text-xl md:text-3xl text-neuro-amber mb-8 text-shadow">Armonía de lo Imperfecto</h2>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-10 text-shadow">
            Música, lectoescritura y poesía: el poder sanador del arte para superar la depresión, 
            ansiedad y encontrar la paz interior.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-neuro-amber hover:bg-neuro-amber/80 text-white px-8 py-6 text-lg">
              <Link to="/libros">Explorar Libros</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              <Link to="/servicios">Descubrir Servicios</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-gradient-to-b from-background to-neuro-deepblue/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-neuro-deepblue">Sobre </span>
            <span className="text-neuro-gold">José Ángel</span>
          </h2>
          
          <div className="glass-effect p-8 max-w-4xl mx-auto">
            <Tabs defaultValue="escritor" onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 md:grid-cols-5 bg-neuro-deepblue/10">
                <TabsTrigger value="escritor" className="data-[state=active]:bg-neuro-gold data-[state=active]:text-white">
                  <Pen className="h-4 w-4 mr-2" /> Escritor
                </TabsTrigger>
                <TabsTrigger value="locutor" className="data-[state=active]:bg-neuro-gold data-[state=active]:text-white">
                  <Headphones className="h-4 w-4 mr-2" /> Locutor
                </TabsTrigger>
                <TabsTrigger value="poeta" className="data-[state=active]:bg-neuro-gold data-[state=active]:text-white">
                  <MessageSquareQuote className="h-4 w-4 mr-2" /> Poeta
                </TabsTrigger>
                <TabsTrigger value="audio" className="data-[state=active]:bg-neuro-gold data-[state=active]:text-white">
                  <Music className="h-4 w-4 mr-2" /> Audio
                </TabsTrigger>
                <TabsTrigger value="coach" className="data-[state=active]:bg-neuro-gold data-[state=active]:text-white">
                  <Brain className="h-4 w-4 mr-2" /> Coach
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="escritor" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-neuro-deepblue">Escritor Profesional</h3>
                  <p>
                    Con más de 4 libros publicados en plataformas como Amazon, Kobo, Lulu.com y autoreseeditores.com,
                    me especializo en escritura creativa y narrativa que explora las profundidades del ser humano,
                    buscando siempre el equilibrio y la armonía a través de las palabras.
                  </p>
                  <Button asChild className="bg-neuro-amber hover:bg-neuro-amber/80 text-white">
                    <Link to="/sobre-mi">Conocer más sobre mi trabajo</Link>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="locutor" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-neuro-deepblue">Locutor Profesional</h3>
                  <p>
                    Mi voz es mi herramienta para transmitir emociones y mensajes poderosos. Ofrezco servicios
                    de locución profesional para audiolibros, comerciales, documentales y contenido multimedia,
                    con enfoque en narrativas que inspiran y transforman.
                  </p>
                  <Button asChild className="bg-neuro-amber hover:bg-neuro-amber/80 text-white">
                    <Link to="/servicios/locucion">Escuchar muestras de voz</Link>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="poeta" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-neuro-deepblue">Poeta y Creador</h3>
                  <p>
                    La poesía es el lenguaje del alma. A través de mis versos exploro la condición humana,
                    ofreciendo una perspectiva única sobre la "armonía de lo imperfecto" y el poder sanador
                    de las palabras expresadas con autenticidad y belleza.
                  </p>
                  <Button asChild className="bg-neuro-amber hover:bg-neuro-amber/80 text-white">
                    <Link to="/poesia">Descubrir mi poesía</Link>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="audio" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-neuro-deepblue">Editor de Audio</h3>
                  <p>
                    Como profesional del audio, creo experiencias sonoras que complementan el poder de la palabra.
                    Mi trabajo en edición y producción de audio se enfoca en maximizar el impacto emocional
                    y terapéutico del sonido como herramienta de sanación y expresión.
                  </p>
                  <Button asChild className="bg-neuro-amber hover:bg-neuro-amber/80 text-white">
                    <Link to="/servicios/audio">Ver servicios de audio</Link>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="coach" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-neuro-deepblue">Coach PNL y Pensamiento Crítico</h3>
                  <p>
                    Mi experiencia en Programación Neurolingüística (PNL) me permite ayudar a otros a transformar
                    sus patrones mentales y emocionales. Con un enfoque en el pensamiento crítico,
                    desarrollo herramientas para superar la depresión, ansiedad y encontrar equilibrio mental.
                  </p>
                  <Button asChild className="bg-neuro-amber hover:bg-neuro-amber/80 text-white">
                    <Link to="/servicios/coaching">Explorar programas de coaching</Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Books Section */}
      <section className="py-16 bg-neuro-deepblue text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Mis Libros</h2>
          <p className="text-center text-neuro-amber mb-12 max-w-2xl mx-auto">
            Descubre mis obras publicadas, disponibles en Amazon, Kobo, Lulu.com y autoreseeditores.com
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredBooks.map((book) => (
              <Card key={book.id} className="bg-white/5 border-none text-white overflow-hidden group">
                <div className="overflow-hidden h-64 relative">
                  <img 
                    src={book.coverImage} 
                    alt={book.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <Link to={book.link} className="text-white underline">Ver detalles</Link>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-neuro-gold">{book.title}</CardTitle>
                  <CardDescription className="text-gray-300">{book.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="link" className="text-neuro-amber hover:text-neuro-gold">
                    <Link to={book.link}>Leer más</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-neuro-amber hover:bg-neuro-amber/80 text-white px-8">
              <Link to="/libros">Ver todos los libros</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Radio Section */}
      <section className="py-16 bg-gradient-to-b from-neuro-deepblue to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Radio Evolución</h2>
          <div className="max-w-3xl mx-auto">
            <RadioWidget />
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-background to-neuro-teal/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Servicios Profesionales</h2>
          <p className="text-center text-neuro-deepblue mb-12 max-w-2xl mx-auto">
            Descubre cómo mis servicios pueden ayudarte a transformar tu vida y encontrar el equilibrio
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <div className="p-3 rounded-full bg-neuro-deepblue/5 mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-neuro-deepblue text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">{service.description}</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button asChild variant="outline" className="border-neuro-teal text-neuro-teal hover:bg-neuro-teal hover:text-white">
                    <Link to={service.link}>Más información</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Talent Showcase Section */}
      <section className="py-16 bg-gradient-to-b from-background to-neuro-gold/10">
        <div className="container mx-auto px-4">
          <TalentShowcase />
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="py-16 px-4 bg-neuro-deepblue text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl italic font-light mb-8">
            "La música, la lectoescritura y la poesía son la base de la <span className="text-neuro-gold font-semibold">Inteligencia Ecuativa</span>: 
            la armonía de lo imperfecto."
          </h2>
          <p className="text-neuro-amber text-xl">— José Ángel</p>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-background to-neuro-gold/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Testimonios</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white shadow-md">
                <CardContent className="pt-8">
                  <div className="text-4xl text-neuro-gold mb-4">"</div>
                  <p className="italic text-gray-700 mb-6">{testimonial.text}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-neuro-deepblue">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                    <div className="text-4xl text-neuro-gold">"</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-neuro-deepblue to-neuro-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para transformar tu vida?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Juntos podemos explorar el poder sanador de las palabras, la música y el pensamiento creativo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-neuro-amber hover:bg-neuro-amber/80 text-white px-8 py-6 text-lg">
              <Link to="/contacto">Contactar ahora</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              <Link to="/tienda">Visitar tienda</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
