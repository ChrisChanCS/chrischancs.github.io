import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';
import React from 'react';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import '@/static/css/main.scss';

const siteUrl = 'https://chrischancs.github.io/';

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Haowei Chen',
  alternateName: ["Haowei Chen's Home Page", 'chrischancs.github.io'],
  url: siteUrl,
};

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

const raleway = Raleway({
  weight: ['400', '800', '900'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  title: {
    default: "Haowei Chen's Home Page",
    template: '%s | Haowei Chen',
  },
  description:
    'Haowei Chen is a Ph.D. student in Computer Science at UT Austin working in distributed systems and LLM serving systems.',
  keywords: [
    'Haowei Chen',
    'distributed systems',
    'LLM serving systems',
    'computer science',
    'the university of texas at austin',
    'UT Austin',
  ],
  authors: [{ name: 'Haowei Chen' }],
  creator: 'Haowei Chen',
  verification: {
    google: 'oUdG579LfPSeKHDQmt7apQVXXf-Vyi9d-JvmXmMmDGo',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    locale: 'en_US',
    siteName: 'Haowei Chen',
    title: 'Haowei Chen',
    description:
      'Ph.D. student in Computer Science at UT Austin working in distributed systems and LLM serving systems.',
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${raleway.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <div id="wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
