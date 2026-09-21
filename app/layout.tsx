import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MyPet — Paseos para mascotas con confianza y bienestar",
  description:
    "MyPet conecta a tu mascota con paseadores de confianza. Paseos seguros, transparentes y con bienestar animal. Escríbenos por WhatsApp.",
  metadataBase: new URL("https://mypet.example.com"),
  openGraph: {
    title: "MyPet — Paseos para mascotas con confianza y bienestar",
    description:
      "Conectamos a tu mascota con paseadores de confianza. Seguridad, transparencia y bienestar animal.",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}