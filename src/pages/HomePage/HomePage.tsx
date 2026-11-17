import {
  ComboPromo,
  ContactArc,
  FaqSection,
  Hero,
  Occasions,
  Services,
  Testimonials,
} from '@/features/home';

export default function HomePage() {
  return (
    <>
      <Hero />
      <main id="contenido">
        <Services />
        <ComboPromo />
        <Occasions />
        <Testimonials />
        <FaqSection />
        <ContactArc />
      </main>
    </>
  );
}
