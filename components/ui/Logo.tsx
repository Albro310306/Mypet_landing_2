import { PawPrint } from "lucide-react";
import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
}

export function Logo({ variant = "dark" }: LogoProps) {
  const isLight = variant === "light";
  
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5"
      aria-label="MyPet — inicio"
    >
      <span className={`grid size-10 place-items-center rounded-2xl ${isLight ? 'bg-white/20 text-white backdrop-blur-md' : 'bg-forest-800 text-cream-50'}`}>
        <PawPrint className="size-5" aria-hidden="true" />
      </span>
      <span className={`font-display text-2xl font-semibold tracking-tight ${isLight ? 'text-white' : 'text-forest-950'}`}>
        My<span className={isLight ? 'text-terracotta-400' : 'text-forest-600'}>Pet</span>
      </span>
    </Link>
  );
}