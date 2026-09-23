import { MessageCircle, PawPrint, MapPin, Heart } from "lucide-react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const navLinks = [
  { href: "#paseadores", label: "Paseadores destacados" },
  { href: "#servicios", label: "Nuestros planes" },
  { href: "#mascotas", label: "Mascotas" },
  { href: "#resenas", label: "Reseñas" },
];

const trustItems = [
  { icon: Heart, text: "Paseadores verificados" },
  { icon: MapPin, text: "Cobertura en tu zona" },
  { icon: PawPrint, text: "Reporte tras cada paseo" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-cream-100 dark:bg-[#0d1711] dark:text-forest-400">


      {/* ── Cuerpo del footer ── */}
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">

          {/* Columna 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
              aria-label="MyPet — inicio"
            >
              <span className="grid size-10 place-items-center rounded-2xl bg-forest-800 text-cream-50 dark:bg-forest-950/10 dark:text-forest-300">
                <PawPrint className="size-5" aria-hidden="true" />
              </span>
              <span className="font-display text-2xl font-semibold tracking-tight text-cream-50 dark:text-forest-950">
                My<span className="text-forest-400">Pet</span>
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-200/60 dark:text-forest-500">
              Paseos para mascotas con confianza, transparencia y amor. Tu mejor amigo en las mejores manos.
            </p>

            {/* Trust pills */}
            <ul className="mt-6 flex flex-col gap-2.5">
              {trustItems.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5 text-xs text-cream-200/50 dark:text-forest-500">
                  <Icon className="size-3.5 text-forest-400 shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-forest-400">
              Explorar
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-cream-200/60 transition-colors hover:text-cream-50 dark:text-forest-500 dark:hover:text-forest-200"
                  >
                    <span className="h-px w-4 bg-forest-700 transition-all duration-300 group-hover:w-6 group-hover:bg-terracotta-500" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-forest-400">
              Contacto
            </p>
            <div className="mt-5 space-y-4">
              <a
                href={getWhatsAppUrl("Hola MyPet, tengo una consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-forest-800 text-forest-300 transition-colors group-hover:bg-terracotta-500 group-hover:text-white dark:bg-forest-950/10 dark:group-hover:text-cream-50">
                  <MessageCircle className="size-4" />
                </span>
                <span className="text-cream-200/60 transition-colors group-hover:text-cream-50 dark:text-forest-500 dark:group-hover:text-forest-200">
                  WhatsApp
                </span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-forest-800 text-forest-300 transition-colors group-hover:bg-terracotta-500 group-hover:text-white dark:bg-forest-950/10 dark:group-hover:text-cream-50">
                  {/* Instagram SVG (no disponible en lucide-react v1.47) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </span>
                <span className="text-cream-200/60 transition-colors group-hover:text-cream-50 dark:text-forest-500 dark:group-hover:text-forest-200">
                  Instagram
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Barra inferior ── */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-cream-50/10 pt-6 sm:flex-row dark:border-forest-950/10">
          <p className="text-xs text-cream-200/30 dark:text-forest-500/60">
            © {year} MyPet. Todos los derechos reservados.
          </p>
          <p className="text-xs text-cream-200/30 dark:text-forest-500/60">
            Hecho con <Heart className="inline size-3 text-terracotta-500 fill-terracotta-500 mx-0.5" /> para los amantes de las mascotas
          </p>
        </div>
      </div>
    </footer>
  );
}