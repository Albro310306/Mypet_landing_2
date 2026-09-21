import { HeartHandshake, MessagesSquare, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  {
    icon: ShieldCheck,
    title: "Personas de confianza",
    text: "Conocemos a cada paseador que recomendamos: su experiencia, su trato con los animales y su forma de trabajar.",
  },
  {
    icon: MessagesSquare,
    title: "Comunicación cercana",
    text: "Hablamos sobre tu mascota antes del paseo y seguimos en contacto. Tu tranquilidad empieza por saber que tu mascota está bien.",
  },
  {
    icon: HeartHandshake,
    title: "Bienestar animal siempre",
    text: "El respeto y la calma son la base de cada paseo. Ninguna rutina se impone por encima de lo que tu mascota necesita.",
  },
];

export function Seguridad() {
  return (
    <section id="seguridad" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Seguridad y bienestar"
          title="Tu confianza se construye con cuidado"
          subtitle="Cuidamos cada detalle para que tú estés tranquilo y tu mascota esté feliz."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {points.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.1}>
              <div className="h-full rounded-3xl bg-forest-950 p-7 text-cream-100">
                <span className="grid size-12 place-items-center rounded-2xl bg-cream-50/10 text-forest-200">
                  <point.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-cream-50">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-200/80">
                  {point.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}