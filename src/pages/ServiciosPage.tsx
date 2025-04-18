
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Pen, Headphones, Music, Brain, MessageSquareQuote, Clock, CheckCircle } from "lucide-react";

const ServiciosPage = () => {
  const services = [
    {
      id: "escritura",
      title: "Escritura Creativa",
      icon: <Pen className="h-12 w-12 text-neuro-teal" />,
      description: "Servicios profesionales de escritura y asesoría literaria para desarrollar tu potencial creativo.",
      features: [
        "Talleres de escritura creativa",
        "Edición y corrección de textos",
        "Asesoría para publicación de libros",
        "Redacción de contenido editorial",
        "Desarrollo de narrativas personalizadas"
      ],
      pricing: [
        {
          title: "Básico",
          price: 99,
          period: "por sesión",
          features: ["Taller individual (1 hora)", "Análisis de texto (hasta 10 páginas)", "Feedback detallado"]
        },
        {
          title: "Estándar",
          price: 249,
          period: "mensual",
          features: ["4 talleres individuales", "Análisis de texto (hasta 50 páginas)", "Feedback detallado", "Plan de desarrollo"]
        },
        {
          title: "Premium",
          price: 499,
          period: "por proyecto",
          features: ["Asesoría completa para publicación", "Edición integral", "Desarrollo de estrategia de marketing", "Soporte continuo"]
        }
      ],
      faqs: [
        {
          question: "¿Qué nivel de experiencia necesito para los talleres de escritura?",
          answer: "Mis talleres están diseñados para todos los niveles, desde principiantes hasta escritores experimentados. El contenido se adapta a tus necesidades específicas."
        },
        {
          question: "¿Cuánto tiempo toma el proceso completo de asesoría para publicación?",
          answer: "El tiempo varía según la extensión y complejidad del proyecto, pero generalmente el proceso completo puede tomar entre 3-6 meses, incluyendo edición, diseño y estrategia de publicación."
        },
        {
          question: "¿Trabajas con escritores internacionales?",
          answer: "¡Absolutamente! Ofrezco servicios en línea que me permiten trabajar con escritores de cualquier parte del mundo. Las sesiones se realizan a través de videoconferencia."
        }
      ]
    },
    {
      id: "locucion",
      title: "Locución Profesional",
      icon: <Headphones className="h-12 w-12 text-neuro-amber" />,
      description: "Servicios de locución profesional para audiolibros, publicidad, documentales y contenido multimedia.",
      features: [
        "Narración de audiolibros",
        "Locución comercial",
        "Voz para documentales",
        "Podcasts y contenido digital",
        "Mensajes corporativos"
      ],
      pricing: [
        {
          title: "Estándar",
          price: 149,
          period: "por hora de audio terminado",
          features: ["Grabación profesional", "1 ronda de revisiones", "Entrega en formato mp3/wav"]
        },
        {
          title: "Premium",
          price: 249,
          period: "por hora de audio terminado",
          features: ["Grabación profesional", "2 rondas de revisiones", "Edición básica incluida", "Entrega en múltiples formatos"]
        },
        {
          title: "Audiolibro",
          price: 1999,
          period: "proyecto completo",
          features: ["Hasta 80.000 palabras", "Producción completa", "Distribución en plataformas", "Promoción básica"]
        }
      ],
      faqs: [
        {
          question: "¿Qué tipo de voz y estilo ofreces?",
          answer: "Mi voz tiene un registro medio-grave con gran versatilidad. Puedo adaptar mi estilo desde narrativo cálido hasta corporativo formal, según las necesidades de tu proyecto."
        },
        {
          question: "¿Cuál es el tiempo de entrega promedio?",
          answer: "Para proyectos estándar (menos de 30 minutos de audio final), el tiempo de entrega es de 3-5 días hábiles. Para audiolibros y proyectos más extensos, establecemos un cronograma personalizado."
        },
        {
          question: "¿Incluyes efectos de sonido o música de fondo?",
          answer: "Los paquetes básicos incluyen solo locución. Los efectos de sonido y música pueden agregarse como servicios adicionales o están incluidos en los paquetes premium específicos."
        }
      ]
    },
    {
      id: "poesia",
      title: "Poesía Terapéutica",
      icon: <MessageSquareQuote className="h-12 w-12 text-neuro-copper" />,
      description: "Descubre el poder sanador de la poesía para combatir la ansiedad, depresión y encontrar equilibrio emocional.",
      features: [
        "Talleres de escritura poética terapéutica",
        "Sesiones de lectura y análisis poético",
        "Creación de poemas personalizados",
        "Técnicas de expresión emocional a través de la poesía",
        "Programas para grupos e individuos"
      ],
      pricing: [
        {
          title: "Individual",
          price: 89,
          period: "por sesión",
          features: ["Sesión personalizada (1 hora)", "Material didáctico", "Ejercicios prácticos"]
        },
        {
          title: "Terapia Completa",
          price: 349,
          period: "programa de 6 semanas",
          features: ["6 sesiones personalizadas", "Material didáctico completo", "Seguimiento continuo", "Poema personalizado"]
        },
        {
          title: "Grupos",
          price: 599,
          period: "por grupo (hasta 10 personas)",
          features: ["Programa de 8 sesiones", "Materiales para todos los participantes", "Dinámicas grupales", "Certificado de participación"]
        }
      ],
      faqs: [
        {
          question: "¿Necesito experiencia previa con la poesía?",
          answer: "No se requiere experiencia previa. El enfoque terapéutico está diseñado para ser accesible a todas las personas, independientemente de su familiaridad con la poesía."
        },
        {
          question: "¿Cómo ayuda la poesía con la ansiedad y depresión?",
          answer: "La poesía proporciona un canal estructurado para expresar emociones complejas, ayuda a procesar experiencias traumáticas y genera un espacio seguro para la exploración personal, activando mecanismos neurológicos asociados con el bienestar."
        },
        {
          question: "¿Puedo solicitar un tema específico para un poema personalizado?",
          answer: "Absolutamente. Los poemas personalizados se crean basados en tus experiencias, necesidades emocionales y temas específicos que desees explorar o procesar."
        }
      ]
    },
    {
      id: "audio",
      title: "Edición de Audio",
      icon: <Music className="h-12 w-12 text-neuro-deepblue" />,
      description: "Servicios profesionales de edición y producción de audio para proyectos literarios, musicales y multimedia.",
      features: [
        "Edición de audiolibros y podcasts",
        "Masterización de audio",
        "Eliminación de ruido y restauración",
        "Producción musical para contenido literario",
        "Efectos sonoros y ambientación"
      ],
      pricing: [
        {
          title: "Básico",
          price: 79,
          period: "por hora de audio",
          features: ["Edición básica", "Limpieza de ruido", "Normalización", "1 revisión"]
        },
        {
          title: "Profesional",
          price: 149,
          period: "por hora de audio",
          features: ["Edición avanzada", "Restauración completa", "Masterización", "2 revisiones", "Efectos básicos"]
        },
        {
          title: "Premium",
          price: 399,
          period: "por proyecto",
          features: ["Producción completa", "Música original", "Efectos personalizados", "Masterización premium", "Revisiones ilimitadas"]
        }
      ],
      faqs: [
        {
          question: "¿Qué formatos de audio aceptas y entregas?",
          answer: "Acepto archivos en formatos WAV, MP3, AIFF y FLAC. Las entregas se realizan en el formato que prefieras, con opciones de alta resolución para proyectos profesionales."
        },
        {
          question: "¿Puedes recrear un ambiente sonoro específico para mi audiolibro?",
          answer: "Sí, puedo crear paisajes sonoros personalizados que complementen la narrativa de tu audiolibro, desde ambientes naturales hasta escenarios futuristas o fantásticos."
        },
        {
          question: "¿Cómo manejas proyectos de gran volumen como audiolibros completos?",
          answer: "Para proyectos extensos, trabajo por capítulos o secciones, con entregas parciales para revisión. Esto permite un flujo de trabajo eficiente y mantiene la consistencia a lo largo de todo el proyecto."
        }
      ]
    },
    {
      id: "coaching",
      title: "Coaching PNL",
      icon: <Brain className="h-12 w-12 text-neuro-gold" />,
      description: "Coaching con programación neurolingüística para desarrollo personal, superación de bloqueos y fortalecimiento del pensamiento crítico.",
      features: [
        "Sesiones individuales de coaching",
        "Programas de transformación personal",
        "Técnicas avanzadas de PNL",
        "Desarrollo del pensamiento crítico",
        "Estrategias para superar ansiedad y depresión"
      ],
      pricing: [
        {
          title: "Diagnóstico",
          price: 99,
          period: "sesión única",
          features: ["Evaluación inicial (90 min)", "Identificación de objetivos", "Plan de acción preliminar"]
        },
        {
          title: "Transformación",
          price: 499,
          period: "programa de 8 semanas",
          features: ["8 sesiones individuales", "Material de apoyo", "Técnicas personalizadas", "Seguimiento continuo"]
        },
        {
          title: "Maestría",
          price: 1299,
          period: "programa de 6 meses",
          features: ["24 sesiones quincenales", "Programa personalizado completo", "Acceso a recursos exclusivos", "Soporte por mensajería", "Certificación de completitud"]
        }
      ],
      faqs: [
        {
          question: "¿Qué resultados puedo esperar del coaching con PNL?",
          answer: "Los resultados varían según los objetivos individuales, pero generalmente incluyen mayor claridad mental, reducción de ansiedad, mejora en la toma de decisiones, superación de bloqueos emocionales y desarrollo de nuevos patrones de pensamiento positivos."
        },
        {
          question: "¿Cuánto tiempo se necesita para ver resultados?",
          answer: "La mayoría de los clientes experimentan cambios positivos después de 3-4 sesiones. Para transformaciones profundas y sostenibles, se recomiendan programas de 8 semanas o más."
        },
        {
          question: "¿El coaching PNL puede ayudar con mi situación específica de Parkinson?",
          answer: "Sí, desde mi experiencia personal con Parkinson, he desarrollado técnicas específicas que ayudan a manejar los aspectos emocionales y mentales asociados con condiciones crónicas, complementando (nunca reemplazando) el tratamiento médico convencional."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <section className="relative pt-20 pb-16 bg-neuro-deepblue text-white">
        <div className="absolute inset-0 bg-[url('/public/lovable-uploads/2cbdaa7f-6c60-4c12-9507-df9979a74a40.png')] bg-cover opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Servicios Profesionales</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-neuro-amber mb-8">
            Descubre cómo mis servicios pueden ayudarte a transformar tu vida, expresar tu creatividad y encontrar equilibrio.
          </p>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-b from-background to-neuro-deepblue/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                  <div className="p-6 rounded-full bg-neuro-deepblue/5 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-neuro-deepblue mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-600">{service.description}</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h3 className="text-xl font-semibold text-neuro-deepblue mb-4">Lo que ofrezco</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-neuro-teal mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <h3 className="text-2xl font-bold text-neuro-deepblue mb-6">Planes y Precios</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {service.pricing.map((plan, index) => (
                    <Card key={index} className={`flex flex-col ${
                      index === 1 ? 'border-neuro-amber shadow-lg relative' : ''
                    }`}>
                      {index === 1 && (
                        <div className="absolute -top-4 left-0 right-0 flex justify-center">
                          <span className="bg-neuro-amber text-white px-4 py-1 rounded-full text-sm font-medium">
                            Más Popular
                          </span>
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                          <span>{plan.title}</span>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-neuro-deepblue">${plan.price}</span>
                            <span className="text-sm text-gray-500 block">{plan.period}</span>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="space-y-2">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-neuro-teal mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className={`w-full ${
                          index === 1 
                            ? 'bg-neuro-amber hover:bg-neuro-amber/80 text-white' 
                            : 'bg-neuro-deepblue hover:bg-neuro-deepblue/80 text-white'
                        }`}>
                          Contratar
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-neuro-deepblue mb-6">Preguntas Frecuentes</h3>
                <Accordion type="single" collapsible className="mb-16">
                  {service.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${service.id}-${index}`}>
                      <AccordionTrigger className="text-left text-neuro-deepblue hover:text-neuro-teal">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                <div className="border-b border-gray-200 mb-16"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-neuro-deepblue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Tienes un proyecto especial en mente?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Ofrezco soluciones personalizadas para proyectos únicos. Contáctame para discutir tus necesidades específicas.
          </p>
          <Button asChild className="bg-neuro-amber hover:bg-neuro-amber/80 text-white px-8 py-6 text-lg">
            <Link to="/contacto">Solicitar Consulta Gratuita</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServiciosPage;
