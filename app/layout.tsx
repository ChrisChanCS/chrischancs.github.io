import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';
import React from 'react';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import '@/static/css/main.scss';

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
  metadataBase: new URL('https://chrischancs.github.io/haowei.github.io/'),
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
  openGraph: {
    type: 'website',
    url: 'https://chrischancs.github.io/haowei.github.io/',
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
        <div id="wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
