
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, Headphones, Pen, Brain, ShoppingCart } from "lucide-react";

interface CategoryTabsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryTabs = ({ activeCategory, setActiveCategory }: CategoryTabsProps) => {
  return (
    <Tabs 
      value={activeCategory} 
      onValueChange={setActiveCategory}
      className="w-full mb-10"
    >
      <TabsList className="grid grid-cols-5 w-full max-w-3xl mx-auto">
        <TabsTrigger value="todos" className="flex items-center gap-2">
          <ShoppingCart className="h-4 w-4" />
          <span className="hidden sm:inline">Todos</span>
        </TabsTrigger>
        <TabsTrigger value="libro" className="flex items-center gap-2">
          <Book className="h-4 w-4" />
          <span className="hidden sm:inline">Libros</span>
        </TabsTrigger>
        <TabsTrigger value="audio" className="flex items-center gap-2">
          <Headphones className="h-4 w-4" />
          <span className="hidden sm:inline">Audio</span>
        </TabsTrigger>
        <TabsTrigger value="curso" className="flex items-center gap-2">
          <Pen className="h-4 w-4" />
          <span className="hidden sm:inline">Cursos</span>
        </TabsTrigger>
        <TabsTrigger value="servicio" className="flex items-center gap-2">
          <Brain className="h-4 w-4" />
          <span className="hidden sm:inline">Servicios</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default CategoryTabs;
