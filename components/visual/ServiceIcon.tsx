'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ServiceIconProps {
  icon: LucideIcon
  color: string
  size?: number
  delay?: number
}

export default function ServiceIcon({ icon: Icon, color, size = 36, delay = 0 }: ServiceIconProps) {
  return (
    <motion.div
      className={`relative w-20 h-20 ${color} rounded-xl flex items-center justify-center shadow-lg`}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay, duration: 0.5, type: 'spring' }}
      whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
    >
      <Icon className="text-white" size={size} />
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-white/30"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ repeat: Infinity, duration: 2, delay }}
      />
    </motion.div>
  )
}
