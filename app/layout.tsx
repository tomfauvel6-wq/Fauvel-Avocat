import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Providers from "../components/Providers";

const baseUrl = "https://fauvel-avocat.fr";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Fauvel Avocat | Fiscalité, sociétés et droit commercial à Paris",
    template: "%s | Fauvel Avocat"
  },
  description: "Fauvel Avocat accompagne dirigeants, entrepreneurs, sociétés et particuliers en fiscalité, droit des sociétés, droit commercial et contentieux à Paris.",
  openGraph: {
    title: "Fauvel Avocat",
    description: "Fiscalité, droit des sociétés, droit commercial et contentieux.",
    url: baseUrl,
    siteName: "Fauvel Avocat",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Fauvel Avocat" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fauvel Avocat",
    description: "Fiscalité, droit des sociétés, droit commercial et contentieux.",
    images: ["/images/og-image.png"]
  },
  keywords: [
    "avocat fiscaliste",
    "avocat fiscaliste Paris",
    "contrôle fiscal",
    "contentieux fiscal",
    "fiscalité patrimoniale",
    "fiscalité internationale",
    "holding patrimoniale"
  ],
  alternates: {
    canonical: baseUrl
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const legalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Fauvel Avocat",
    url: baseUrl,
    areaServed: "France",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
      addressRegion: "Île-de-France"
    },
    legalName: "Fauvel Avocat",
    slogan: "Fiscalité, droit des sociétés, droit commercial et contentieux",
    knowsAbout: ["Contrôle fiscal", "Contentieux fiscal", "Fiscalité patrimoniale", "Fiscalité internationale", "IFI", "Crypto-actifs", "Droit des sociétés", "Droit commercial"]
  };

  return (
    <html lang="fr">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }} />
      </body>
    </html>
  );
}
