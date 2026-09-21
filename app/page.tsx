import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Paseadores } from "@/components/sections/Paseadores";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { Seguridad } from "@/components/sections/Seguridad";
import { Mascotas } from "@/components/sections/Mascotas";
import { TiposPaseo } from "@/components/sections/TiposPaseo";
import { Resenas } from "@/components/sections/Resenas";
import { Nosotros } from "@/components/sections/Nosotros";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Paseadores />
        <ComoFunciona />
        <Seguridad />
        <Mascotas />
        <TiposPaseo />
        <Resenas />
        <Nosotros />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}