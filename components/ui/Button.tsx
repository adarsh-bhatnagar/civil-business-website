'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'
import { useLoading } from '@/contexts/LoadingContext'
import { Loader2 } from 'lucide-react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  loading?: boolean
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  type = 'button',
  variant = 'primary',
  className = '',
  loading: externalLoading
}: ButtonProps) {
  const { startLoading } = useLoading()
  const [internalLoading, setInternalLoading] = useState(false)
  const isLoading = externalLoading !== undefined ? externalLoading : internalLoading

  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantClasses = {
    primary: 'bg-bim-orange text-white hover:bg-bim-orange/90 focus:ring-bim-orange',
    secondary: 'bg-bim-teal text-white hover:bg-bim-teal/90 focus:ring-bim-teal',
    outline: 'border-2 border-bim-teal text-bim-teal hover:bg-bim-teal hover:text-white focus:ring-bim-teal',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  const handleClick = () => {
    if (href) {
      startLoading()
      setInternalLoading(true)
    }
    if (onClick) {
      onClick()
    }
  }

  if (href) {
    return (
      <motion.div 
        whileHover={!isLoading ? { scale: 1.02 } : {}}
        whileTap={!isLoading ? { scale: 0.98 } : {}}
      >
        <Link 
          href={href} 
          className={classes}
          onClick={handleClick}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 animate-spin" size={18} />
              Loading...
            </>
          ) : (
            children
          )}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={handleClick}
      className={classes}
      disabled={isLoading}
      whileHover={!isLoading ? { scale: 1.02 } : {}}
      whileTap={!isLoading ? { scale: 0.98 } : {}}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 animate-spin" size={18} />
          Loading...
        </>
      ) : (
        children
      )}
    </motion.button>
  )
}
