"use client";

import Image from "next/image";
import { MapPin, MessageCircle, Star } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import type { Paseador } from "@/types/paseador";

interface PaseadorCardProps {
  paseador: Paseador;
}

export function PaseadorCard({ paseador }: PaseadorCardProps) {
  const { nombre, foto, zona, descripcion, rating, especialidades } = paseador;

  return (
    <article
      className="group h-[420px] [perspective:1000px]"
      aria-label={`Paseador ${nombre}`}
    >
      {/* Contenedor del flip */}
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* CARA FRONTAL */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl border border-forest-950/5 bg-white [backface-visibility:hidden]">
          <div className="relative h-[68%] w-full overflow-hidden">
            <Image
              src={foto}
              alt={`Foto de ${nombre}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            {/* Gradiente inferior */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
          </div>

          <div className="px-5 pt-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display text-xl font-semibold text-forest-950 leading-tight">
                {nombre}
              </h3>
              {rating !== undefined && (
                <span
                  className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-forest-800"
                  aria-label={`Calificación ${rating} de 5`}
                >
                  <Star
                    className="size-4 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                  {rating.toFixed(1)}
                </span>
              )}
            </div>

            {zona && (
              <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-forest-800/70">
                <MapPin className="size-3.5" aria-hidden="true" />
                {zona}
              </p>
            )}

            <p className="mt-2 text-xs text-forest-700/60 italic">
              Pasa el cursor para ver el perfil →
            </p>
          </div>
        </div>

        {/* CARA TRASERA */}
        <div className="absolute inset-0 flex flex-col overflow-hidden rounded-3xl bg-forest-950 p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-cream-50/10 pb-4">
            <div className="relative size-14 shrink-0 overflow-hidden rounded-2xl ring-2 ring-forest-600">
              <Image
                src={foto}
                alt={nombre}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-cream-50 leading-tight">
                {nombre}
              </h3>
              {zona && (
                <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-cream-200/70">
                  <MapPin className="size-3" aria-hidden="true" />
                  {zona}
                </p>
              )}
            </div>
            {rating !== undefined && (
              <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-amber-400/15 px-2.5 py-1 text-sm font-bold text-amber-300">
                <Star className="size-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                {rating.toFixed(1)}
              </span>
            )}
          </div>

          {/* Descripción */}
          <p className="mt-4 flex-1 text-sm leading-relaxed text-cream-200/80 line-clamp-4">
            {descripcion}
          </p>

          {/* Especialidades */}
          {especialidades && especialidades.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {especialidades.map((esp) => (
                <li
                  key={esp}
                  className="rounded-full bg-forest-700/60 px-2.5 py-1 text-xs font-medium text-forest-200"
                >
                  {esp}
                </li>
              ))}
            </ul>
          )}

          {/* CTA WhatsApp */}
          <a
            href={getWhatsAppUrl(
              `Hola MyPet, quiero saber más sobre ${nombre} como paseador.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe5d] active:scale-95"
            aria-label={`Contactar a ${nombre} por WhatsApp`}
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}