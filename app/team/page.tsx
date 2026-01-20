'use client'

import { motion } from 'framer-motion'
import { Award, Users, CheckCircle2, Building2 } from 'lucide-react'
import Button from '@/components/ui/Button'

const leadership = [
  {
    name: 'Sarah Mitchell',
    role: 'Managing Director',
    expertise: 'Strategic BIM Implementation, ISO-19650 Compliance',
    experience: '20+ years in construction technology and information management',
    responsibility: 'Overall business strategy, client relationships, and standards compliance',
  },
  {
    name: 'James Chen',
    role: 'Technical Director',
    expertise: 'BIM Architecture, Digital Twin Development',
    experience: '18+ years in BIM modeling, coordination, and technology integration',
    responsibility: 'Technical leadership, innovation, and solution architecture',
  },
  {
    name: 'Emma Thompson',
    role: 'Operations Director',
    expertise: 'Project Delivery, Information Management',
    experience: '15+ years in construction project management and BIM delivery',
    responsibility: 'Project delivery excellence, quality assurance, and team operations',
  },
]

const technicalExperts = [
  {
    category: 'BIM Design & Engineering',
    experts: [
      {
        name: 'Michael Rodriguez',
        role: 'Senior BIM Manager',
        expertise: 'Architectural BIM, Model Coordination, LOD Development',
      },
      {
        name: 'David Park',
        role: 'MEP BIM Specialist',
        expertise: 'MEP Systems Modeling, Clash Detection, Systems Integration',
      },
      {
        name: 'Lisa Anderson',
        role: 'Structural BIM Engineer',
        expertise: 'Structural Modeling, Analysis Integration, Detailing',
      },
    ],
  },
  {
    category: 'Construction Intelligence',
    experts: [
      {
        name: 'Robert Taylor',
        role: '4D/5D Specialist',
        expertise: 'Construction Sequencing, Scheduling, Cost Management',
      },
      {
        name: 'Jennifer Lee',
        role: 'Clash Detection Manager',
        expertise: 'Multi-disciplinary Coordination, Conflict Resolution',
      },
    ],
  },
  {
    category: 'Digital Twin & IoT',
    experts: [
      {
        name: 'Alex Kumar',
        role: 'Digital Twin Architect',
        expertise: 'Platform Development, IoT Integration, Data Analytics',
      },
      {
        name: 'Sophie Martin',
        role: 'IoT Systems Engineer',
        expertise: 'Sensor Networks, Building Automation, Real-time Monitoring',
      },
    ],
  },
  {
    category: 'Compliance & Standards',
    experts: [
      {
        name: 'Thomas Wright',
        role: 'ISO-19650 Lead',
        expertise: 'Standards Implementation, Compliance Auditing, Training',
      },
      {
        name: 'Rachel Green',
        role: 'Information Management Specialist',
        expertise: 'CDE Implementation, Process Development, Quality Assurance',
      },
    ],
  },
]

const responsibilityMapping = [
  {
    standard: 'ISO-19650-1',
    responsible: 'Sarah Mitchell, Thomas Wright',
    focus: 'Concepts, Principles, Framework',
  },
  {
    standard: 'ISO-19650-2',
    responsible: 'Emma Thompson, Rachel Green',
    focus: 'Delivery Phase, Information Management',
  },
  {
    standard: 'ISO-19650-3',
    responsible: 'James Chen, Alex Kumar',
    focus: 'Operational Phase, Asset Management',
  },
  {
    standard: 'ISO-19650-4',
    responsible: 'James Chen, Michael Rodriguez',
    focus: 'Information Exchange, Data Structures',
  },
  {
    standard: 'ISO-19650-5',
    responsible: 'Thomas Wright, Alex Kumar',
    focus: 'Security, Data Protection',
  },
]

export default function TeamPage() {
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
            Leadership & Technical Experts
          </h1>
          <p className="text-xl text-bim-charcoal/70 max-w-3xl mx-auto">
            Experienced professionals committed to engineering excellence and enterprise-grade delivery.
          </p>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-bim-charcoal mb-8 text-center">
            Leadership
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-24 h-24 bg-bim-deep-blue/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="text-bim-deep-blue" size={40} />
                </div>
                <h3 className="text-2xl font-semibold text-bim-charcoal mb-2 text-center">
                  {leader.name}
                </h3>
                <p className="text-bim-teal font-semibold mb-4 text-center">
                  {leader.role}
                </p>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-bim-charcoal">Expertise:</span>
                    <p className="text-bim-charcoal/70 mt-1">{leader.expertise}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-bim-charcoal">Experience:</span>
                    <p className="text-bim-charcoal/70 mt-1">{leader.experience}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-bim-charcoal">Responsibility:</span>
                    <p className="text-bim-charcoal/70 mt-1">{leader.responsibility}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Experts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-bim-charcoal mb-8 text-center">
            Technical Experts
          </h2>
          <div className="space-y-12">
            {technicalExperts.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                className="bg-white rounded-lg p-8 shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-bim-charcoal mb-6 flex items-center">
                  <Building2 className="text-bim-teal mr-3" size={28} />
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.experts.map((expert, expertIndex) => (
                    <div
                      key={expert.name}
                      className="border-l-4 border-bim-teal pl-4"
                    >
                      <h4 className="text-lg font-semibold text-bim-charcoal mb-1">
                        {expert.name}
                      </h4>
                      <p className="text-bim-teal text-sm font-medium mb-2">
                        {expert.role}
                      </p>
                      <p className="text-bim-charcoal/70 text-sm">
                        {expert.expertise}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Standards Responsibility Mapping */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-bim-charcoal mb-8 text-center">
            Standards Responsibility Mapping
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-sm overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-bim-concrete">
                  <th className="text-left py-4 px-4 font-semibold text-bim-charcoal">ISO-19650 Part</th>
                  <th className="text-left py-4 px-4 font-semibold text-bim-charcoal">Responsible Lead</th>
                  <th className="text-left py-4 px-4 font-semibold text-bim-charcoal">Focus Area</th>
                </tr>
              </thead>
              <tbody>
                {responsibilityMapping.map((item, index) => (
                  <tr
                    key={item.standard}
                    className={`border-b border-bim-concrete ${index % 2 === 0 ? 'bg-bim-concrete/30' : ''}`}
                  >
                    <td className="py-4 px-4 font-semibold text-bim-deep-blue">
                      {item.standard}
                    </td>
                    <td className="py-4 px-4 text-bim-charcoal/70">
                      {item.responsible}
                    </td>
                    <td className="py-4 px-4 text-bim-charcoal/70">
                      {item.focus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Collaboration Model */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-bim-deep-blue text-white rounded-lg p-8 md:p-12 shadow-lg"
        >
          <div className="flex items-center mb-6">
            <Users className="text-bim-teal mr-3" size={32} />
            <h2 className="text-3xl font-semibold">
              Collaboration & Scalability Model
            </h2>
          </div>
          <p className="text-white/80 mb-6 leading-relaxed">
            Our team structure is designed for enterprise-scale delivery. We operate with dedicated 
            project teams led by experienced managers, supported by technical specialists and 
            quality assurance processes. This model ensures:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-bim-teal">Scalability</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-3 mt-0.5 flex-shrink-0" size={20} />
                  <span>Flexible team scaling for project demands</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-3 mt-0.5 flex-shrink-0" size={20} />
                  <span>Multi-project resource allocation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-3 mt-0.5 flex-shrink-0" size={20} />
                  <span>Specialized expertise on-demand</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-bim-teal">Quality Assurance</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-3 mt-0.5 flex-shrink-0" size={20} />
                  <span>Multi-level review processes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-3 mt-0.5 flex-shrink-0" size={20} />
                  <span>Standards compliance verification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-3 mt-0.5 flex-shrink-0" size={20} />
                  <span>Continuous improvement practices</span>
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
          className="text-center mt-16"
        >
          <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
            Work With Our Team
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
