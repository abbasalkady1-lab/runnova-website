import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
});

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const isAr = locale === "ar";
  const canonicalPath = isAr ? "/ar" : "";
  const pageUrl = `${siteConfig.url}${canonicalPath}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t("siteTitle"),
      template: `%s | ${siteConfig.name}`,
    },
    description: t("siteDescription"),
    alternates: {
      canonical: pageUrl,
      languages: {
        en: `${siteConfig.url}`,
        ar: `${siteConfig.url}/ar`,
        "x-default": `${siteConfig.url}`,
      },
    },
    openGraph: {
      title: t("siteTitle"),
      description: t("siteDescription"),
      url: pageUrl,
      siteName: siteConfig.name,
      locale: isAr ? "ar_AR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("siteTitle"),
      description: t("siteDescription"),
      creator: "@runnovacloud",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function RootLocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const isAr = locale === "ar";
  const dir = isAr ? "rtl" : "ltr";
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "meta" });

  // Organization + WebSite JSON-LD Schema
  const rootSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: `${siteConfig.url}/icon.svg`,
        slogan: siteConfig.tagline,
        description:
          t("siteDescription"),
        email: siteConfig.email,
        telephone: siteConfig.phone,
        sameAs: [siteConfig.linkedinUrl, siteConfig.twitterUrl],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.phone,
            contactType: "customer service",
            availableLanguage: ["English", "Arabic"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    ],
  };

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${plusJakarta.variable} ${ibmPlexArabic.variable}`}
    >
      <head>
        <JsonLd data={rootSchema} />
      </head>
      <body className={`min-h-screen flex flex-col font-sans ${isAr ? "font-arabic" : ""}`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
