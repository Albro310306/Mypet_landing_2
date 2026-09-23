import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PaseadorCard } from "@/components/paseadores/PaseadorCard";
import { paseadores } from "@/data/paseadores";

export function Paseadores() {
  return (
    <section id="paseadores" className="scroll-mt-20 bg-forest-50 pt-20 pb-10 sm:pt-24 sm:pb-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Nuestro Equipo"
          title="Paseadores Destacados"
          subtitle="Profesionales verificados, capacitados y evaluados constantemente por los dueños para brindarle la máxima seguridad, amor y diversión a tu mascota."
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