
export interface Product {
  id: number;
  title: string;
  type: "libro" | "audio" | "curso" | "servicio";
  coverImage: string;
  description: string;
  price: number;
  formato: string;
  duracion?: string;
  modulos?: number;
}
