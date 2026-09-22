"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { mascotas } from "@/data/mascotas";

// Duplicamos varias veces para garantizar que llene pantallas grandes sin saltos
const duplicated = [...mascotas, ...mascotas, ...mascotas, ...mascotas, ...mascotas, ...mascotas];

export function Mascotas() {
  return (
    <section id="mascotas" className="scroll-mt-20 overflow-hidden bg-cream-100 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-terracotta-600">
            Nuestros clientes
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-semibold tracking-tight text-forest-950 sm:text-4xl">
            Ellos ya confían en MyPet
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center leading-relaxed text-forest-800/70">
            Cada paseo es una oportunidad para que disfruten, se despejen y vuelvan felices a casa.
          </p>
        </Reveal>
      </div>

      {mascotas.length > 0 ? (
        <div className="mt-12 w-full">
          {/* Carrusel auto-scroll */}
          <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex animate-carousel gap-4 pr-4">
              {duplicated.map((mascota, index) => (
                <figure
                  key={`${mascota.id}-${index}`}
                  className="group relative size-44 shrink-0 overflow-hidden rounded-2xl shadow-md sm:size-52"
                >
                  <Image
                    src={mascota.foto}
                    alt={
                      mascota.nombre
                        ? `${mascota.nombre} — cliente MyPet`
                        : `Mascota cliente de MyPet`
                    }
                    fill
                    sizes="208px"
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                  {mascota.nombre && (
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/70 to-transparent p-3 pt-8 text-xs font-medium text-cream-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {mascota.nombre}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto mt-12 max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="rounded-3xl border border-dashed border-forest-300 bg-white/60 p-10 text-center text-forest-800">
              Pronto compartiremos aquí a las mascotas que han disfrutado los
              paseos con MyPet.
            </p>
          </Reveal>
        </div>
      )}
    </section>
  );
}