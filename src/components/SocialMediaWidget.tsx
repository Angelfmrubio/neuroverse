
import { Facebook, Instagram, Linkedin, Link } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SocialMediaWidget = () => {
  return (
    <Card className="overflow-hidden border-none bg-gradient-to-br from-neuro-deepblue to-black shadow-xl">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white">Neurotiks</h3>
          <p className="text-sm text-neuro-slate">Creative Solutions Hub</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {/* Facebook */}
          <a 
            href="https://www.facebook.com/neurotiks" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-3 rounded-lg bg-black/20 hover:bg-black/30 transition-all hover:-translate-y-1 border border-white/10 group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            <Facebook className="h-5 w-5 text-[#1877f2] mr-3 flex-shrink-0" />
            <span className="text-white text-sm">Facebook</span>
          </a>

          {/* Instagram */}
          <a 
            href="https://www.instagram.com/Neurotiksoficial" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-3 rounded-lg bg-black/20 hover:bg-black/30 transition-all hover:-translate-y-1 border border-white/10 group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            <Instagram className="h-5 w-5 text-[#e4405f] mr-3 flex-shrink-0" />
            <span className="text-white text-sm">Instagram</span>
          </a>

          {/* TikTok */}
          <a 
            href="https://www.tiktok.com/@neurotiks7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-3 rounded-lg bg-black/20 hover:bg-black/30 transition-all hover:-translate-y-1 border border-white/10 group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            <svg 
              className="h-5 w-5 text-[#69c9d0] mr-3 flex-shrink-0" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <span className="text-white text-sm">TikTok</span>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/alirio-corredor/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-3 rounded-lg bg-black/20 hover:bg-black/30 transition-all hover:-translate-y-1 border border-white/10 group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            <Linkedin className="h-5 w-5 text-[#0a66c2] mr-3 flex-shrink-0" />
            <span className="text-white text-sm">LinkedIn</span>
          </a>

          {/* Upwork */}
          <a 
            href="https://www.upwork.com/freelancers/~014d726bdb5d001297" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-3 rounded-lg bg-black/20 hover:bg-black/30 transition-all hover:-translate-y-1 border border-white/10 group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            <svg 
              className="h-5 w-5 text-[#6fda44] mr-3 flex-shrink-0" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703a2.707 2.707 0 0 1-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366c-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.551 2.551 0 0 1-2.547 2.548a2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303c2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109c3 0 5.439-2.452 5.439-5.45c0-3-2.439-5.439-5.439-5.439z"/>
            </svg>
            <span className="text-white text-sm">Upwork</span>
          </a>

          {/* Behance */}
          <a 
            href="https://www.behance.net/gallery/216830789/Vision-Autodidacta-Portafolio-Creativo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-3 rounded-lg bg-black/20 hover:bg-black/30 transition-all hover:-translate-y-1 border border-white/10 group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            <svg 
              className="h-5 w-5 text-[#0057ff] mr-3 flex-shrink-0" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3c-3.074 0-5.564-1.729-5.564-5.675c0-3.91 2.325-5.92 5.466-5.92c3.082 0 4.964 1.782 5.375 4.426c.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219c-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906c3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
            </svg>
            <span className="text-white text-sm">Behance</span>
          </a>

          {/* Portfolio */}
          <a 
            href="https://linktr.ee/Neurotiks" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-3 rounded-lg bg-black/20 hover:bg-black/30 transition-all hover:-translate-y-1 border border-white/10 group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            <Link className="h-5 w-5 text-[#8a2be2] mr-3 flex-shrink-0" />
            <span className="text-white text-sm">Portafolio</span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialMediaWidget;
