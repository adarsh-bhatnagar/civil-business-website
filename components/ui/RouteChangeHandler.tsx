'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useLoading } from '@/contexts/LoadingContext'

export default function RouteChangeHandler() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { startLoading, stopLoading } = useLoading()

  useEffect(() => {
    // Stop loading when route changes complete
    const timer = setTimeout(() => {
      stopLoading()
    }, 300)

    return () => clearTimeout(timer)
  }, [pathname, searchParams, stopLoading])

  // Start loading on any link click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href]')
      
      if (link) {
        const href = link.getAttribute('href')
        // Only show loader for internal links
        if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
          startLoading()
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [startLoading])

  return null
}
