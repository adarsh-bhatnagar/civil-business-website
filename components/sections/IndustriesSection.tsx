'use client'

import { motion } from 'framer-motion'
import { Building, Factory, Train, Zap, Hospital, School } from 'lucide-react'

const industries = [
  {
    icon: Building,
    title: 'Commercial Real Estate',
    description: 'Office buildings, retail complexes, and mixed-use developments.',
  },
  {
    icon: Factory,
    title: 'Industrial Facilities',
    description: 'Manufacturing plants, warehouses, and logistics centers.',
  },
  {
    icon: Train,
    title: 'Infrastructure',
    description: 'Transportation, bridges, tunnels, and public works.',
  },
  {
    icon: Zap,
    title: 'Energy & Utilities',
    description: 'Power plants, renewable energy facilities, and utility networks.',
  },
  {
    icon: Hospital,
    title: 'Healthcare',
    description: 'Hospitals, clinics, and medical research facilities.',
  },
  {
    icon: School,
    title: 'Education',
    description: 'Universities, schools, and educational campuses.',
  },
]

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-bim-concrete">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-bim-charcoal mb-4">
            Intelligence Across Asset Classes
          </h2>
          <p className="text-xl text-bim-charcoal/70 max-w-3xl mx-auto">
            NirmaanIQ delivers enterprise intelligence for complex built environments across diverse sectors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-white"
              >
                <div className="w-14 h-14 bg-bim-deep-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-bim-deep-blue" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-bim-charcoal mb-3">
                  {industry.title}
                </h3>
                <p className="text-bim-charcoal/70 leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
