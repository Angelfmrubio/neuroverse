
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink, ShoppingCart, BookOpen } from "lucide-react";

const LibrosPage = () => {
  const books = [
    {
      id: 1,
      title: "7 Pisadas Sobre Una Huella",
      slug: "7-pisadas",
      coverImage: "/public/lovable-uploads/6ab3bbe2-ff3f-466f-bda8-bc53bc2f53e0.png",
      description: "Arquitectura del Alma. Una exploración profunda del camino humano y su propósito existencial.",
      category: "filosofia",
      price: 19.99,
      amazonLink: "https://a.co/d/7JDnW1E",
      koboLink: "https://kobo.com/",
      luluLink: "https://lulu.com/",
      autoresLink: "https://www.autoreseditores.com/angel.fenix7/"
    },
    {
      id: 2,
      title: "Anatomía de la Poesía",
      slug: "anatomia-poesia",
      coverImage: "/public/lovable-uploads/f5fa7ce4-4d4b-4325-8630-1f648c27e946.png",
      description: "Cirujano del Lenguaje. Un análisis detallado de la estructura poética y su impacto emocional.",
      category: "poesia",
      price: 24.99,
      amazonLink: "https://a.co/d/hlXbefL",
      koboLink: "https://kobo.com/",
      luluLink: "https://lulu.com/",
      autoresLink: "https://www.autoreseditores.com/angel.fenix7/"
    },
    {
      id: 3,
      title: "Fascinante Cerebro Pedagógico",
      slug: "cerebro-pedagogico",
      coverImage: "/public/lovable-uploads/2cbdaa7f-6c60-4c12-9507-df9979a74a40.png",
      description: "El Poder Oculto de la Mente. Una guía para despertar el potencial cognitivo y emocional.",
      category: "desarrollo",
      price: 22.99,
      amazonLink: "https://a.co/d/i4FeG0U",
      koboLink: "https://kobo.com/",
      luluLink: "https://lulu.com/",
      autoresLink: "https://www.autoreseditores.com/angel.fenix7/"
    },
    {
      id: 4,
      title: "Sintéticos: La Entropía del Ser",
      slug: "sinteticos",
      coverImage: "/public/lovable-uploads/e758d0b0-6fe8-43dd-a980-ddbc74dda0ec.png",
      description: "Orígenes: El Futuro nos Pertenece. Una narrativa que explora la naturaleza humana en un mundo en constante cambio.",
      category: "filosofia",
      price: 21.99,
      amazonLink: "https://a.co/d/cOQVsIC",
      koboLink: "https://kobo.com/",
      luluLink: "https://lulu.com/",
      autoresLink: "https://www.autoreseditores.com/angel.fenix7/"
    }
  ];

  const [filter, setFilter] = useState("todos");

  const filteredBooks = filter === "todos" 
    ? books 
    : books.filter(book => book.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <section className="relative pt-20 pb-16 bg-neuro-deepblue text-white">
        <div className="absolute inset-0 bg-[url('/public/lovable-uploads/6ab3bbe2-ff3f-466f-bda8-bc53bc2f53e0.png')] bg-cover opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Mis Libros</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-neuro-amber mb-8">
            Descubre mundos de palabras que inspiran, transforman y sanan.
          </p>
          
          <Tabs defaultValue="todos" className="w-full max-w-2xl mx-auto">
            <TabsList className="grid grid-cols-4 bg-neuro-deepblue/50">
              <TabsTrigger 
                value="todos" 
                onClick={() => setFilter("todos")}
                className="data-[state=active]:bg-neuro-gold data-[state=active]:text-white"
              >
                Todos
              </TabsTrigger>
              <TabsTrigger 
                value="filosofia" 
                onClick={() => setFilter("filosofia")}
                className="data-[state=active]:bg-neuro-gold data-[state=active]:text-white"
              >
                Filosofía
              </TabsTrigger>
              <TabsTrigger 
                value="poesia" 
                onClick={() => setFilter("poesia")}
                className="data-[state=active]:bg-neuro-gold data-[state=active]:text-white"
              >
                Poesía
              </TabsTrigger>
              <TabsTrigger 
                value="desarrollo" 
                onClick={() => setFilter("desarrollo")}
                className="data-[state=active]:bg-neuro-gold data-[state=active]:text-white"
              >
                Desarrollo
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-b from-background to-neuro-deepblue/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBooks.map(book => (
              <Card key={book.id} className="overflow-hidden flex flex-col h-full">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={book.coverImage} 
                    alt={book.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-neuro-deepblue flex items-center justify-between">
                    {book.title}
                    <span className="text-lg font-normal text-neuro-amber">${book.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 mb-4">{book.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-neuro-deepblue/10 text-neuro-deepblue text-sm rounded-full">
                      {book.category === "filosofia" ? "Filosofía" : 
                       book.category === "poesia" ? "Poesía" : 
                       book.category === "desarrollo" ? "Desarrollo Personal" : book.category}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2 w-full">
                    <a 
                      href={book.amazonLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-neuro-deepblue hover:text-neuro-gold flex items-center gap-1"
                    >
                      <ExternalLink size={14} /> Amazon
                    </a>
                    <a 
                      href={book.koboLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-neuro-deepblue hover:text-neuro-gold flex items-center gap-1"
                    >
                      <ExternalLink size={14} /> Kobo
                    </a>
                    <a 
                      href={book.luluLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-neuro-deepblue hover:text-neuro-gold flex items-center gap-1"
                    >
                      <ExternalLink size={14} /> Lulu
                    </a>
                    <a 
                      href={book.autoresLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-neuro-deepblue hover:text-neuro-gold flex items-center gap-1"
                    >
                      <ExternalLink size={14} /> AutoresEditores
                    </a>
                  </div>
                  <div className="flex gap-2 w-full">
                    <Button className="flex-1 bg-neuro-amber hover:bg-neuro-amber/80 text-white">
                      <ShoppingCart className="mr-2 h-4 w-4" /> Comprar
                    </Button>
                    <Button variant="outline" className="flex-1 border-neuro-deepblue text-neuro-deepblue">
                      <BookOpen className="mr-2 h-4 w-4" /> Detalles
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {filteredBooks.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl text-neuro-deepblue mb-4">No se encontraron libros en esta categoría</h3>
              <Button 
                onClick={() => setFilter("todos")} 
                className="bg-neuro-amber hover:bg-neuro-amber/80 text-white"
              >
                Ver todos los libros
              </Button>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-16 bg-neuro-deepblue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Buscas una experiencia personalizada?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Además de mis libros publicados, ofrezco servicios de escritura personalizada y asesoría literaria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-neuro-amber hover:bg-neuro-amber/80 text-white">
              <Link to="/servicios/escritura">Servicios de Escritura</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contacto">Contactar</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LibrosPage;
