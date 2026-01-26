'use client'

import { motion } from 'framer-motion'
import { FileText, Users, CheckCircle, Database, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    title: 'Plan What You Need',
    description: 'Decide what information your project needs and set up a shared platform where everyone can access it.',
    step: '01',
  },
  {
    icon: Users,
    title: 'Set Up Team Work',
    description: 'Create a plan for how teams will work together, assign roles, and establish how information will be shared.',
    step: '02',
  },
  {
    icon: Database,
    title: 'Create 3D Models',
    description: 'Build detailed 3D models of your project with all the information needed for construction and operations.',
    step: '03',
  },
  {
    icon: CheckCircle,
    title: 'Check Quality',
    description: 'Review models for accuracy, find conflicts between different building parts, and verify everything meets standards.',
    step: '04',
  },
  {
    icon: BarChart3,
    title: 'Deliver Information',
    description: 'Provide complete, checked models and building information ready for construction and future operations.',
    step: '05',
  },
]

export default function ProcessFlow() {
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
            Information Delivery Framework
          </h2>
          <p className="text-xl text-bim-charcoal/70 max-w-3xl mx-auto">
            Our structured 5-step approach ensures reliable data flows throughout the asset lifecycle, grounded in international information management standards.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-bim-teal via-bim-teal/50 to-bim-teal">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bim-teal to-transparent opacity-50" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative"
                >
                  <div className="bg-bim-concrete rounded-lg p-6 border-2 border-bim-concrete hover:border-bim-teal transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 bg-bim-teal rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="text-white" size={24} />
                      </div>
                      <span className="text-3xl font-bold text-bim-teal/30 group-hover:text-bim-teal/50 transition-colors">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-bim-charcoal mb-3">
                      {step.title}
                    </h3>
                    <p className="text-bim-charcoal/70 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for mobile/tablet */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute -right-4 top-1/2 transform -translate-y-1/2 text-bim-teal">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                      >
                        →
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
