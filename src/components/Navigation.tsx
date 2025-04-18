
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Music, Headphones, ShoppingCart, Globe, Accessibility } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleHighContrast = () => {
    const newState = !highContrast;
    setHighContrast(newState);
    document.documentElement.classList.toggle('high-contrast', newState);
  };

  const toggleLargeText = () => {
    const newState = !largeText;
    setLargeText(newState);
    document.documentElement.classList.toggle('large-text', newState);
  };

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add keyboard navigation accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <nav className="py-4 px-6 bg-purple-900/90 text-white backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600"
          aria-label="Neuro Music Home"
        >
          Neuro Music
        </Link>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          className="block md:hidden text-white hover:text-purple-300"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/home" className="font-medium hover:text-purple-300 transition-colors">Inicio</Link>
          <Link to="/libros" className="font-medium hover:text-purple-300 transition-colors">Libros</Link>
          <Link to="/servicios" className="font-medium hover:text-purple-300 transition-colors">Servicios</Link>
          <Link to="/contacto" className="font-medium hover:text-purple-300 transition-colors">Contacto</Link>
          <Link 
            to="/matrix" 
            className={`flex items-center space-x-1 bg-purple-700 px-3 py-1.5 rounded-md text-purple-200 hover:bg-purple-600 transition-colors ${location.pathname === "/matrix" ? "ring-2 ring-purple-400" : ""}`}
            aria-current={location.pathname === "/matrix" ? "page" : undefined}
          >
            <Headphones size={16} />
            <span className="font-medium">Music</span>
          </Link>
          <Link to="/tienda">
            <Button variant="outline" className="bg-purple-500 text-white border-purple-400 hover:bg-purple-400 font-medium">
              <ShoppingCart size={18} className="mr-2" />
              Tienda
            </Button>
          </Link>
          
          {/* Accessibility Quick Controls */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={toggleHighContrast}
              className="bg-purple-800/70 hover:bg-purple-700 text-white border-purple-500/30 h-8 w-8"
              aria-label="Alternar alto contraste"
            >
              <Accessibility className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={toggleLargeText}
              className="bg-purple-800/70 hover:bg-purple-700 text-white border-purple-500/30 h-8 w-8"
              aria-label="Alternar tamaño de texto"
            >
              <span className="text-sm font-bold">A</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden absolute top-16 left-0 right-0 bg-purple-900/95 backdrop-blur-md py-4 px-6 shadow-lg"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="flex flex-col space-y-4">
            <Link to="/home" className="text-white hover:text-purple-300 transition-colors py-2 font-medium" role="menuitem">Inicio</Link>
            <Link to="/libros" className="text-white hover:text-purple-300 transition-colors py-2 font-medium" role="menuitem">Libros</Link>
            <Link to="/servicios" className="text-white hover:text-purple-300 transition-colors py-2 font-medium" role="menuitem">Servicios</Link>
            <Link to="/contacto" className="text-white hover:text-purple-300 transition-colors py-2 font-medium" role="menuitem">Contacto</Link>
            <Link 
              to="/matrix" 
              className="flex items-center space-x-1 bg-purple-700 px-3 py-2 rounded-md text-purple-200 hover:bg-purple-600 transition-colors font-medium" 
              role="menuitem"
              aria-current={location.pathname === "/matrix" ? "page" : undefined}
            >
              <Headphones size={16} />
              <span>Music</span>
            </Link>
            <Link to="/tienda" role="menuitem">
              <Button variant="outline" className="w-full bg-purple-500 text-white border-purple-400 hover:bg-purple-400 font-medium">
                <ShoppingCart size={18} className="mr-2" />
                Tienda
              </Button>
            </Link>
            
            {/* Mobile Accessibility Controls */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-purple-700/50">
              <Button 
                variant="outline" 
                onClick={toggleHighContrast}
                className="bg-purple-800/50 hover:bg-purple-700/70 text-white border-purple-500/30 font-medium"
                aria-label="Alternar alto contraste"
              >
                <Accessibility className="h-4 w-4 mr-2" />
                Alto contraste
              </Button>
              <Button 
                variant="outline"
                onClick={toggleLargeText}
                className="bg-purple-800/50 hover:bg-purple-700/70 text-white border-purple-500/30 font-medium"
                aria-label="Alternar tamaño de texto"
              >
                <span className="text-sm font-bold mr-2">A</span>
                Texto grande
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
