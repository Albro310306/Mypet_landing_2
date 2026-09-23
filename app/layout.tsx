import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
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
      className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Tema: aplica la clase `dark` antes del primer paint para evitar flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}