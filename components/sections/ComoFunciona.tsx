import { MessageCircle, MessageSquareText, PawPrint, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buttonPrimary } from "@/lib/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const steps = [
  {
    icon: MessageCircle,
    title: "Escríbenos por WhatsApp",
    text: "Cuéntanos qué necesitas: tu zona, tu mascota y los horarios que prefieres.",
  },
  {
    icon: MessageSquareText,
    title: "Perfil de tu mascota",
    text: "Compartimos contigo cómo cuidamos a tu mascota y qué hay que tener en cuenta durante el paseo.",
  },
  {
    icon: Sparkles,
    title: "Te presentamos al paseador",
    text: "Te recomendamos a la persona ideal, según tu zona y las necesidades de tu mascota.",
  },
  {
    icon: PawPrint,
    title: "Tu mascota disfruta",
    text: "Coordinamos el paseo y tu mascota sale a disfrutar mientras tú estás tranquilo.",
  },
];

export function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-20 bg-forest-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="Empezar es más fácil de lo que imaginas"
          subtitle="Todo inicia con una conversación. Sin formularios complicados, sin apps que instalar."
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <li className="relative h-full rounded-3xl border bg-white p-6">
                <span className="absolute right-5 top-5 font-display text-4xl font-semibold text-forest-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="grid size-11 place-items-center rounded-2xl bg-forest-700 text-cream-50">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-forest-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-800/75">
                  {step.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-12 text-center">
          <a
            href={getWhatsAppUrl("Hola MyPet, quiero saber cómo funcionan los paseos.")}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonPrimary} px-7 py-3.5`}
          >
            Empezar por WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}