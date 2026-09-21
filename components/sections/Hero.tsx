import Image from "next/image";
import { ArrowDown, Heart, Leaf, MessageCircle, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { buttonPrimary, buttonOutline } from "@/lib/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const values = [
  { icon: Heart, label: "Bienestar animal" },
  { icon: ShieldCheck, label: "Confianza" },
  { icon: Leaf, label: "Transparencia" },
];

export function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-forest-200 bg-forest-50 px-4 py-1.5 text-sm font-medium text-forest-700">
              <Heart className="size-4" aria-hidden="true" />
              Paseadores de mascotas con bienestar animal
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-forest-950 sm:text-5xl lg:text-6xl">
              Cuando no puedes estar,{" "}
              <span className="text-forest-600">ellos lo disfrutan</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-forest-800/80">
              MyPet te conecta con paseadores de confianza que cuidan a tu
              mascota como parte de la familia. Cuéntanos qué necesitas y te
              presentamos a la persona ideal.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={getWhatsAppUrl(
                  "Hola MyPet, quiero conocer los paseadores disponibles para mi mascota."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonPrimary} px-7 py-3.5`}
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Hablar por WhatsApp
              </a>
              <a
                href="#paseadores"
                className={`${buttonOutline} px-7 py-3.5`}
              >
                Conocer a los paseadores
                <ArrowDown className="size-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {values.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 text-sm font-medium text-forest-800"
                >
                  <Icon className="size-4 text-terracotta-500" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <Image
            src="/images/hero/hero-placeholder.svg"
            alt="Ilustración de una mascota paseando con MyPet"
            width={800}
            height={620}
            priority
            className="h-auto w-full rounded-3xl"
          />
        </Reveal>
      </div>
    </section>
  );
}