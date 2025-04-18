
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Book, Headphones, Pen, Brain } from "lucide-react";
import { Product } from "../types/product";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "libro":
        return <Book className="h-5 w-5" />;
      case "audio":
        return <Headphones className="h-5 w-5" />;
      case "curso":
        return <Pen className="h-5 w-5" />;
      case "servicio":
        return <Brain className="h-5 w-5" />;
      default:
        return <ShoppingCart className="h-5 w-5" />;
    }
  };
  
  const handleAddToCart = () => {
    toast.success(`${product.title} añadido al carrito`, {
      description: `€${product.price.toFixed(2)}`,
      duration: 3000,
    });
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.coverImage} 
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{product.title}</CardTitle>
          <div className="p-1 rounded-full bg-neuro-deepblue/10">
            {getIcon(product.type)}
          </div>
        </div>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0 flex-grow">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Formato:</span>
            <span>{product.formato}</span>
          </div>
          {product.duracion && (
            <div className="flex justify-between">
              <span className="text-gray-500">Duración:</span>
              <span>{product.duracion}</span>
            </div>
          )}
          {product.modulos && (
            <div className="flex justify-between">
              <span className="text-gray-500">Módulos:</span>
              <span>{product.modulos}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-4 flex justify-between items-center border-t mt-auto">
        <div className="text-xl font-bold text-neuro-deepblue">€{product.price.toFixed(2)}</div>
        <Button onClick={handleAddToCart} className="bg-neuro-amber hover:bg-neuro-amber/80 text-white">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Añadir
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
