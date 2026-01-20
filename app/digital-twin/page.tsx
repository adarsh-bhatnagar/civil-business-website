'use client'

import { motion } from 'framer-motion'
import DigitalTwinVisualization from '@/components/3d/DigitalTwinVisualization'
import Button from '@/components/ui/Button'
import { Cpu, Database, BarChart3, Shield, Zap, Link2 } from 'lucide-react'

const features = [
  {
    icon: Database,
    title: 'Live Building Data',
    description: 'Your digital model stays updated with real information from your actual building as it operates.',
  },
  {
    icon: Cpu,
    title: 'Smart Sensors',
    description: 'We connect sensors throughout your building to monitor temperature, energy use, equipment status, and more.',
  },
  {
    icon: BarChart3,
    title: 'Predict Problems Early',
    description: 'Our system learns patterns and warns you before equipment fails, helping you fix issues before they become expensive.',
  },
  {
    icon: Shield,
    title: 'Complete Building History',
    description: 'All information about your building—from design to construction to daily operations—stays organized in one place.',
  },
]

const lifecycleStages = [
  {
    stage: 'Design & Planning',
    description: 'We start building your digital twin during the design phase, capturing all important building information.',
  },
  {
    stage: 'Construction',
    description: 'As construction progresses, we update the digital twin with actual building details and equipment information.',
  },
  {
    stage: 'Commissioning',
    description: 'We test all systems and verify everything works correctly before you move in.',
  },
  {
    stage: 'Operations',
    description: 'Once operating, sensors feed live data to your digital twin, helping you monitor and optimize performance.',
  },
  {
    stage: 'Maintenance & Updates',
    description: 'Historical data helps plan maintenance and renovations, extending your building\'s life and value.',
  },
]

export default function DigitalTwinPage() {
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
            Digital Twin Solutions
          </h1>
          <p className="text-xl text-bim-charcoal/70 max-w-3xl mx-auto">
            A digital copy of your building that updates in real-time. Connect sensors to monitor everything 
            from temperature to energy use, helping you maintain and operate your building more efficiently.
          </p>
        </motion.div>

        {/* Interactive Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20 h-[600px] rounded-lg overflow-hidden bg-white shadow-xl border border-bim-teal/20"
        >
          <DigitalTwinVisualization />
        </motion.div>

        {/* IoT Sensor Overlay Concept */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg p-8 shadow-sm mb-16"
        >
          <div className="flex items-center mb-6">
            <Zap className="text-bim-teal mr-3" size={32} />
            <h2 className="text-3xl font-semibold text-bim-charcoal">
              IoT Sensor Integration
            </h2>
          </div>
          <p className="text-bim-charcoal/70 mb-6 leading-relaxed">
            We install smart sensors throughout your building that continuously monitor:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Temperature, humidity, and air quality',
              'How much energy your building uses',
              'Whether equipment is working properly',
              'How spaces are being used',
              'Building structure health',
              'Security and access systems',
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <span className="w-2 h-2 bg-bim-teal rounded-full mr-3 mt-2 flex-shrink-0" />
                <span className="text-bim-charcoal/70">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-bim-teal/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-bim-teal" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-bim-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-bim-charcoal/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Asset Lifecycle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-bim-deep-blue text-white rounded-lg p-8 shadow-lg mb-16"
        >
          <h2 className="text-3xl font-semibold mb-8">
            Asset Lifecycle Management
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

        {/* Autodesk Tandem Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg p-8 shadow-sm"
        >
          <div className="flex items-center mb-6">
            <Link2 className="text-bim-teal mr-3" size={32} />
            <h2 className="text-3xl font-semibold text-bim-charcoal">
              Autodesk Tandem Integration
            </h2>
          </div>
          <p className="text-bim-charcoal/70 mb-6 leading-relaxed">
            We use Autodesk Tandem to create digital twins that connect design, construction, and operations. 
            Here is what we do:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-bim-charcoal mb-3">Data Integration</h3>
              <ul className="space-y-2 text-bim-charcoal/70">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-bim-teal rounded-full mr-2 mt-2 flex-shrink-0" />
                  Seamless import from Revit, Navisworks, and other BIM tools
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-bim-teal rounded-full mr-2 mt-2 flex-shrink-0" />
                  Integration with construction management systems
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-bim-teal rounded-full mr-2 mt-2 flex-shrink-0" />
                  Connection to building management systems (BMS)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-bim-charcoal mb-3">Operational Benefits</h3>
              <ul className="space-y-2 text-bim-charcoal/70">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-bim-teal rounded-full mr-2 mt-2 flex-shrink-0" />
                  Real-time asset performance monitoring
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-bim-teal rounded-full mr-2 mt-2 flex-shrink-0" />
                  Predictive maintenance scheduling
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-bim-teal rounded-full mr-2 mt-2 flex-shrink-0" />
                  Energy optimization and sustainability tracking
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
            Discuss Your Digital Twin Project
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
