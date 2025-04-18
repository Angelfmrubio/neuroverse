
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SocialMediaWidget from "@/components/SocialMediaWidget";
import { Mail, Phone, MapPin, MessageSquare, Send, Clock } from "lucide-react";

const ContactoPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulamos el envío del formulario
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarme. Te responderé tan pronto como sea posible.",
      });
      
      // Reseteamos el formulario
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: ""
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-neuro-amber" />,
      title: "Correo Electrónico",
      details: "angelfmrubio7@zohomail.com",
      link: "mailto:angelfmrubio7@zohomail.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-neuro-amber" />,
      title: "Teléfono",
      details: "+584147475917",
      link: "tel:+584147475917"
    },
    {
      icon: <MapPin className="h-6 w-6 text-neuro-amber" />,
      title: "Ubicación",
      details: "Rubio, Táchira, Venezuela",
      link: "#"
    },
    {
      icon: <Clock className="h-6 w-6 text-neuro-amber" />,
      title: "Horario de Atención",
      details: "Lunes a Viernes: 9:00 - 18:00",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <section className="relative pt-20 pb-16 bg-neuro-deepblue text-white">
        <div className="absolute inset-0 bg-[url('/public/lovable-uploads/2cbdaa7f-6c60-4c12-9507-df9979a74a40.png')] bg-cover opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Contacto</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-neuro-amber mb-8">
            Estoy aquí para ayudarte. Envíame un mensaje y responderé a la brevedad posible.
          </p>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-b from-background to-neuro-deepblue/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl font-bold text-neuro-deepblue mb-6">Envíame un Mensaje</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre completo</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@correo.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono (opcional)</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      placeholder="Tu número de teléfono"
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="asunto">Asunto</Label>
                    <Input
                      id="asunto"
                      name="asunto"
                      placeholder="Asunto de tu mensaje"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Escribe tu mensaje aquí..."
                    rows={6}
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-neuro-amber hover:bg-neuro-amber/80 text-white px-8 py-6 text-lg w-full md:w-auto"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-5 w-5" /> Enviar Mensaje
                    </span>
                  )}
                </Button>
              </form>
            </div>
            
            <div className="w-full lg:w-1/3">
              <h2 className="text-3xl font-bold text-neuro-deepblue mb-6">Información de Contacto</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-neuro-deepblue/5 flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-neuro-deepblue">{info.title}</h3>
                          <a 
                            href={info.link} 
                            className={`text-gray-600 hover:text-neuro-amber transition-colors ${
                              info.title === "Ubicación" || info.title === "Horario de Atención" ? 'cursor-default no-underline' : 'hover:underline'
                            }`}
                          >
                            {info.details}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-neuro-deepblue mb-4">Sígueme en Redes Sociales</h3>
                <SocialMediaWidget />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-neuro-deepblue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Prefieres una consulta directa?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Agenda una sesión virtual de 30 minutos para discutir tu proyecto o necesidades específicas.
          </p>
          <Button className="bg-neuro-amber hover:bg-neuro-amber/80 text-white px-8 py-6 text-lg">
            <MessageSquare className="mr-2 h-5 w-5" /> Agendar Consulta
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactoPage;
