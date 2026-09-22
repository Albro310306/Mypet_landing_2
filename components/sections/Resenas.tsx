import Image from "next/image";
import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buttonOutline } from "@/lib/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { resenas } from "@/data/resenas";

// Duplicamos varias veces para el loop infinito sin cortes en pantallas grandes
const duplicatedResenas = [...resenas, ...resenas, ...resenas, ...resenas, ...resenas, ...resenas];

export function Resenas() {
  return (
    <section id="resenas" className="scroll-mt-20 overflow-hidden bg-forest-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Reseñas"
            title="Lo que dicen las familias"
            subtitle="Opiniones reales de quienes confían en MyPet para el bienestar de su mascota."
          />
        </Reveal>
      </div>

      {resenas.length > 0 ? (
        <div className="mt-14 w-full">
          <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] pb-4">
            <div className="flex animate-carousel gap-6 pr-6">
              {duplicatedResenas.map((resena, index) => (
                <div
                  key={`${resena.id}-${index}`}
                  className="flex w-[320px] shrink-0 flex-col rounded-3xl border border-forest-950/5 bg-white p-7 shadow-sm sm:w-[380px]"
                >
                  {resena.rating !== undefined && (
                    <div className="flex gap-1" aria-label={`Calificación ${resena.rating} de 5 estrellas`}>
                      {Array.from({ length: resena.rating }).map((_, i) => (
                        <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                      ))}
                    </div>
                  )}
                  <blockquote className="mt-4 flex-1 text-base leading-relaxed text-forest-950/90">
                    “{resena.texto}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    {resena.foto && (
                      <div className="relative size-10 shrink-0 overflow-hidden rounded-full">
                        <Image
                          src={resena.foto}
                          alt=""
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-semibold text-forest-950">{resena.nombre}</p>
                      {resena.mascota && (
                        <p className="text-xs text-forest-800/60">{resena.mascota}</p>
                      )}
                    </div>
                  </figcaption>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto mt-14 max-w-xl px-5 sm:px-8">
          <Reveal>
            <div className="rounded-3xl border border-dashed border-forest-300 bg-white/60 p-10 text-center">
              <p className="text-lg font-medium text-forest-900">
                Estamos reuniendo las reseñas de nuestros clientes
              </p>
              <p className="mt-3 text-sm leading-relaxed text-forest-800/75">
                Escríbenos por WhatsApp y con gusto te contamos sobre la experiencia de otras familias.
              </p>
              <a
                href={getWhatsAppUrl("Hola MyPet, quiero conocer las experiencias de otras familias con los paseos.")}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonOutline} mt-6 px-6 py-3`}
              >
                Conocer experiencias
              </a>
            </div>
          </Reveal>
        </div>
      )}
    </section>
  );
}