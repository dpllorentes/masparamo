import type { Faq, Occasion, Service, Testimonial } from '@/types/catalog';
import { images } from './images';

export const services: readonly Service[] = [
  {
    id: 'velas',
    title: 'Velas aromáticas',
    description: 'Hechas a mano, con etiqueta tuya.',
    priceFrom: 35000,
    image: images.velaVainilla,
    imageAlt: 'Vela aromática',
    waMessage: 'Hola +PARAMO, quiero cotizar velas.',
  },
  {
    id: 'mugs',
    title: 'Mugs y termos',
    description: 'Con tu nombre, frase o logo.',
    priceFrom: 28000,
    image: images.mug,
    imageAlt: 'Mug personalizado',
    waMessage: 'Hola +PARAMO, quiero cotizar mugs y termos.',
  },
  {
    id: 'ropa',
    title: 'Buzos y camisetas',
    description: 'Bordados o estampados a tu medida.',
    priceFrom: 55000,
    image: images.buzo,
    imageAlt: 'Buzo verde bosque',
    imagePosition: '75% 50%',
    waMessage: 'Hola +PARAMO, quiero cotizar ropa.',
  },
];

export const occasions: readonly Occasion[] = [
  {
    id: 'cumpleanos',
    title: 'Cumpleaños',
    description: 'Mugs, velas y combos con su nombre.',
    waMessage: 'Hola +PARAMO, quiero un regalo de cumpleaños.',
  },
  {
    id: 'aniversarios',
    title: 'Aniversarios',
    description: 'Un detalle con la fecha o una frase de ustedes.',
    waMessage: 'Hola +PARAMO, quiero un regalo de aniversario.',
  },
  {
    id: 'dia-madre',
    title: 'Día de la Madre',
    description: 'Combos de vela y mug para sorprender.',
    waMessage: 'Hola +PARAMO, quiero un regalo para el Día de la Madre.',
  },
  {
    id: 'navidad',
    title: 'Navidad',
    description: 'Regalos por lote para familia y amigos.',
    waMessage: 'Hola +PARAMO, quiero regalos de Navidad.',
  },
  {
    id: 'empresas',
    title: 'Para empresas',
    description: 'Tu logo en mugs, termos, buzos y velas, por lote.',
    waMessage: 'Hola +PARAMO, quiero cotizar regalos para mi empresa.',
  },
];

export const testimonials: readonly Testimonial[] = [
  {
    id: 'camila',
    quote: 'Le regalé un mug a mi mamá con una frase nuestra y se emocionó. Llegó rápido y quedó hermoso.',
    author: 'Camila',
    city: 'Bogotá',
  },
  {
    id: 'andres',
    quote: 'Pedimos buzos para todo el equipo y el bordado quedó impecable.',
    author: 'Andrés',
    city: 'Medellín',
  },
  {
    id: 'laura',
    quote: 'La vela huele delicioso y la etiqueta con su nombre fue el detalle perfecto.',
    author: 'Laura',
    city: 'Cali',
  },
];

export const faqs: readonly Faq[] = [
  {
    id: 'tiempo',
    question: '¿Cuánto demora mi pedido?',
    answer:
      'Entre 3 y 7 días hábiles según el producto y el diseño. Si es para una fecha especial, escríbenos con tiempo.',
  },
  {
    id: 'diseno',
    question: '¿Puedo ver el diseño antes de producir?',
    answer: 'Sí. Te lo mostramos por WhatsApp y lo apruebas antes de empezar.',
  },
  {
    id: 'minimo',
    question: '¿Hay pedido mínimo?',
    answer: 'Para una sola pieza no hay mínimo. Para lotes de empresas te damos un precio por cantidad.',
  },
  {
    id: 'pago',
    question: '¿Cómo se paga?',
    answer: 'Te explicamos las formas de pago por WhatsApp cuando apruebes el diseño.',
  },
  {
    id: 'envios',
    question: '¿Hacen envíos?',
    answer: 'Sí. Entregamos en Bogotá y enviamos a todo el país.',
  },
];
