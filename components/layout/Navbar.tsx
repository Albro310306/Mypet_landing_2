"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { buttonPrimary } from "@/lib/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const links = [
  { href: "#paseadores", label: "Paseadores" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#seguridad", label: "Seguridad" },
  { href: "#mascotas", label: "Mascotas" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest-950/5 bg-cream-50/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-forest-800 transition-colors hover:text-forest-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppUrl("Hola MyPet, quiero conocer los paseadores disponibles.")}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonPrimary} hidden px-5 py-2.5 text-sm sm:inline-flex`}
          >
            Contáctanos
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-xl text-forest-900 transition-colors hover:bg-forest-100 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-forest-950/5 bg-cream-50 px-5 pb-6 pt-3 lg:hidden"
          aria-label="Menú móvil"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-forest-900 transition-colors hover:bg-forest-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={getWhatsAppUrl("Hola MyPet, quiero conocer los paseadores disponibles.")}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonPrimary} mt-4 w-full px-5 py-3`}
          >
            Contáctanos por WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}