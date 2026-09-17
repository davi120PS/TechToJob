import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

export const metadata: Metadata = {
  title: "TechToJob | Comunidad tech, conexiones reales",
  description: "Una comunidad para aprender, conectar con talento y descubrir oportunidades en tecnología.",
  metadataBase: new URL("https://www.techtojob.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "TechToJob | Comunidad tech, conexiones reales",
    description: "Aprende, comparte y conecta con personas y oportunidades del sector tech.",
    url: "/",
    siteName: "TechToJob",
    locale: "es_ES",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "TechToJob", description: "Comunidad tech, conexiones reales." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={sora.variable}>{children}</body>
    </html>
  );
}

