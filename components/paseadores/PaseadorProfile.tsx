import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BadgeCheck, Clock, MapPin, MessageCircle, Star } from "lucide-react";
import { buttonOutline, buttonPrimary } from "@/lib/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import type { Paseador } from "@/types/paseador";

interface PaseadorProfileProps {
  paseador: Paseador;
}

export function PaseadorProfile({ paseador }: PaseadorProfileProps) {
  const { nombre, foto, zona, descripcion, verificado, experiencia, rating, especialidades } =
    paseador;

  return (
    <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <Link
        href="/#paseadores"
        className="inline-flex items-center gap-2 text-sm font-medium text-forest-800 transition-colors hover:text-forest-600"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Volver a los paseadores
      </Link>

      <div className="mt-8 grid gap-8 md:grid-cols-[280px_1fr] md:gap-12">
        <div>
          <Image
            src={foto}
            alt={`Foto de ${nombre}`}
            width={560}
            height={560}
            className="h-auto w-full rounded-3xl object-cover"
          />
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-display text-3xl font-semibold tracking-tight text-forest-950 sm:text-4xl">
              {nombre}
            </h1>
            {verificado && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-100 px-3 py-1 text-xs font-semibold text-forest-700">
                <BadgeCheck className="size-3.5" aria-hidden="true" />
                Verificado
              </span>
            )}
          </div>

          {zona && (
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-forest-800/70">
              <MapPin className="size-4" aria-hidden="true" />
              {zona}
            </p>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {rating !== undefined && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-4 py-1.5 text-sm font-semibold text-forest-800">
                <Star className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                {rating.toFixed(1)} de 5
              </span>
            )}
            {experiencia !== undefined && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-50 px-4 py-1.5 text-sm font-medium text-forest-700">
                <Clock className="size-4" aria-hidden="true" />
                {experiencia} {experiencia === 1 ? "año" : "años"} paseando mascotas
              </span>
            )}
          </div>

          <p className="mt-6 text-base leading-relaxed text-forest-800/80">
            {descripcion}
          </p>

          {especialidades && especialidades.length > 0 && (
            <div className="mt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-forest-800">
                Especialidades
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {especialidades.map((esp) => (
                  <li
                    key={esp}
                    className="rounded-full border border-forest-200 bg-white px-3 py-1 text-sm font-medium text-forest-800"
                  >
                    {esp}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <a
            href={getWhatsAppUrl(
              `Hola MyPet, quiero coordinar un paseo con ${nombre}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonPrimary} mt-8 px-7 py-3.5`}
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Coordinar paseo por WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-12 flex flex-col justify-between gap-4 rounded-3xl bg-forest-50 p-6 sm:flex-row sm:items-center">
        <p className="text-sm leading-relaxed text-forest-800">
          ¿Tienes dudas sobre este paseador o quieres más información?
        </p>
        <a
          href={getWhatsAppUrl(
            `Hola MyPet, me interesa el perfil de ${nombre}.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonOutline} shrink-0 px-6 py-3`}
        >
          Preguntar por {nombre}
        </a>
      </div>
    </div>
  );
}