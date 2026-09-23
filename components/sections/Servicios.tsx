"use client";

import {
  MessageCircle,
  MessageSquareText,
  Sparkles,
  ListChecks,
  PawPrint,
  Dog,
  Users,
  Baby,
  Heart,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const steps = [
  {
    icon: MessageCircle,
    title: "Escríbenos",
    text: "Cuéntanos en qué zona te encuentras, cómo es tu mascota y los horarios que necesitas.",
  },
  {
    icon: MessageSquareText,
    title: "Conocemos a tu mascota",
    text: "Queremos saber su raza, edad y temperamento para asegurar que su paseo sea exactamente lo que necesita.",
  },
  {
    icon: ListChecks,
    title: "Elige tu plan",
    text: "Selecciona el plan que mejor se adapte a tu mascota. Desliza a la derecha para descubrir nuestras opciones.",
  },
  {
    icon: Sparkles,
    title: "Escoge a tu paseador ideal",
    text: "Explora los perfiles de nuestro equipo y selecciona a la persona ideal para acompañar a tu mejor amigo.",
  },
  {
    icon: PawPrint,
    title: "Tranquilidad total",
    text: "Relájate con total confianza. Tu mascota disfrutará de un paseo seguro y divertido en las mejores manos, y regresará inmensamente feliz a casa.",
  },
];

const planes = [
  {
    icon: Dog,
    title: "Individual",
    tag: "1 mascota",
    bullets: [
      "Atención 100% exclusiva",
      "Paseo adaptado a su ritmo",
      "Reporte al finalizar",
    ],
  },
  {
    icon: Users,
    title: "Grupal",
    tag: "Hasta 4",
    bullets: [
      "Socialización segura",
      "Máximo 4 mascotas",
      "Paseador experimentado",
    ],
  },
  {
    icon: Baby,
    title: "Cachorro",
    tag: "0–12 meses",
    bullets: [
      "Paseos cortos y suaves",
      "Cuidado en sus primeras etapas",
      "Paciencia y ternura garantizada",
    ],
  },
  {
    icon: Heart,
    title: "Adulto mayor",
    tag: "Cuidado especial",
    bullets: [
      "Ritmo tranquilo y pausado",
      "Atención a sus necesidades",
      "Máximo respeto por su edad",
    ],
  },
];

export function Servicios() {
  return (
    <section id="servicios" className="scroll-mt-20 overflow-hidden bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-[90rem] px-5 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

          {/* ── COLUMNA IZQUIERDA: pasos ── */}
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-terracotta-600">
                Cómo funciona
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest-950 sm:text-4xl lg:text-5xl">
                Empezar es muy fácil
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-forest-800/80">
                Todo comienza con un simple mensaje. Sin formularios ni apps que instalar.
              </p>
            </Reveal>

            <div className="mt-12">
              <ol className="relative flex flex-col gap-0">
                {steps.map((step, index) => (
                  <Reveal key={step.title} delay={index * 0.1}>
                    <li className="group flex gap-6">
                      {/* Icon column */}
                      <div className="flex flex-col items-center">
                        <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl bg-forest-700 text-cream-50 shadow-lg transition duration-300 group-hover:bg-forest-600">
                          <step.icon className="size-6" aria-hidden="true" />
                        </div>
                        {index < steps.length - 1 && (
                          <div className="mt-0 h-full min-h-[2rem] w-px bg-forest-200" />
                        )}
                      </div>
                      {/* Text */}
                      <div className="pb-8">
                        <span className="font-display text-xs font-bold uppercase tracking-widest text-forest-400">
                          Paso {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="mt-1 font-display text-lg font-semibold text-forest-950">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-forest-800/70">
                          {step.text}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>

          {/* ── COLUMNA DERECHA: acordeón de planes ── */}
          <Reveal delay={0.2} className="flex flex-col lg:border-l lg:border-forest-200 lg:pl-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-terracotta-600">
                Nuestros planes
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest-950 sm:text-4xl">
                Un plan para cada mascota
              </h2>
              <p className="mt-4 max-w-sm leading-relaxed text-forest-800/80">
                Evaluamos la edad, raza y nivel de energía para recomendarte la rutina ideal.
              </p>
            </div>

            {/* ── Acordeón vertical ── */}
            <div className="mt-10 flex flex-col h-[34rem] gap-2 rounded-xl">
              {planes.map((plan) => (
                <div
                  key={plan.title}
                  className="accordion-panel flex w-full cursor-pointer flex-col justify-center overflow-hidden rounded-xl border border-forest-200 bg-white shadow-sm dark:bg-forest-50"
                >
                  {/* Label normal (estado colapsado) */}
                  <div className="panel-collapsed flex h-full w-full items-center gap-4 px-6">
                    <div className="flex size-10 items-center justify-center rounded-full bg-forest-50">
                      <plan.icon className="size-5 text-terracotta-500" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wider text-forest-800">
                      {plan.title}
                    </span>
                  </div>

                  {/* Contenido expandido */}
                  <div className="panel-expanded flex h-full w-full flex-col justify-center p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-forest-50">
                          <plan.icon className="size-5 text-forest-600" aria-hidden="true" />
                        </div>
                        <span className="rounded-full border border-terracotta-200 bg-terracotta-50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-terracotta-700">
                          {plan.tag}
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-2xl font-semibold text-forest-950">
                        {plan.title}
                      </h3>
                      <ul className="mt-3 flex flex-col gap-2">
                        {plan.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-[14px] leading-relaxed text-forest-800/80">
                            <span className="size-1.5 shrink-0 rounded-full bg-terracotta-400" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6 sm:mt-0 sm:shrink-0">
                      <a
                        href={getWhatsAppUrl(`Hola, me interesa el plan ${plan.title} para mi mascota.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-terracotta-500 px-6 py-3 text-sm font-bold text-white shadow-md shadow-terracotta-900/10 transition-all hover:-translate-y-0.5 hover:bg-terracotta-600 hover:shadow-lg sm:w-auto dark:bg-terracotta-600 dark:text-cream-50 dark:hover:bg-terracotta-700"
                      >
                        <MessageCircle className="size-5" aria-hidden="true" />
                        Elegir este plan
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Hint */}
            <p className="mt-3 text-center text-xs text-forest-800/40">
              <span className="hidden sm:inline">Pasa el cursor sobre cada plan para ver los detalles</span>
              <span className="inline sm:hidden">Toca un plan para ver los detalles</span>
            </p>
          </Reveal>

        </div>
      </div>
    </section>
  );
}


