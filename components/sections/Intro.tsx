import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import Image from "next/image";

const checkpoints = [
  "Paseadores verificados, entrenados y amantes de los animales.",
  "Seguimiento en tiempo real durante cada paseo.",
  "Atención personalizada según la raza y edad de tu mascota.",
];

const features = [
  {
    icon: ShieldCheck,
    title: "Confianza total",
    desc: "Todos nuestros paseadores pasan por un proceso de selección riguroso antes de unirse al equipo.",
  },
  {
    icon: Clock,
    title: "Puntualidad garantizada",
    desc: "Respetamos los horarios de tu mascota para mantener su rutina sin interrupciones.",
  },
];

export function Intro() {
  return (
    <section id="quienes-somos" className="scroll-mt-20 relative overflow-hidden bg-cream-50 py-20 sm:py-28">
      {/* Decorative wave */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1 left-0 right-0 h-12 overflow-hidden text-cream-100"
      >
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="h-full w-full">
          <path d="M0 48 C360 0 1080 0 1440 48 L1440 0 L0 0 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[90rem] px-5 lg:px-8 xl:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_20rem_20rem] xl:grid-cols-[1fr_22rem_26rem] xl:gap-16">

          {/* ── Columna 1: Texto ── */}
          <div className="lg:pr-4">
            <Reveal>
              {/* Eyebrow */}
              <p className="text-sm font-semibold uppercase tracking-widest text-terracotta-600">
                Quiénes somos
              </p>
              <h2 className="mt-3 font-display text-4xl font-medium leading-[1.15] tracking-tight text-forest-950 sm:text-5xl">
                ¡Hola! Somos{" "}
                <span className="text-forest-600">MyPet</span>
              </h2>

              {/* Decorative underline */}
              <svg
                className="mt-3 w-28 text-terracotta-500"
                viewBox="0 0 112 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 6C20 2 40 2 60 6C80 10 100 2 110 4"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-lg font-light leading-relaxed text-forest-800/80">
                Somos un equipo de personas apasionadas por los animales que nació
                con un objetivo claro: que tú puedas trabajar tranquilo mientras
                tu mascota disfruta de lo mejor. Sin estrés, sin improvisación,
                sin compromisos.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-terracotta-600">
                Contamos con:
              </p>
            </Reveal>

            <ul className="mt-4 flex flex-col gap-4">
              {checkpoints.map((text, i) => (
                <Reveal key={i} delay={0.24 + i * 0.08}>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 size-5 shrink-0 text-terracotta-500"
                      aria-hidden="true"
                    />
                    <span className="text-[15px] leading-relaxed text-forest-800/80">
                      {text}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* ── Columna 2: Feature cards & Quote ── */}
          <div className="flex w-full flex-col gap-5">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={0.15 + i * 0.12}>
                <div className="group rounded-2xl border border-forest-100 bg-white p-7 shadow-sm shadow-forest-900/4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-forest-900/8 dark:bg-forest-50 dark:shadow-none">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-forest-50 text-forest-700 transition-colors duration-300 group-hover:bg-forest-100">
                    <f.icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-forest-950">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-800/70">
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            ))}

            {/* Firma / quote card */}
            <Reveal delay={0.4}>
              <div className="rounded-2xl border border-terracotta-500/25 bg-terracotta-500/10 px-7 py-6 shadow-sm">
                <p className="font-display text-base italic leading-snug text-terracotta-500">
                  &ldquo;Su bienestar es nuestra única prioridad.&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-px w-8 bg-terracotta-500/50" />
                  <p className="text-sm font-semibold text-terracotta-600">
                    El Equipo de MyPet
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Columna 3: Image ── */}
          <Reveal delay={0.3} className="h-full">
            <div className="relative h-72 w-full overflow-hidden rounded-2xl lg:h-full lg:min-h-[36rem]">
              <Image
                src="/dog-walking-intro.jpg"
                alt="Happy dog walking in a park"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

