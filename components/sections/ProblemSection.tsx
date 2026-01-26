'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Clock, DollarSign, FileX } from 'lucide-react'

const problems = [
  {
    icon: FileX,
    title: 'Lost Information',
    description: 'Important project details get scattered across different teams and systems, leading to mistakes and extra work.',
  },
  {
    icon: Clock,
    title: 'Project Delays',
    description: 'Without proper coordination, teams discover problems too late, causing delays and extra costs.',
  },
  {
    icon: DollarSign,
    title: 'Going Over Budget',
    description: 'Poor planning and coordination waste money. Up to 30% of construction costs come from avoidable mistakes.',
  },
  {
    icon: AlertTriangle,
    title: 'Compliance Issues',
    description: 'Not following industry standards can lead to legal problems and financial penalties.',
  },
]

export default function ProblemSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-bim-charcoal mb-4">
            Critical Built-Environment Challenges
          </h2>
          <p className="text-xl text-bim-charcoal/70 max-w-3xl mx-auto">
            Fragmented data and uncoordinated workflows increase project risk. NirmanIQ addresses the fundamental information failures that lead to delays and cost overruns.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-bim-concrete p-8 rounded-lg border border-bim-concrete hover:border-bim-teal/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-bim-orange/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-bim-orange/20 transition-colors">
                  <Icon className="text-bim-orange" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-bim-charcoal mb-3">
                  {problem.title}
                </h3>
                <p className="text-bim-charcoal/70 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
