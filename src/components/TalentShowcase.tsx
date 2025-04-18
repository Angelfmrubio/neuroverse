
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, Instagram, Facebook, Globe } from "lucide-react";

type Talent = {
  id: number;
  name: string;
  profession: string;
  description: string;
  imageUrl: string;
  socialLinks: {
    website?: string;
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
  };
};

const TalentShowcase = () => {
  const talents: Talent[] = [
    {
      id: 1,
      name: "Dra. Thayssa Santos",
      profession: "Odontología",
      description: "Especialista en estética dental, implantes, ortodoncia y rehabilitación. Consulta inicial gratuita.",
      imageUrl: "/public/lovable-uploads/6ad66485-cab2-4d25-9713-b9dc4d041863.png",
      socialLinks: {
        whatsapp: "https://wa.me/584147475917",
        instagram: "https://www.instagram.com/dra.thayssasantos"
      }
    },
    {
      id: 2,
      name: "Dra. Marian Rojas Estapé",
      profession: "Psicología Clínica",
      description: "Especialista en salud mental, psicología infantil, tanatología, neuropsicología y psiquiatría.",
      imageUrl: "/public/lovable-uploads/ed0198dc-4d51-4a91-bd4e-027ffbf9ac75.png",
      socialLinks: {
        website: "http://www.sitioinincreible.com",
        whatsapp: "https://wa.me/584147475917"
      }
    },
    {
      id: 3,
      name: "Servicios GERKAR",
      profession: "Lubricantes Automotrices",
      description: "Elite en lubricantes. Calidad, rendimiento y garantía para tu vehículo. Productos de alta calidad.",
      imageUrl: "/public/lovable-uploads/38a606c7-accd-4ef1-ae22-6b9c6baf2c7d.png",
      socialLinks: {
        instagram: "https://www.instagram.com/multiserviciosgerkar",
        whatsapp: "https://wa.me/584247305496"
      }
    },
    {
      id: 4,
      name: "Farmacia SAAS",
      profession: "Servicios Farmacéuticos",
      description: "A tu lado donde estés. El juego perfecto de bienestar, salud y atención. Calidad, variedad y buen servicio.",
      imageUrl: "/public/lovable-uploads/a7f22235-ba44-4b43-b95d-4c6ca3f07720.png",
      socialLinks: {
        instagram: "https://www.instagram.com/saasamistad"
      }
    },
    {
      id: 5,
      name: "Angel Viajes",
      profession: "Agencia de Viajes",
      description: "Tiempo de viajar por el mundo. Vuela con libertad a donde tú quieras. Destinos exclusivos y asesoría personalizada.",
      imageUrl: "/public/lovable-uploads/743bc3cc-c2d5-4541-a306-864c8e0b64cc.png",
      socialLinks: {
        website: "https://www.Angeltusitioideal.com",
        whatsapp: "https://wa.me/584147475917",
        instagram: "https://www.instagram.com/angelviajes"
      }
    }
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neuro-deepblue mb-3">Profesionales Destacados</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Descubre los talentos especiales que están transformando nuestro mundo con sus habilidades y pasión.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {talents.map((talent) => (
          <Card key={talent.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 overflow-hidden">
              <img 
                src={talent.imageUrl} 
                alt={talent.name} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-neuro-deepblue">{talent.name}</CardTitle>
                  <p className="text-neuro-amber font-medium">{talent.profession}</p>
                </div>
                <span className="text-yellow-500">
                  <Star className="h-5 w-5 fill-current" />
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{talent.description}</p>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              {talent.socialLinks.website && (
                <a 
                  href={talent.socialLinks.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-neuro-deepblue hover:text-neuro-gold flex items-center gap-1 px-3 py-2 bg-gray-100 rounded-full"
                >
                  <Globe className="h-4 w-4" /> Website
                </a>
              )}
              {talent.socialLinks.instagram && (
                <a 
                  href={talent.socialLinks.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-neuro-deepblue hover:text-neuro-gold flex items-center gap-1 px-3 py-2 bg-gray-100 rounded-full"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              )}
              {talent.socialLinks.facebook && (
                <a 
                  href={talent.socialLinks.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-neuro-deepblue hover:text-neuro-gold flex items-center gap-1 px-3 py-2 bg-gray-100 rounded-full"
                >
                  <Facebook className="h-4 w-4" /> Facebook
                </a>
              )}
              {talent.socialLinks.whatsapp && (
                <a 
                  href={talent.socialLinks.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-white bg-green-500 hover:bg-green-600 flex items-center gap-1 px-3 py-2 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                  </svg> WhatsApp
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TalentShowcase;
