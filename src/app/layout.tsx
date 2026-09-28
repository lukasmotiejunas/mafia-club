import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, organizationSchema } from "@/components/shared/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mafia-klubas.lt"),
  title: {
    default: "Mafia Klubas — Aistros, strategijos ir bendruomenės žaidimas",
    template: "%s | Mafia Klubas",
  },
  description:
    "Mafia Klubas — didžiausia mafijos žaidimo bendruomenė Lietuvoje. Renginiai, komandos, abonementai ir mokomoji medžiaga.",
  keywords: [
    "mafia",
    "mafijos žaidimas",
    "mafia klubas",
    "Lietuva",
    "renginiai",
    "komandiniai žaidimai",
    "strategija",
  ],
  authors: [{ name: "Mafia Klubas" }],
  openGraph: {
    type: "website",
    locale: "lt_LT",
    url: "https://mafia-klubas.lt",
    siteName: "Mafia Klubas",
    title: "Mafia Klubas — Aistros, strategijos ir bendruomenės žaidimas",
    description:
      "Prisijunk prie didžiausios mafijos žaidimo bendruomenės Lietuvoje. Renginiai, komandos, abonementai.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mafia Klubas",
    description: "Didžiausia mafijos žaidimo bendruomenė Lietuvoje.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="lt"
      className={`${inter.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <JsonLd data={organizationSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
