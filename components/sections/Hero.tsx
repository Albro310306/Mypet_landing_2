import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { HeroCarousel } from "@/components/ui/HeroCarousel";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-cream-50">
        
        {/* Fondo Carrusel Interactivo */}
        <div className="absolute inset-0 z-0">
          <HeroCarousel />
        </div>

        {/* Overlay Claro pero con un toque sutil de sombra para dar más contraste */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-cream-50/95 via-cream-50/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-forest-950/10 dark:bg-black/25 pointer-events-none" />

        {/* Contenido de texto */}
        <div className="relative z-20 flex w-full max-w-3xl flex-col justify-center px-8 py-20 sm:px-16 lg:py-0">
          <Reveal>
            <h1 className="font-display text-5xl font-medium leading-[1.1] tracking-tight text-forest-950 sm:text-6xl lg:text-[5rem]">
              Tú trabajas <br /> tranquilo.
            </h1>
            <h1 className="mt-2 font-display text-5xl font-medium italic leading-[1.1] tracking-tight text-forest-600 sm:text-6xl lg:text-[5rem]">
              Ellos disfrutan.
            </h1>
          </Reveal>
          
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-forest-800/80 sm:text-xl">
              Paseadores en los que puedes confiar para cuando no puedes estar. Diversión, seguridad y bienestar animal en cada paso.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-10">
            <a
              href={getWhatsAppUrl(
                "Hola MyPet, quiero conocer a los paseadores."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-forest-600 px-8 text-base font-semibold text-white shadow-lg shadow-forest-900/10 transition-all duration-300 hover:scale-105 hover:bg-forest-700 active:scale-95 dark:bg-forest-600 dark:text-forest-950 dark:hover:bg-forest-500"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Escríbenos por WhatsApp
            </a>
          </Reveal>
        </div>


    </section>
  );
}