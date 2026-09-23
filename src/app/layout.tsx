import './globals.css'
import { ReactNode } from 'react'
import Script from 'next/script'
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  themeColor: '#2563EB',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Driver Info Hub - Clear, Plain-English Driver Guides',
    template: '%s | Driver Info Hub',
  },
  description: 'Your trusted resource for understanding device drivers, troubleshooting issues, and finding clear answers without technical complexity.',
  keywords: ['device drivers', 'printer driver', 'driver troubleshooting', 'how drivers work', 'graphics driver', 'audio driver', 'network driver', 'USB driver', 'bluetooth driver', 'fix driver issues'],
  authors: [{ name: 'Driver Info Hub', url: 'https://www.driverinfohub.com' }],
  creator: 'Driver Info Hub',
  metadataBase: new URL('https://www.driverinfohub.com'),
  icons: {
    icon: '/logo1.png',
    apple: '/assets/images/apple-touch-icon.png',
  },
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Driver Info Hub - Clear, Plain-English Driver Guides',
    description: 'Your trusted resource for understanding device drivers, troubleshooting issues, and finding clear answers without technical complexity.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Driver Info Hub',
    images: [{ url: '/assets/images/og-image.png', width: 1200, height: 630, alt: 'Driver Info Hub — Device Drivers Explained' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Driver Info Hub - Clear, Plain-English Driver Guides',
    description: 'Your trusted resource for understanding device drivers, troubleshooting issues, and finding clear answers without technical complexity.',
    images: ['/assets/images/og-image.png'],
  },
  other: {
    // Preload critical images for faster loading
    'preload-images': '/logo.png,/logo1.png',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/logo.png" />
        <link rel="preload" as="image" href="/logo1.png" />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/2b15c6f3e974a15f7127d23efb9f45db/script.js"
          strategy="afterInteractive"
        />
        <Header />
        <main id="main-content" className="w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
