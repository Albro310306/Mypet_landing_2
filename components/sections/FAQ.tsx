import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buttonOutline } from "@/lib/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const preguntas = [
  {
    pregunta: "¿Qué es MyPet?",
    respuesta:
      "MyPet conecta a tu mascota con paseadores de confianza. Nos enfocamos en la seguridad, el bienestar animal y una atención cercana, empezando todo por WhatsApp.",
  },
  {
    pregunta: "¿Cómo reservo o coordino un paseo?",
    respuesta:
      "Escríbenos por WhatsApp, cuéntanos qué necesitas y nosotros te guiamos paso a paso: tu mascota, tu zona y tus horarios preferidos.",
  },
  {
    pregunta: "¿En qué zonas ofrecen paseos?",
    respuesta:
      "Te confirmamos las zonas disponibles por WhatsApp según tu ubicación y la disponibilidad actual de nuestros paseadores.",
  },
  {
    pregunta: "¿Qué pasa si mi mascota tiene necesidades especiales?",
    respuesta:
      "Nos interesa conocer a tu mascota. Cuéntanos sus particulares y coordinamos un paseo pensado especialmente para ella.",
  },
  {
    pregunta: "¿Los paseos son individuales o en grupo?",
    respuesta:
      "Depende de lo que sea mejor para tu mascota. Lo conversamos contigo y elegimos la opción con la que se sienta más cómoda.",
  },
  {
    pregunta: "¿Cómo conozco a los paseadores?",
    respuesta:
      "En esta web podrás ver a nuestro equipo. Además, al escribirnos por WhatsApp te presentamos al paseador ideal para tu mascota.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 bg-cream-100 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas"
          subtitle="Y si te queda alguna pregunta, siempre puedes escribirnos."
        />

        <div className="mt-12 space-y-3">
          {preguntas.map((item, index) => (
            <Reveal key={item.pregunta} delay={index * 0.05}>
              <details className="group rounded-2xl border border-forest-950/5 bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-medium text-forest-950 transition-colors hover:text-forest-700">
                  {item.pregunta}
                  <span
                    className="grid size-8 shrink-0 place-items-center rounded-full bg-forest-100 text-forest-700 transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 16 16" className="size-4" fill="none">
                      <path
                        d="M8 3v10M3 8h10"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="px-6 pb-6 text-sm leading-relaxed text-forest-800/80">
                  {item.respuesta}
                </p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href={getWhatsAppUrl("Hola MyPet, tengo una pregunta.")}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonOutline} px-6 py-3`}
          >
            Hacer otra pregunta
          </a>
        </Reveal>
      </div>
    </section>
  );
}