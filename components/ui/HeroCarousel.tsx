"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop",
    alt: "Mujer corriendo con su perro feliz",
  },
  {
    src: "/hero-dog-park.jpg",
    alt: "Perro feliz corriendo por un parque al atardecer",
  },
  {
    src: "/hero-dog-walking.jpg",
    alt: "Persona paseando a su perro por un vecindario hermoso",
  },
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (next: number) => {
    const normalized = ((next % images.length) + images.length) % images.length;
    if (normalized === activeIndex) return;
    setPrevIndex(activeIndex);
    setTimeout(() => {
      setActiveIndex(normalized);
      setPrevIndex(null);
    }, 700);
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % images.length;
        setPrevIndex(prev);
        setTimeout(() => {
          setPrevIndex(null);
        }, 700);
        return next;
      });
    }, 4000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handlePrev = () => {
    startTimer();
    goTo(activeIndex - 1);
  };

  const handleNext = () => {
    startTimer();
    goTo(activeIndex + 1);
  };

  const handleDot = (idx: number) => {
    startTimer();
    goTo(idx);
  };

  return (
    <div className="group relative h-full w-full overflow-hidden bg-forest-900">
      {/* Render all images, only active is visible */}
      {images.map((img, idx) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: idx === activeIndex ? 1 : 0,
            zIndex: idx === activeIndex ? 2 : idx === prevIndex ? 1 : 0,
          }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={idx === 0}
            sizes="100vw"
            className="object-cover"
            unoptimized
          />
        </div>
      ))}

      {/* Gradient on hover for button visibility */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Arrow controls */}
      <div className="absolute inset-x-0 bottom-6 z-20 flex items-center justify-between px-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <button
          onClick={handlePrev}
          aria-label="Imagen anterior"
          className="flex size-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all hover:bg-white/40 active:scale-95"
        >
          <ChevronLeft className="size-6" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Siguiente imagen"
          className="flex size-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all hover:bg-white/40 active:scale-95"
        >
          <ChevronRight className="size-6" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDot(idx)}
            aria-label={`Ir a imagen ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === idx ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
