import Image from "next/image";
import { BadgeCheck, MapPin, MessageCircle, Star } from "lucide-react";
import Link from "next/link";
import { buttonOutline } from "@/lib/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import type { Paseador } from "@/types/paseador";

interface PaseadorCardProps {
  paseador: Paseador;
}

export function PaseadorCard({ paseador }: PaseadorCardProps) {
  const { nombre, foto, zona, descripcion, verificado, rating, especialidades } =
    paseador;

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-forest-950/5 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-950/5">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={foto}
          alt={`Foto de ${nombre}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {verificado && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-forest-800/90 px-3 py-1 text-xs font-semibold text-cream-50">
            <BadgeCheck className="size-3.5" aria-hidden="true" />
            Verificado
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-forest-950">
            {nombre}
          </h3>
          {rating !== undefined && (
            <span
              className="inline-flex items-center gap-1 text-sm font-semibold text-forest-800"
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
          <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-forest-800/70">
            <MapPin className="size-3.5" aria-hidden="true" />
            {zona}
          </p>
        )}

        <p className="mt-3 flex-1 text-sm leading-relaxed text-forest-800/75">
          {descripcion}
        </p>

        {especialidades && especialidades.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {especialidades.map((esp) => (
              <li
                key={esp}
                className="rounded-full bg-forest-50 px-3 py-1 text-xs font-medium text-forest-700"
              >
                {esp}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex flex-col gap-2.5">
          <Link
            href={`/paseadores/${paseador.slug}`}
            className={`${buttonOutline} w-full py-2.5 text-sm`}
          >
            Ver perfil
          </Link>
          <a
            href={getWhatsAppUrl(
              `Hola MyPet, quiero saber más sobre ${nombre} como paseador.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonOutline}
            aria-label={`Contactar por WhatsApp sobre ${nombre}`}
          >
            <MessageCircle className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}