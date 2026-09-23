"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const links = [
  { href: "#", label: "Inicio" },
  { href: "#quienes-somos", label: "Quiénes Somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#paseadores", label: "El Equipo" },
  { href: "#mascotas", label: "Mascotas" },
  { href: "#resenas", label: "Reseñas" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const detectSection = () => {
      const NAVBAR_HEIGHT = 80; // px que ocupa el navbar fijo
      const scrollY = window.scrollY;

      // Si estamos al tope, Inicio está activo
      if (scrollY < NAVBAR_HEIGHT) {
        setActiveSection("#");
        return;
      }

      // Recorremos los links con sección y buscamos cuál es la última
      // cuyo `top` ya cruzó el tope del viewport (descontando el navbar)
      let found = "";
      for (const link of links) {
        if (link.href === "#") continue;
        const el = document.getElementById(link.href.substring(1));
        if (!el) continue;
        // top relativo al viewport
        const top = el.getBoundingClientRect().top;
        // Si el borde superior de la sección ya subió por encima
        // del punto de referencia (navbar + 20px de margen), la contamos
        if (top - NAVBAR_HEIGHT - 20 <= 0) {
          found = link.href;
        }
      }

      setActiveSection(found || "#");
    };

    window.addEventListener("scroll", detectSection, { passive: true });
    detectSection(); // check inicial

    return () => window.removeEventListener("scroll", detectSection);
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
            {links.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-[11px] font-bold uppercase tracking-[0.15em] transition-colors group ${
                    isScrolled || open
                      ? isActive
                        ? "text-forest-600"
                        : "text-forest-900 hover:text-forest-600"
                      : isActive
                        ? "text-forest-950"
                        : "text-forest-800 hover:text-forest-950"
                  }`}
                >
                  {link.label}
                  {/* Animación del underline activa siempre si es la sección actual, o al hacer hover */}
                  <span className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300 bg-forest-600 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </a>
              );
            })}
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