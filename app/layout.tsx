import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Providers from "../components/Providers";
import CookieBanner from "../components/CookieBanner";
import AssistantWidget from "../components/AssistantWidget";

const baseUrl = "https://fauvel-avocat.fr";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"]
  },
  title: {
    default: "Fauvel Avocat | Avocat fiscaliste à Paris",
    template: "%s | Fauvel Avocat"
  },
  description: "Fauvel Avocat, cabinet d’avocat fiscaliste à Paris, accompagne particuliers, dirigeants et entreprises en fiscalité française et internationale, contrôle et contentieux fiscal et droit des sociétés.",
  openGraph: {
    title: "Fauvel Avocat",
    description: "Cabinet d’avocat fiscaliste à Paris : fiscalité française et internationale, contrôle et contentieux fiscal, droit des sociétés.",
    url: baseUrl,
    siteName: "Fauvel Avocat",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Fauvel Avocat" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fauvel Avocat",
    description: "Cabinet d’avocat fiscaliste à Paris : fiscalité française et internationale, contrôle et contentieux fiscal, droit des sociétés.",
    images: ["/images/og-image.png"]
  },
  keywords: [
    "avocat fiscaliste",
    "avocat fiscaliste Paris",
    "contrôle fiscal",
    "contentieux fiscal",
    "fiscalité patrimoniale",
    "fiscalité internationale",
    "holding patrimoniale",
    "Fauvel Avocat",
    "Tom Fauvel"
  ],
  alternates: {
    canonical: baseUrl
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const legalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${baseUrl}/#cabinet`,
    name: "Fauvel Avocat",
    legalName: "Fauvel Avocat",
    url: baseUrl,
    telephone: "+33624067681",
    email: "tom.fauvel@fauvel-avocat.fr",
    areaServed: { "@type": "Country", name: "France" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "222 boulevard Saint-Germain",
      postalCode: "75007",
      addressLocality: "Paris",
      addressCountry: "FR",
      addressRegion: "Île-de-France"
    },
    founder: { "@id": `${baseUrl}/#tom-fauvel` },
    slogan: "Fiscalité, droit des sociétés et contentieux fiscal",
    knowsAbout: ["Contrôle fiscal", "Contentieux fiscal", "Fiscalité patrimoniale", "Fiscalité internationale", "Fiscalité franco-américaine", "IFI", "Crypto-actifs", "Droit des sociétés", "Structuration de holdings"]
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#tom-fauvel`,
    name: "Tom Fauvel",
    jobTitle: "Avocat au Barreau de Paris",
    url: `${baseUrl}/cabinet`,
    worksFor: { "@id": `${baseUrl}/#cabinet` },
    knowsAbout: ["Droit fiscal", "Contrôle fiscal", "Contentieux fiscal", "Fiscalité internationale", "Droit des sociétés"]
  };

  return (
    <html lang="fr">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>

        {/* Google Ads (AW-18445047687) en mode consentement : aucun cookie tant que le visiteur n'a pas accepté */}
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
            gtag('js', new Date());
            gtag('config', 'AW-18445047687');
          `}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18445047687" strategy="afterInteractive" />
        <CookieBanner />
        <AssistantWidget />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </body>
    </html>
  );
}
