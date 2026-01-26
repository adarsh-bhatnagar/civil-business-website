import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { LoadingProvider } from '@/contexts/LoadingContext'
import LoadingOverlay from '@/components/ui/LoadingOverlay'
import RouteChangeHandler from '@/components/ui/RouteChangeHandler'

export const metadata: Metadata = {
  title: 'NirmanIQ | Built-Environment Intelligence & Enterprise BIM',
  description: 'Enterprise-grade built-environment intelligence consultancy. NirmanIQ converts physical assets into reliable digital intelligence across design, construction, and operations.',
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
