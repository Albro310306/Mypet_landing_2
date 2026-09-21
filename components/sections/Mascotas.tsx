import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mascotas } from "@/data/mascotas";

const aspectRatios = [
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[3/4]",
];

export function Mascotas() {
  return (
    <section id="mascotas" className="scroll-mt-20 bg-cream-100 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Nuestras mascotas"
          title="Ellos son parte de la familia"
          subtitle="Cada paseo es una oportunidad para que disfruten, se despejen y vuelvan felices a casa."
        />

        {mascotas.length > 0 ? (
          <div className="mt-14 columns-2 gap-4 md:columns-3 md:gap-5">
            {mascotas.map((mascota, index) => (
              <Reveal key={mascota.id} delay={(index % 3) * 0.08}>
                <figure
                  className={`group relative mb-4 break-inside-avoid overflow-hidden rounded-3xl md:mb-5 ${aspectRatios[index % aspectRatios.length]}`}
                >
                  <Image
                    src={mascota.foto}
                    alt={
                      mascota.nombre ??
                      `Mascota paseada por MyPet ${mascota.id}`
                    }
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  {mascota.nombre && (
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/70 to-transparent p-4 pt-10 text-sm font-medium text-cream-50">
                      {mascota.nombre}
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <p className="mt-14 rounded-3xl border border-dashed border-forest-300 bg-white/60 p-10 text-center text-forest-800">
              Pronto compartiremos aquí a las mascotas que han disfrutado los
              paseos con MyPet.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}