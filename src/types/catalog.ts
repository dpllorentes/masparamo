export type CategoryId = 'velas' | 'ropa' | 'mugs' | 'combos';
export type CategoryFilter = CategoryId | 'all';

export interface Category {
  id: CategoryFilter;
  label: string;
}

export interface Product {
  id: string;
  name: string;
  /** Precio de referencia en COP. */
  price: number;
  category: CategoryId;
  /** Mensaje prellenado para WhatsApp. */
  waMessage: string;
  image?: string;
  imageAlt?: string;
  /** Ajuste de encuadre (`object-position`). */
  imagePosition?: string;
  /** Color de fondo del placeholder cuando aún no hay foto. */
  placeholder?: 'salvia' | 'arena';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  priceFrom: number;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  waMessage: string;
}

export interface Occasion {
  id: string;
  title: string;
  description: string;
  waMessage: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  city: string;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}
