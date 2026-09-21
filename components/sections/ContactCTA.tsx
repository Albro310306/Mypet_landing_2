import { MessageCircle, PawPrint } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { buttonLight } from "@/lib/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function ContactCTA() {
  return (
    <section
      id="contacto"
      className="scroll-mt-20 bg-cream-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-forest-900 px-6 py-16 text-center sm:px-12 sm:py-20">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-16 -top-16 size-64 rounded-full bg-forest-700/40 blur-2xl"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -right-16 size-72 rounded-full bg-terracotta-500/30 blur-2xl"
            />

            <div className="relative">
              <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-cream-50/10 text-forest-200">
                <PawPrint className="size-7" aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-cream-50 sm:text-4xl">
                Tu mascota te está esperando para su paseo
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-cream-200/85">
                Escríbenos por WhatsApp, cuéntanos de tu mascota y te ayudamos a
                coordinar su próximo paseo.
              </p>
              <a
                href={getWhatsAppUrl(
                  "Hola MyPet, quiero coordinar un paseo para mi mascota."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonLight} mt-8 px-8 py-4 text-base`}
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Hablemos por WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}