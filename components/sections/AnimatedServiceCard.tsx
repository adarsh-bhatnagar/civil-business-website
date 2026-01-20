'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface AnimatedServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  color: string
  gradient: string
  index: number
  features?: string[]
}

export default function AnimatedServiceCard({
  icon: Icon,
  title,
  description,
  href,
  color,
  gradient,
  index,
  features,
}: AnimatedServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-bim-concrete group relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
      />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 ${color} rounded-full opacity-20`}
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + i,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      
      {/* Icon with animation */}
      <motion.div
        className={`relative w-20 h-20 ${color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
        whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="text-white" size={36} />
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-white/30"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
        />
      </motion.div>
      
      <h3 className="text-2xl font-semibold text-bim-charcoal mb-3 relative z-10">
        {title}
      </h3>
      <p className="text-bim-charcoal/70 mb-6 leading-relaxed relative z-10">
        {description}
      </p>
      
      {features && (
        <ul className="space-y-2 mb-6 relative z-10">
          {features.slice(0, 3).map((feature, idx) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 + idx * 0.05 }}
              className="flex items-center text-sm text-bim-charcoal/70"
            >
              <span className={`w-1.5 h-1.5 ${color} rounded-full mr-2`} />
              {feature}
            </motion.li>
          ))}
        </ul>
      )}
      
      <Link
        href={href}
        className="inline-flex items-center text-bim-teal font-semibold hover:text-bim-teal/80 transition-colors group/link relative z-10"
      >
        Learn More
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.1 }}
        >
          <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={18} />
        </motion.div>
      </Link>
    </motion.div>
  )
}
