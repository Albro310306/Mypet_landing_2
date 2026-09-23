"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Star, ShieldCheck, Heart, Award } from "lucide-react";
import type { Paseador } from "@/types/paseador";

interface PaseadorCardProps {
  paseador: Paseador;
}

export function PaseadorCard({ paseador }: PaseadorCardProps) {
  const { nombre, foto, zona, descripcion, rating, especialidades } = paseador;
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <article
      className="h-[420px] [perspective:1000px] cursor-pointer"
      aria-label={`Paseador ${nombre}`}
      /* Desktop: hover revela; Mobile: tap alterna */
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      {/* Contenedor del flip */}
      <div
        className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]"
        style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >

        {/* CARA FRONTAL */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl border border-forest-950/5 bg-white [backface-visibility:hidden]">
          <div className="relative h-[68%] w-full overflow-hidden">
            <Image
              src={foto}
              alt={`Foto de ${nombre}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className={`object-cover transition duration-500 ${isFlipped ? "scale-105" : ""}`}
            />
            {/* Gradiente inferior */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
          </div>

          <div className="px-5 pt-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="flex items-center gap-1.5 font-display text-xl font-semibold text-forest-950 leading-tight">
                {nombre}
                {paseador.verificado && (
                  <ShieldCheck
                    className="size-5 text-[#25D366]"
                    aria-label="Perfil verificado"
                  />
                )}
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

            {/* Hint adaptado a escritorio y móvil */}
            <p className="mt-2 text-xs text-forest-700/60 italic">
              <span className="hidden sm:inline">Pasa el cursor para ver más →</span>
              <span className="inline sm:hidden">Toca para ver más →</span>
            </p>
          </div>
        </div>

        {/* CARA TRASERA */}
        <div className="absolute inset-0 flex flex-col overflow-hidden rounded-3xl bg-forest-50 border border-forest-200 p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-forest-950/10 pb-4">
            <div className="relative size-14 shrink-0 overflow-hidden rounded-2xl ring-2 ring-forest-300">
              <Image
                src={foto}
                alt={nombre}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-forest-950 leading-tight">
                {nombre}
              </h3>
              {zona && (
                <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-forest-800/70">
                  <MapPin className="size-3" aria-hidden="true" />
                  {zona}
                </p>
              )}
            </div>
            {rating !== undefined && (
              <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-amber-400/15 px-2.5 py-1 text-sm font-bold text-amber-500">
                <Star className="size-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                {rating.toFixed(1)}
              </span>
            )}
          </div>

          {/* Descripción */}
          <p className="mt-4 flex-1 text-sm leading-relaxed text-forest-700/80 line-clamp-4">
            {descripcion}
          </p>

          {/* Especialidades */}
          {especialidades && especialidades.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {especialidades.map((esp) => (
                <li
                  key={esp}
                  className="rounded-full bg-forest-200/60 px-2.5 py-1 text-xs font-medium text-forest-800"
                >
                  {esp}
                </li>
              ))}
            </ul>
          )}

          {/* Estadísticas de Confianza */}
          <div className="mt-4 flex gap-4 border-t border-forest-950/10 pt-4">
            {paseador.paseosCompletados !== undefined && (
              <div className="flex flex-col">
                <span className="flex items-center gap-1 text-sm font-bold text-forest-950">
                  <Heart className="size-4 text-rose-400" />
                  {paseador.paseosCompletados}+
                </span>
                <span className="text-[10px] uppercase tracking-wider text-forest-700/60">
                  Paseos
                </span>
              </div>
            )}
            {paseador.resenas !== undefined && (
              <div className="flex flex-col">
                <span className="flex items-center gap-1 text-sm font-bold text-forest-950">
                  <Award className="size-4 text-amber-500" />
                  {paseador.resenas}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-forest-700/60">
                  Reseñas Excelentes
                </span>
              </div>
            )}
          </div>

          {/* Hint para volver (solo mobile) */}
          <p className="mt-3 text-center text-xs text-forest-700/40 italic sm:hidden">
            Toca de nuevo para volver
          </p>
        </div>
      </div>
    </article>
  );
}