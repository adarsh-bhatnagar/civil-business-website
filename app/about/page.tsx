'use client'

import { motion } from 'framer-motion'
import { Target, Award, Users, TrendingUp } from 'lucide-react'
import Button from '@/components/ui/Button'

const values = [
  {
    icon: Target,
    title: 'Quality Work',
    description: 'We follow best practices and high standards on every project we deliver.',
  },
  {
    icon: Award,
    title: 'Follow Standards',
    description: 'We follow ISO-19650 and other international standards to ensure quality.',
  },
  {
    icon: Users,
    title: 'Work Together',
    description: 'We partner with you and your team, not just work for you.',
  },
  {
    icon: TrendingUp,
    title: 'Stay Current',
    description: 'We use the latest tools and methods to give you the best results.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-bim-concrete min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-bim-charcoal mb-6">
            About Us
          </h1>
          <p className="text-xl text-bim-charcoal/70 max-w-3xl mx-auto">
            We have been helping construction companies build smarter for over 5 years.
            We specialize in 3D building models and digital building management.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg p-8 md:p-12 shadow-sm mb-16"
        >
          <h2 className="text-3xl font-semibold text-bim-charcoal mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-bim-charcoal/70 leading-relaxed mb-6">
            NirmaanIQ converts physical assets into reliable digital intelligence. We reduce risk, prevent coordination
            failures, and ensure accurate information flows across design, construction, and operations. Our work is
            grounded in engineering discipline, structured workflows, and adherence to information management standards—not
            marketing promises.
          </p>
          <p className="text-lg text-bim-charcoal/70 leading-relaxed">
            We exist to solve a fundamental problem: construction projects fail when information is inconsistent,
            inaccessible, or unreliable. We deliver structured digital intelligence that reduces lifecycle costs,
            prevents errors, and enables informed decision-making from concept through facility management.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-bim-charcoal mb-8 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-bim-teal/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-bim-teal" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-bim-charcoal mb-3">
                    {value.title}
                  </h3>
                  <p className="text-bim-charcoal/70 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-bim-deep-blue text-white rounded-lg p-8 md:p-12 shadow-lg mb-16"
        >
          <h2 className="text-3xl font-semibold mb-8">
            Experience & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-bim-teal mb-2">50+</div>
              <div className="text-white/80">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-bim-teal mb-2">5+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-bim-teal mb-2">100+</div>
              <div className="text-white/80">Clients Served</div>
            </div>
          </div>
          <p className="mt-8 text-white/80 leading-relaxed">
            We have worked on all types of projects: office buildings, hospitals, factories, infrastructure,
            and more. We have helped contractors, developers, and building owners set up better information
            management systems and follow industry standards.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
            Work With Us
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
