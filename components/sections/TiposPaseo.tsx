import { Clock, Footprints, MapPinned } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buttonOutline } from "@/lib/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const tipos = [
  {
    icon: Footprints,
    title: "Paseo clásico",
    text: "El paseo de siempre: tu mascota camina, se estira y disfruta el aire libre a su ritmo.",
  },
  {
    icon: Clock,
    title: "Paseo con ritmo propio",
    text: "La duración e intensidad se adaptan a tu mascota, para que el paseo nunca sea un esfuerzo forzado.",
  },
  {
    icon: MapPinned,
    title: "Rutas conocidas en tu zona",
    text: "Caminos habituales, menos sorpresas. Coordinamos contigo las rutas más seguras para tu mascota.",
  },
];

export function TiposPaseo() {
  return (
    <section id="tipos-paseo" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Tipos de paseo"
          title="Un paseo para cada mascota"
          subtitle="No hay dos mascotas iguales. El tipo de paseo, la duración y los detalles se acuerdan contigo."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tipos.map((tipo, index) => (
            <Reveal key={tipo.title} delay={index * 0.1}>
              <div className="h-full rounded-3xl border border-forest-950/5 bg-white p-7">
                <span className="grid size-12 place-items-center rounded-2xl bg-forest-100 text-forest-700">
                  <tipo.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-forest-950">
                  {tipo.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-forest-800/75">
                  {tipo.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-forest-800/70">
            Zonas, precios y disponibilidad actual: te los confirmamos por
            WhatsApp.
          </p>
          <a
            href={getWhatsAppUrl(
              "Hola MyPet, quiero saber los tipos de paseo, zonas y disponibilidad."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonOutline} mt-4 px-6 py-3`}
          >
            Consultar por WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}