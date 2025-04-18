
import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    title: "7 Pisadas Sobre Una Huella",
    type: "libro",
    coverImage: "/public/lovable-uploads/6ab3bbe2-ff3f-466f-bda8-bc53bc2f53e0.png",
    description: "Arquitectura del Alma: Un recorrido poético por las profundidades del ser humano.",
    price: 12.99,
    formato: "Digital (PDF, EPUB, MOBI)"
  },
  {
    id: 2,
    title: "Anatomía de la Poesía",
    type: "libro",
    coverImage: "/public/lovable-uploads/f5fa7ce4-4d4b-4325-8630-1f648c27e946.png",
    description: "Cirujano del Lenguaje: Análisis detallado de la estructura y funcionamiento de la poesía.",
    price: 14.99,
    formato: "Digital (PDF, EPUB, MOBI)"
  },
  {
    id: 3,
    title: "Fascinante Cerebro Pedagógico",
    type: "libro",
    coverImage: "/public/lovable-uploads/2cbdaa7f-6c60-4c12-9507-df9979a74a40.png",
    description: "El Poder Oculto de la Mente: Exploración del cerebro desde una perspectiva educativa.",
    price: 16.99,
    formato: "Digital (PDF, EPUB, MOBI)"
  },
  {
    id: 4,
    title: "Sintéticos: La Entropía del Ser",
    type: "libro",
    coverImage: "/public/lovable-uploads/e758d0b0-6fe8-43dd-a980-ddbc74dda0ec.png",
    description: "Orígenes: El Futuro nos Pertenece. Una visión futurista sobre la condición humana.",
    price: 15.99,
    formato: "Digital (PDF, EPUB, MOBI)"
  },
  {
    id: 5,
    title: "Audiolibro: 7 Pisadas",
    type: "audio",
    coverImage: "/public/lovable-uploads/6ab3bbe2-ff3f-466f-bda8-bc53bc2f53e0.png",
    description: "Versión narrada por el autor con música de fondo original.",
    price: 9.99,
    formato: "MP3",
    duracion: "3 horas 45 minutos"
  },
  {
    id: 6,
    title: "Locución Profesional",
    type: "servicio",
    coverImage: "/placeholder.svg",
    description: "Servicio de locución para proyectos creativos, comerciales o educativos.",
    price: 49.99,
    formato: "Personalizado"
  },
  {
    id: 7,
    title: "Curso de Escritura Creativa",
    type: "curso",
    coverImage: "/placeholder.svg",
    description: "Aprende las técnicas de escritura creativa con ejercicios prácticos y feedback personalizado.",
    price: 79.99,
    formato: "Video + Material PDF",
    modulos: 8,
    duracion: "10 horas"
  },
  {
    id: 8,
    title: "Poesía Terapéutica",
    type: "curso",
    coverImage: "/placeholder.svg",
    description: "Descubre el poder curativo de la poesía en tu vida cotidiana.",
    price: 59.99,
    formato: "Video + Audio + PDF",
    modulos: 6,
    duracion: "8 horas"
  },
  {
    id: 9,
    title: "Pack Musical NeuroVerse",
    type: "audio",
    coverImage: "/placeholder.svg",
    description: "Colección de pistas musicales para meditación, concentración y relajación.",
    price: 19.99,
    formato: "MP3 / WAV",
    duracion: "5 horas"
  },
  {
    id: 10,
    title: "Coaching PNL Personalizado",
    type: "servicio",
    coverImage: "/placeholder.svg",
    description: "Sesiones individuales de coaching con técnicas de Programación Neurolingüística.",
    price: 89.99,
    formato: "Online / Presencial",
    duracion: "4 sesiones x 1 hora"
  }
];
