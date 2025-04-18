
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Heart, Music, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600">Neuro Music</h3>
            <p className="text-purple-200">
              Armonía entre música, mente y espíritu
            </p>
            <div className="flex space-x-4 text-purple-300">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-fuchsia-400">Newsletter</h3>
            <p className="text-purple-200">
              Recibe nuestras novedades musicales
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="px-4 py-2 bg-purple-950 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              />
              <Button className="bg-fuchsia-500 hover:bg-fuchsia-400 text-white">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-800 pt-6 mt-8 text-center text-purple-300">
          <p className="flex items-center justify-center">
            <Headphones size={16} className="mr-2" /> Neuro Music © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
