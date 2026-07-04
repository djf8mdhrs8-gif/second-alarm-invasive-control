import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCallButton } from "@/components/shared/StickyCallButton";
import { FloatingScheduleCTA } from "@/components/shared/FloatingScheduleCTA";
import { ExitIntentPopup } from "@/components/shared/ExitIntentPopup";
import { AIChatPlaceholder } from "@/components/future/AIChatPlaceholder";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { localBusinessSchema } from "@/lib/schema";
import { company, siteUrl } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Iguana & Muscovy Duck Removal in Southwest Florida`,
    template: `%s | ${company.name}`,
  },
  description:
    "Southwest Florida's trusted specialists in green iguana removal and Muscovy duck removal. Serving Fort Myers, Cape Coral, Naples, Bonita Springs, Estero, and more. Call (239) 365-6753.",
  keywords: [
    "iguana removal florida",
    "iguana removal southwest florida",
    "iguana removal near me",
    "iguana removal fort myers",
    "iguana removal cape coral",
    "iguana removal naples",
    "muscovy duck removal florida",
    "muscovy duck removal southwest florida",
    "southwest florida invasive species removal",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} | Iguana & Muscovy Duck Removal in Southwest Florida`,
    description:
      "Southwest Florida's trusted specialists in green iguana removal and Muscovy duck removal for homes, HOAs, golf courses, and businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Iguana & Muscovy Duck Removal`,
    description: "Southwest Florida's trusted specialists in invasive species removal.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0A1929" },
    { media: "(prefers-color-scheme: dark)", color: "#060F19" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <SchemaMarkup schema={localBusinessSchema()} />
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-coastal-600 focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1 pb-16 sm:pb-0">
            {children}
          </main>
          <Footer />
          <StickyCallButton />
          <FloatingScheduleCTA />
          <ExitIntentPopup />
          <AIChatPlaceholder />
        </ThemeProvider>
      </body>
    </html>
  );
}
