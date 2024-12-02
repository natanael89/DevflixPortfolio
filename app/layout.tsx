import "./Styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import Header from "@/src/components/Header";
import { PortfolioProvider } from "@/src/context/PortfolioContext";
import Footer from "@/src/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'DevFlix Portfolio',
    template: '%s | DevFlix Portfolio'
  },
  description: 'Portfolio pessoal desenvolvido com Next.js, React, TypeScript e TailwindCSS. Desenvolvedor Full Stack com foco em criar soluções web modernas e responsivas.',
  keywords: ['portfolio', 'desenvolvedor', 'full stack', 'react', 'next.js', 'typescript', 'tailwindcss'],
  authors: [{ name: 'Seu Nome' }],
  creator: 'Seu Nome',
  publisher: 'Seu Nome',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seu-portfolio.vercel.app',
    siteName: 'DevFlix Portfolio',
    title: 'DevFlix Portfolio',
    description: 'Portfolio pessoal desenvolvido com Next.js, React, TypeScript e TailwindCSS.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DevFlix Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevFlix Portfolio',
    description: 'Portfolio pessoal desenvolvido com Next.js, React, TypeScript e TailwindCSS.',
    images: ['/og-image.jpg'],
    creator: '@seutwitter',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <body className={`bg-gray-900 min-h-screen ${inter.className}`} suppressHydrationWarning={true}>
        <PortfolioProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </PortfolioProvider>
      </body>
    </html>
  );
}
