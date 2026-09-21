import { MessageCircle, PawPrint } from "lucide-react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const links = [
  { href: "#paseadores", label: "Paseadores" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#seguridad", label: "Seguridad" },
  { href: "#mascotas", label: "Mascotas" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="border-t border-forest-950/5 bg-forest-950 text-cream-100">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="MyPet — inicio">
              <span className="grid size-10 place-items-center rounded-2xl bg-cream-50 text-forest-900">
                <PawPrint className="size-5" aria-hidden="true" />
              </span>
              <span className="font-display text-2xl font-semibold tracking-tight text-cream-50">
                My<span className="text-forest-300">Pet</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream-200/80">
              Paseos para mascotas con confianza, transparencia y bienestar
              animal. Personas y mascotas, en las mejores manos.
            </p>
          </div>

          <nav aria-label="Pie de página">
            <p className="text-sm font-semibold uppercase tracking-wider text-forest-300">
              Secciones
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream-200/80 transition-colors hover:text-cream-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-forest-300">
              Contacto
            </p>
            <a
              href={getWhatsAppUrl("Hola MyPet, tengo una consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cream-50 transition-colors hover:text-forest-200"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Escríbenos por WhatsApp
            </a>
            <p className="mt-2 text-sm text-cream-200/60">
              Respondemos con gusto tus preguntas.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-cream-50/10 pt-6 text-xs text-cream-200/60">
          © {new Date().getFullYear()} MyPet. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}