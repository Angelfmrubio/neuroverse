
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products } from "../data/products";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

const FeaturedProducts = () => {
  const featuredProducts = products.slice(0, 4);
  
  const handleAddToCart = (title: string, price: number) => {
    toast.success(`${title} añadido al carrito`, {
      description: `€${price.toFixed(2)}`,
      duration: 3000,
    });
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Productos Destacados</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Descubre nuestras obras más populares para transformar tu vida y encontrar el equilibrio mental
        </p>
        
        <div className="relative px-10">
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {featuredProducts.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden border-none shadow-md">
                      <div className="aspect-[3/4] overflow-hidden">
                        <img src={product.coverImage} alt={product.title} className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-6 bg-white">
                        <div className="space-y-2">
                          <h3 className="font-semibold text-lg">{product.title}</h3>
                          <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                          <div className="flex justify-between items-center pt-2">
                            <span className="font-bold text-neuro-deepblue">€{product.price.toFixed(2)}</span>
                            <Button 
                              size="sm" 
                              onClick={() => handleAddToCart(product.title, product.price)}
                              className="bg-neuro-amber hover:bg-neuro-amber/80 text-white"
                            >
                              <ShoppingCart className="h-4 w-4 mr-1" /> Añadir
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
