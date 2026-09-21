import { PawPrint } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5"
      aria-label="MyPet — inicio"
    >
      <span className="grid size-10 place-items-center rounded-2xl bg-forest-800 text-cream-50">
        <PawPrint className="size-5" aria-hidden="true" />
      </span>
      <span className="font-display text-2xl font-semibold tracking-tight text-forest-950">
        My<span className="text-forest-600">Pet</span>
      </span>
    </Link>
  );
}