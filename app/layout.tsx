import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { LoadingProvider } from '@/contexts/LoadingContext'
import LoadingOverlay from '@/components/ui/LoadingOverlay'
import RouteChangeHandler from '@/components/ui/RouteChangeHandler'

export const metadata: Metadata = {
  title: 'BIM & Digital Twin Consultancy | Enterprise Solutions',
  description: 'Professional BIM and Digital Twin consultancy services. ISO-19650 compliant information management for enterprise construction and infrastructure projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LoadingProvider>
          <RouteChangeHandler />
          <LoadingOverlay />
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  )
}
