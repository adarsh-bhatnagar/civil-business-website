'use client'

import { motion } from 'framer-motion'
import { FileText, CheckCircle2, Award, Shield, Database, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const parts = [
  {
    number: 'ISO-19650-1',
    title: 'Concepts and Principles',
    icon: FileText,
    description: 'The basics: how to organize and manage building project information effectively.',
    keyPoints: [
      'How to structure your information system',
      'Using a shared data platform',
      'Planning what information to deliver',
      'Working together as a team',
    ],
  },
  {
    number: 'ISO-19650-2',
    title: 'During Design & Construction',
    icon: CheckCircle2,
    description: 'How to manage information while designing and building your project.',
    keyPoints: [
      'What the client needs to provide',
      'What the lead consultant must do',
      'Planning information delivery',
      'Creating and sharing models',
    ],
  },
  {
    number: 'ISO-19650-3',
    title: 'During Operations',
    icon: Award,
    description: 'How to manage information after construction, during daily operations and maintenance.',
    keyPoints: [
      'What information you need to operate',
      'Getting information from construction',
      'Managing operational information',
      'Keeping information updated',
    ],
  },
  {
    number: 'ISO-19650-4',
    title: 'Sharing Information',
    icon: Database,
    description: 'Standards for how information should be formatted and shared between teams.',
    keyPoints: [
      'Standard file formats',
      'How data should be structured',
      'What information to include',
      'Templates for delivery',
    ],
  },
  {
    number: 'ISO-19650-5',
    title: 'Security & Protection',
    icon: Shield,
    description: 'How to keep your project information secure and protect sensitive data.',
    keyPoints: [
      'Assessing security risks',
      'Protecting information',
      'Meeting data protection laws',
      'Controlling who can access what',
    ],
  },
]

const lifecycleStages = [
  {
    stage: 'Planning What You Need',
    description: 'Decide what information you need for your project and set up a system to manage it.',
  },
  {
    stage: 'Requesting Proposals',
    description: 'Ask potential consultants to submit proposals, including how they\'ll manage information.',
  },
  {
    stage: 'Reviewing Proposals',
    description: 'Consultants respond with their proposed approach to managing project information.',
  },
  {
    stage: 'Hiring the Team',
    description: 'Select your team and set up the processes for how everyone will share information.',
  },
  {
    stage: 'Creating & Sharing Information',
    description: 'Teams create models and documents, which are reviewed and approved before sharing.',
  },
  {
    stage: 'Project Completion',
    description: 'Finalize all information and hand it over for building operations and maintenance.',
  },
]

export default function ISO19650Page() {
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
            Information Management & Compliance
          </h1>
          <p className="text-xl text-bim-charcoal/70 max-w-3xl mx-auto">
            Structured information management ensures reliable data flows throughout the project lifecycle.
            ISO-19650 provides the framework for organizing, sharing, and maintaining building information from design through operations.
          </p>
        </motion.div>

        {/* All Five Parts */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-bim-charcoal mb-8"
          >
            The Five Parts of ISO-19650
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {parts.map((part, index) => {
              const Icon = part.icon
              return (
                <motion.div
                  key={part.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-white"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-bim-deep-blue/10 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="text-bim-deep-blue" size={28} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-bim-teal mb-1">
                        {part.number}
                      </div>
                      <h3 className="text-xl font-semibold text-bim-charcoal">
                        {part.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-bim-charcoal/70 mb-4 leading-relaxed">
                    {part.description}
                  </p>
                  <ul className="space-y-2">
                    {part.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start text-sm text-bim-charcoal/70">
                        <span className="w-1.5 h-1.5 bg-bim-teal rounded-full mr-2 mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Information Management Lifecycle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-bim-deep-blue text-white rounded-lg p-8 shadow-lg mb-16"
        >
          <h2 className="text-3xl font-semibold mb-8">
            Information Management Lifecycle
          </h2>
          <div className="space-y-6">
            {lifecycleStages.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 bg-bim-teal rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {item.stage}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Value */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg p-8 shadow-sm mb-16"
        >
          <h2 className="text-3xl font-semibold text-bim-charcoal mb-6">
            Compliance Value for Enterprises
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-bim-charcoal mb-4">Immediate Benefits</h3>
              <ul className="space-y-3 text-bim-charcoal/70">
                <li className="flex items-start">
                  <CheckCircle2 className="text-bim-teal mr-3 mt-0.5 flex-shrink-0" size={20} />
                  <span>Less lost information and fewer costly mistakes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-bim-teal mr-3 mt-0.5 flex-shrink-0" size={20} />
                  <span>Teams work together better</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-bim-teal mr-3 mt-0.5 flex-shrink-0" size={20} />
                  <span>Consistent, high-quality deliverables</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-bim-teal mr-3 mt-0.5 flex-shrink-0" size={20} />
                  <span>Lower risk and better compliance</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-bim-charcoal mb-4">Long-Term Advantages</h3>
              <ul className="space-y-3 text-bim-charcoal/70">
                <li className="flex items-start">
                  <CheckCircle2 className="text-bim-teal mr-3 mt-0.5 flex-shrink-0" size={20} />
                  <span>Prove you follow international standards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-bim-teal mr-3 mt-0.5 flex-shrink-0" size={20} />
                  <span>Win more projects with better proposals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-bim-teal mr-3 mt-0.5 flex-shrink-0" size={20} />
                  <span>Better information management over building lifetime</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-bim-teal mr-3 mt-0.5 flex-shrink-0" size={20} />
                  <span>Foundation for future digital improvements</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-bim-teal/10 rounded-lg p-8 border border-bim-teal/20">
            <h3 className="text-2xl font-semibold text-bim-charcoal mb-4">
              Ready to Implement ISO-19650?
            </h3>
            <p className="text-bim-charcoal/70 mb-6 max-w-2xl mx-auto">
              Our compliance services help enterprises implement ISO-19650 standards
              and establish robust information management systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/services/compliance-standards" variant="primary">
                View Compliance Services
              </Button>
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
