import type { Metadata, Viewport } from "next";
import { Manrope, Work_Sans } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/components/Preloader";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://telhaverde.pt"),
  title: {
    default: "Telhados Telha Verde | Reparação e Manutenção de Telhados na Póvoa de Varzim",
    template: "%s | Telhados Telha Verde",
  },
  description:
    "Especialistas em reparação, limpeza, impermeabilização e manutenção de telhados na Póvoa de Varzim. Peça orçamento pelo WhatsApp.",
  keywords: [
    "telhados Póvoa de Varzim",
    "reparação de telhados",
    "limpeza de telhados",
    "impermeabilização",
    "substituição de telhas",
    "infiltrações telhado",
    "manutenção de coberturas",
    "telhados residenciais",
    "telhados comerciais",
    "Telha Verde",
  ],
  authors: [{ name: "Telhados Telha Verde" }],
  creator: "Telhados Telha Verde",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://telhaverde.pt",
    siteName: "Telhados Telha Verde",
    title: "Telhados Telha Verde | Reparação e Manutenção de Telhados na Póvoa de Varzim",
    description:
      "Soluções profissionais para telhados, infiltrações, impermeabilização e manutenção na Póvoa de Varzim e arredores.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Telhados Telha Verde — Póvoa de Varzim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Telhados Telha Verde — Reparação de Telhados na Póvoa de Varzim",
    description:
      "Reparação, limpeza, impermeabilização e manutenção de telhados. Orçamento rápido pelo WhatsApp.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e3a1c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className={`${manrope.variable} ${workSans.variable}`}>
      <body className="min-h-screen">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
