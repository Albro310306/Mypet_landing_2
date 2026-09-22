"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";
import { buttonPrimary } from "@/lib/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const links = [
  { href: "#", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#paseadores", label: "El Equipo" },
  { href: "#mascotas", label: "Mascotas" },
  { href: "#resenas", label: "Reseñas" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed inset-x-0 z-50 flex justify-center transition-all duration-500 ${isScrolled ? "top-4 px-4" : "top-0 px-0"}`}>
      <header 
        className={`w-full transition-all duration-500 ${
          isScrolled || open 
            ? "max-w-5xl rounded-full bg-cream-50/95 backdrop-blur-md border border-forest-950/10 shadow-xl shadow-forest-900/5" 
            : "max-w-[90rem] bg-transparent border-transparent"
        }`}
      >
        <div className={`mx-auto flex items-center justify-between transition-all duration-500 ${isScrolled ? "h-14 px-6" : "h-20 px-5 lg:px-12"}`}>
          <Logo variant="dark" />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-[11px] font-bold uppercase tracking-[0.15em] transition-colors group ${
                  isScrolled || open
                    ? "text-forest-900 hover:text-forest-600"
                    : "text-forest-800 hover:text-forest-950"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full bg-forest-600`} />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={getWhatsAppUrl("Hola MyPet, quiero conocer los paseadores disponibles.")}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden items-center justify-center rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all sm:inline-flex ${
                isScrolled || open
                  ? "bg-forest-900 text-white hover:bg-forest-800 hover:shadow-lg"
                  : "bg-forest-600 text-white hover:bg-forest-700 hover:shadow-md shadow-forest-900/10"
              }`}
            >
              Contáctanos
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={`inline-flex size-10 items-center justify-center rounded-full transition-colors lg:hidden ${
                isScrolled || open
                  ? "bg-forest-100 text-forest-900"
                  : "bg-forest-950/5 text-forest-900 hover:bg-forest-950/10"
              }`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-menu"
            className="absolute left-0 right-0 top-[calc(100%+0.5rem)] rounded-[2rem] border border-forest-950/10 bg-cream-50/95 p-5 backdrop-blur-md shadow-2xl lg:hidden"
            aria-label="Menú móvil"
          >
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-wider text-forest-900 transition-colors hover:bg-forest-100"
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
              className="mt-4 flex w-full items-center justify-center rounded-2xl bg-forest-900 px-5 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-forest-800"
            >
              Contáctanos
            </a>
          </nav>
        )}
      </header>
    </div>
  );
}