import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PaseadorCard } from "@/components/paseadores/PaseadorCard";
import { paseadores } from "@/data/paseadores";

export function Paseadores() {
  return (
    <section id="paseadores" className="scroll-mt-20 bg-forest-50 pt-20 pb-10 sm:pt-24 sm:pb-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Nuestros paseadores"
          title="Paseadores de confianza para tu mascota"
          subtitle="Personas que conocen a los animales, los tratan con respeto y disfrutan cada paseo tanto como tu mascota."
        />

        {paseadores.length > 0 ? (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paseadores.map((paseador, index) => (
              <Reveal key={paseador.id} delay={index * 0.08}>
                <PaseadorCard paseador={paseador} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <p className="mt-14 rounded-3xl border border-dashed border-forest-300 bg-forest-50 p-10 text-center text-forest-800">
              Próximamente te presentaremos a nuestros paseadores.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}