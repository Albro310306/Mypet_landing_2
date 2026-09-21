import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PaseadorProfile } from "@/components/paseadores/PaseadorProfile";
import { paseadores } from "@/data/paseadores";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return paseadores.map((paseador) => ({ slug: paseador.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const paseador = paseadores.find((paseador) => paseador.slug === slug);

  if (!paseador) {
    return { title: "Paseador no encontrado | MyPet" };
  }

  return {
    title: `${paseador.nombre} — Paseador en ${paseador.zona} | MyPet`,
    description: paseador.descripcion,
  };
}

export default async function PaseadorPage({ params }: Props) {
  const { slug } = await params;
  const paseador = paseadores.find((paseador) => paseador.slug === slug);

  if (!paseador) {
    notFound();
  }

  return <PaseadorProfile paseador={paseador} />;
}