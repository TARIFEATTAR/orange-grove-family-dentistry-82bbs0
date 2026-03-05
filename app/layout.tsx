import { Inter, Nunito } from "next/font/google"
import { Metadata } from "next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap"
})

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Orange Grove Family Dentistry | Dr. Kyle Nishimura DMD | Orange, CA",
  description: "Orange Grove Family Dentistry serves families in Orange, Villa Park, and Anaheim with comprehensive dental care. Dr. Kyle Nishimura offers emergency dentistry, cosmetic procedures, and family care with modern technology and comfort-focused approach.",
  keywords: [
    "family dentist Orange CA",
    "Dr. Kyle Nishimura",
    "emergency dentist Orange County",
    "cosmetic dentistry Orange",
    "pediatric dentistry Villa Park",
    "dental implants Anaheim",
    "CEREC same day crowns",
    "clear aligners Orange County"
  ],
  authors: [{ name: "Dr. Kyle Nishimura, DMD" }],
  openGraph: {
    title: "Orange Grove Family Dentistry | Dr. Kyle Nishimura DMD",
    description: "Comprehensive family dental care in Orange, CA. Modern technology, gentle approach, serving Orange County families since 2015.",
    url: "https://orangegrovefamilydentistry.com",
    siteName: "Orange Grove Family Dentistry",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://placehold.co/1200x630/f97316/ffffff?text=Orange+Grove+Family+Dentistry",
        width: 1200,
        height: 630,
        alt: "Orange Grove Family Dentistry - Dr. Kyle Nishimura DMD"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Orange Grove Family Dentistry | Dr. Kyle Nishimura DMD",
    description: "Comprehensive family dental care in Orange, CA. Modern technology, gentle approach.",
    images: ["https://placehold.co/1200x630/f97316/ffffff?text=Orange+Grove+Family+Dentistry"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "your-google-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code"
    }
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${nunito.variable}`}>
      <body className={`${inter.className} antialiased bg-white text-neutral-900`}>
        {children}
      </body>
    </html>
  )
}

export { RootLayout }