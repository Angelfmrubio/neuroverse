
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, Headphones, Pen, Brain, Music, ShoppingCart } from "lucide-react";
import { Product } from "./types/product";
import { products } from "./data/products";
import CategoryTabs from "./components/CategoryTabs";
import ProductGrid from "./components/ProductGrid";
import FeaturedProducts from "./components/FeaturedProducts";
import GiftCardSection from "./components/GiftCardSection";

const TiendaPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  
  const filteredProducts = activeCategory === "todos" 
    ? products 
    : products.filter(product => product.type === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 bg-neuro-deepblue text-white">
          <div className="absolute inset-0 bg-[url('/public/lovable-uploads/6ab3bbe2-ff3f-466f-bda8-bc53bc2f53e0.png')] bg-center bg-cover opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">NeuroVerse Tienda</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Descubre recursos transformadores para tu bienestar mental y emocional
            </p>
          </div>
        </section>
        
        {/* Featured Products */}
        <FeaturedProducts />
        
        {/* Main Products Section */}
        <section className="py-16 bg-gradient-to-b from-background to-neuro-teal/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Catálogo Completo</h2>
            
            <CategoryTabs 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
            />
            
            <ProductGrid products={filteredProducts} />
          </div>
        </section>
        
        {/* Gift Cards Section */}
        <GiftCardSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default TiendaPage;
