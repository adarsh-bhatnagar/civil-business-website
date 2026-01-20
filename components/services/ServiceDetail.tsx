'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Button from '@/components/ui/Button'
import { CheckCircle2 } from 'lucide-react'

interface ServiceDetailProps {
  title: string
  description: string
  problem: string
  solution: string
  workflow: Array<{ step: string; description: string }>
  deliverables: string[]
  standards: string[]
  visual?: ReactNode
}

export default function ServiceDetail({
  title,
  description,
  problem,
  solution,
  workflow,
  deliverables,
  standards,
  visual,
}: ServiceDetailProps) {
  return (
    <div className="pt-32 pb-24 bg-bim-concrete min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-bim-charcoal mb-6">
            {title}
          </h1>
          <p className="text-xl text-bim-charcoal/70 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Visual */}
        {visual && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-16 h-96 rounded-lg overflow-hidden bg-white shadow-lg"
          >
            {visual}
          </motion.div>
        )}

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-bim-charcoal mb-4">
              The Problem
            </h2>
            <p className="text-bim-charcoal/70 leading-relaxed">
              {problem}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-bim-deep-blue text-white rounded-lg p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Our Solution
            </h2>
            <p className="text-white/90 leading-relaxed">
              {solution}
            </p>
          </motion.div>
        </div>

        {/* Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg p-8 shadow-sm mb-16"
        >
          <h2 className="text-3xl font-semibold text-bim-charcoal mb-8">
            Technical Workflow
          </h2>
          <div className="space-y-6">
            {workflow.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 bg-bim-teal rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bim-charcoal mb-2">
                    {item.step}
                  </h3>
                  <p className="text-bim-charcoal/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Deliverables & Standards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-bim-charcoal mb-6">
              Deliverables
            </h2>
            <ul className="space-y-3">
              {deliverables.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="text-bim-teal mr-3 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-bim-charcoal/70">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-bim-concrete rounded-lg p-8 border border-bim-concrete"
          >
            <h2 className="text-2xl font-semibold text-bim-charcoal mb-6">
              Standards Followed
            </h2>
            <ul className="space-y-3">
              {standards.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="text-bim-deep-blue mr-3 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-bim-charcoal/70">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
            Discuss Your Project
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
