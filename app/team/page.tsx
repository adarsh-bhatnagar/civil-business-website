'use client'

import { motion } from 'framer-motion'
import { Award, Users, CheckCircle2, Building2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import adarsh from '@/app/assets/adarsh.png'
import zerik from '@/app/assets/zerik_adeel_new.png'
import salim from '@/app/assets/salim_usmani.jpeg'

const leadership = [
  {
    name: 'Zerik Adeel',
    image: zerik,
    role: 'Civil Engineer (Planning & Designing)',
    expertise: 'Infrastructure Planning, BIM-Based Drafting, Engineering Design Coordination',
    membership: 'AMIE (Associate Member of the Institution of Engineers) and American Society of Civil Engineers (ASCE)',
    experience: 'Civil Engineering graduate with hands-on experience across infrastructure and building projects, including large-scale transit and public works',
    responsibility: 'Responsible for engineering planning, BIM-based drafting, and ensuring site-feasible design coordination aligned with project standards and construction requirements',
  },
  {
    name: 'Salim Usmani',
    image: salim,
    role: 'Civil Engineer (Construction Management)',
    expertise: 'High-Rise Building Construction, Tunnel Engineering, Site Supervision & Safety',
    experience: 'Civil Engineer with hands-on experience across high-rise residential buildings and heavy engineering tunnel infrastructure projects.',
    responsibility: 'Responsible for site supervision, tunnel construction support  operations, shotcreting, rock bolting, and ensuring construction safety and quality compliance on site.',
  }
  ,
  {
    name: 'Adarsh Bhatnagar',
    image: adarsh,
    role: 'Software Engineer (IoT, Software & Digital Systems)',
    expertise: 'Built-Environment Digital Systems, BIM Data Pipelines, Platform & Workflow Engineering',
    experience: 'Computer Science and IT professional with hands-on experience in designing and implementing digital systems that support BIM workflows, information management, and asset data integration.',
    responsibility: 'Responsible for bridging engineering domain requirements with scalable digital systems, ensuring that BIM, Digital Twin, and information workflows are reliable, structured, and production-ready.',
  },
]

// const technicalExperts = [
//   {
//     category: 'BIM Design & Engineering',
//     experts: [
//       {
//         name: 'Michael Rodriguez',
//         role: 'Senior BIM Manager',
//         expertise: 'Architectural BIM, Model Coordination, LOD Development',
//       },
//       {
//         name: 'David Park',
//         role: 'MEP BIM Specialist',
//         expertise: 'MEP Systems Modeling, Clash Detection, Systems Integration',
//       },
//       {
//         name: 'Lisa Anderson',
//         role: 'Structural BIM Engineer',
//         expertise: 'Structural Modeling, Analysis Integration, Detailing',
//       },
//     ],
//   },
//   {
//     category: 'Construction Intelligence',
//     experts: [
//       {
//         name: 'Robert Taylor',
//         role: '4D/5D Specialist',
//         expertise: 'Construction Sequencing, Scheduling, Cost Management',
//       },
//       {
//         name: 'Jennifer Lee',
//         role: 'Clash Detection Manager',
//         expertise: 'Multi-disciplinary Coordination, Conflict Resolution',
//       },
//     ],
//   },
//   {
//     category: 'Digital Twin & IoT',
//     experts: [
//       {
//         name: 'Alex Kumar',
//         role: 'Digital Twin Architect',
//         expertise: 'Platform Development, IoT Integration, Data Analytics',
//       },
//       {
//         name: 'Sophie Martin',
//         role: 'IoT Systems Engineer',
//         expertise: 'Sensor Networks, Building Automation, Real-time Monitoring',
//       },
//     ],
//   },
//   {
//     category: 'Compliance & Standards',
//     experts: [
//       {
//         name: 'Thomas Wright',
//         role: 'ISO-19650 Lead',
//         expertise: 'Standards Implementation, Compliance Auditing, Training',
//       },
//       {
//         name: 'Rachel Green',
//         role: 'Information Management Specialist',
//         expertise: 'CDE Implementation, Process Development, Quality Assurance',
//       },
//     ],
//   },
// ]

// const responsibilityMapping = [
//   {
//     standard: 'ISO-19650-1',
//     responsible: 'Sarah Mitchell, Thomas Wright',
//     focus: 'Concepts, Principles, Framework',
//   },
//   {
//     standard: 'ISO-19650-2',
//     responsible: 'Emma Thompson, Rachel Green',
//     focus: 'Delivery Phase, Information Management',
//   },
//   {
//     standard: 'ISO-19650-3',
//     responsible: 'James Chen, Alex Kumar',
//     focus: 'Operational Phase, Asset Management',
//   },
//   {
//     standard: 'ISO-19650-4',
//     responsible: 'James Chen, Michael Rodriguez',
//     focus: 'Information Exchange, Data Structures',
//   },
//   {
//     standard: 'ISO-19650-5',
//     responsible: 'Thomas Wright, Alex Kumar',
//     focus: 'Security, Data Protection',
//   },
// ]

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

        {/* Our Responsibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-bim-deep-blue text-white rounded-lg p-8 md:p-12 shadow-lg mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6">
            Our Responsibility
          </h2>
          <p className="text-white/90 leading-relaxed mb-4">
            NirmanIQ exists to ensure information integrity across the built environment lifecycle. We are accountable
            for delivering accurate, coordinated, and accessible digital intelligence that enables better decision-making
            at every project phase.
          </p>
          <p className="text-white/90 leading-relaxed mb-4">
            Our responsibility extends beyond modeling and documentation. We are stewards of project information—ensuring
            it is structured, validated, and delivered according to established standards and client requirements. When
            coordination fails, budgets overrun, or operational data is unreliable, the root cause is often poor
            information management. That is the problem we solve.
          </p>
          <p className="text-white/90 leading-relaxed">
            We hold ourselves accountable to engineering rigor, not marketing claims. Our team&apos;s expertise is measured
            by successful project delivery, standards compliance, and the long-term value of the information systems
            we implement.
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
                  <Image src={leader.image} alt={leader.name} width={240} height={240} className="rounded-full" />
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
                  {leader.membership && (
                    <div>
                      <span className="font-semibold text-bim-charcoal">Membership:</span>
                      <p className="text-bim-charcoal/70 mt-1">{leader.membership}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Experts */}
        {/* <motion.div
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
        </motion.div> */}

        {/* Standards Responsibility Mapping */}
        {/* <motion.div
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
        </motion.div> */}

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
