import { HeartHandshake, PawPrint, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const pilares = [
  {
    icon: HeartHandshake,
    title: "Trato con respeto",
    text: "No hay dos mascotas iguales: cada paseo se piensa para ella.",
  },
  {
    icon: PawPrint,
    title: "Disfrute real",
    text: "El paseo es tiempo de tu mascota: olfatear, moverse y ser feliz.",
  },
  {
    icon: Users,
    title: "Familias tranquilas",
    text: "Saber que tu mascota está bien cuidada te da paz mientras trabajas o viajas.",
  },
];

export function Nosotros() {
  return (
    <section id="nosotros" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-terracotta-600">
            Sobre MyPet
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-forest-950 sm:text-4xl">
            Personas y mascotas, en las mejores manos
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-forest-800/80">
            MyPet nace de una idea simple: que las mascotas disfruten de su
            paseo cuando sus familias no pueden acompañarlas. Nuestro foco está
            en el bienestar animal, la confianza y la transparencia en cada
            encuentro.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-forest-800/80">
            Hoy coordinamos los paseos directamente por WhatsApp, para que la
            experiencia empiece con una conversación humana y cercana.
          </p>
        </Reveal>

        <div className="space-y-4">
          {pilares.map((pilar, index) => (
            <Reveal key={pilar.title} delay={index * 0.08}>
              <div className="flex items-start gap-4 rounded-3xl border border-forest-950/5 bg-white p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-forest-100 text-forest-700">
                  <pilar.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-forest-950">
                    {pilar.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-forest-800/75">
                    {pilar.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}