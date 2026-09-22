import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Servicios } from "@/components/sections/Servicios";
import { Paseadores } from "@/components/sections/Paseadores";
import { Mascotas } from "@/components/sections/Mascotas";
import { Resenas } from "@/components/sections/Resenas";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        
        {/* Sección de Experiencia/Servicios (bg-cream-50) */}
        <Servicios />
        
        {/* Sección de Confianza/Equipo (bg-cream-100) */}
        <Paseadores />
        
        {/* Clientes y Reseñas */}
        <Mascotas />
        <Resenas />
        
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}