'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, CheckCircle2, Award, FileCheck } from 'lucide-react'
import Button from '@/components/ui/Button'

const standards = [
  {
    icon: FileCheck,
    title: 'ISO-19650-1',
    description: 'Concepts and principles for information management using BIM.',
  },
  {
    icon: CheckCircle2,
    title: 'ISO-19650-2',
    description: 'Delivery phase of assets - Information management process.',
  },
  {
    icon: Award,
    title: 'ISO-19650-3',
    description: 'Operational phase of assets - Information management process.',
  },
  {
    icon: Shield,
    title: 'ISO-19650-4 & 5',
    description: 'Information exchange and security requirements.',
  },
]

export default function StandardsSection() {
  return (
    <section className="py-24 bg-bim-deep-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Information Integrity & Compliance
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Adherence to international standards ensures information integrity and lifecycle value for enterprise assets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {standards.map((standard, index) => {
            const Icon = standard.icon
            return (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-bim-teal/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-bim-teal/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-bim-teal" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-bim-teal">
                  {standard.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {standard.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <Button href="/iso-19650" variant="secondary">
            View Information Management Framework
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
