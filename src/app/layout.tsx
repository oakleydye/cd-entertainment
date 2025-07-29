import type { Metadata, Viewport } from "next";
import { Bungee, Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { generateSEOMetadata } from "@/lib/seo";
import { Analytics } from "@/components/analytics/analytics";
import ConditionalLayout from "@/components/layout/conditional-layout";
import { Auth0Provider } from "@/components/auth/auth0-provider";

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bungee",
  display: 'swap',
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: 'swap',
});

export const metadata: Metadata = generateSEOMetadata({
  title: "CD Entertainment - Professional DJ Services | Weddings, Parties & Corporate Events",
  description: "Professional DJ services for weddings, parties, corporate events, and more. Quality entertainment with state-of-the-art equipment and experienced DJs serving the greater metro area.",
  keywords: [
    "DJ services",
    "wedding DJ",
    "party DJ", 
    "corporate events",
    "live sound",
    "equipment rental",
    "professional entertainment",
    "music services",
    "event planning",
    "sound system rental",
    "metro area DJ",
    "experienced DJ",
    "state-of-the-art equipment"
  ],
  canonicalUrl: "/",
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Security headers */}
        <meta name="referrer" content="origin-when-cross-origin" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#1e293b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      </head>
            <body
        className={`${roboto.variable} ${bungee.variable} antialiased overflow-x-hidden`}
      >
        <Analytics />
        <Auth0Provider>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </Auth0Provider>
        <Toaster />
      </body>
    </html>
  );
}
