import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '600', '700'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Orange Grove Family Dentistry | Dr. Kyle Nishimura DMD | Orange, CA',
  description: 'Orange Grove Family Dentistry serves families in Orange, Villa Park, and Anaheim with comprehensive dental care. Dr. Kyle Nishimura combines modern technology with gentle, personalized care for emergency dentistry, cosmetic procedures, and family dental health.',
  keywords: 'family dentist Orange CA, emergency dentistry, cosmetic dentistry, Dr. Kyle Nishimura, dental implants, clear aligners, same day crowns',
  authors: [{ name: 'Orange Grove Family Dentistry' }],
  creator: 'Orange Grove Family Dentistry',
  publisher: 'Orange Grove Family Dentistry',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL('https://orangegrovefamilydentistry.com'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Orange Grove Family Dentistry | Dr. Kyle Nishimura DMD',
    description: 'Comprehensive dental care for families in Orange County. Modern technology, gentle approach, emergency services available.',
    url: 'https://orangegrovefamilydentistry.com',
    siteName: 'Orange Grove Family Dentistry',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orange Grove Family Dentistry | Dr. Kyle Nishimura DMD',
    description: 'Comprehensive dental care for families in Orange County. Modern technology, gentle approach, emergency services available.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${nunito.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}