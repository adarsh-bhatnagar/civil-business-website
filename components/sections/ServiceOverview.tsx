'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Building2, Calculator, Users, Box, AlertTriangle, Cpu, Camera, FileText, Wind, Wifi, Ruler, Radar, Layers } from 'lucide-react'
import { useLoading } from '@/contexts/LoadingContext'

const services = [
  {
    icon: Building2,
    title: 'Design & Modeling',
    description: 'Professional architectural and engineering design with detailed 3D building models. Create accurate plans that all teams can use.',
    href: '/services/design-modeling',
    color: 'bg-bim-teal',
    gradient: 'from-bim-teal to-bim-teal/80',
  },
  {
    icon: Calculator,
    title: 'Quantity Surveying',
    description: 'Accurate material quantities and cost estimation from your 3D models. Get precise budgets and avoid cost overruns.',
    href: '/services/quantity-surveying',
    color: 'bg-bim-orange',
    gradient: 'from-bim-orange to-bim-orange/80',
  },
  {
    icon: Users,
    title: 'Staff Services',
    description: 'Expert BIM professionals available for your projects. Get skilled team members when you need them.',
    href: '/services/staff-services',
    color: 'bg-bim-deep-blue',
    gradient: 'from-bim-deep-blue to-bim-deep-blue/80',
  },
  {
    icon: Box,
    title: '3D Modeling',
    description: 'High-quality 3D building models with LOD 350 specifications. Detailed models ready for construction and coordination.',
    href: '/services/3d-modeling',
    color: 'bg-bim-teal',
    gradient: 'from-bim-teal to-bim-teal/80',
  },
  {
    icon: AlertTriangle,
    title: 'Clash Detection',
    description: 'Automatically find conflicts between building systems before construction. Save time and money by fixing problems early.',
    href: '/services/clash-detection',
    color: 'bg-bim-orange',
    gradient: 'from-bim-orange to-bim-orange/80',
  },
  {
    icon: Cpu,
    title: 'Digital Twin',
    description: 'Live digital replicas of your building with real-time monitoring. Connect IoT sensors to track performance and optimize operations.',
    href: '/services/digital-twin',
    color: 'bg-bim-teal',
    gradient: 'from-bim-teal to-bim-teal/80',
  },
  {
    icon: Camera,
    title: 'Scan to BIM (LIDAR)',
    description: 'Convert laser scans of existing buildings into accurate 3D models. Perfect for renovation and retrofit projects.',
    href: '/services/scan-to-bim',
    color: 'bg-bim-deep-blue',
    gradient: 'from-bim-deep-blue to-bim-deep-blue/80',
  },
  {
    icon: FileText,
    title: 'CAD to BIM',
    description: 'Convert your existing 2D CAD drawings into intelligent 3D BIM models. Modernize your project documentation.',
    href: '/services/cad-to-bim',
    color: 'bg-bim-teal',
    gradient: 'from-bim-teal to-bim-teal/80',
  },
  {
    icon: Wind,
    title: 'Air Handling Units',
    description: 'Specialized MEP modeling for HVAC systems. Detailed air handling unit designs integrated with building models.',
    href: '/services/air-handling-units',
    color: 'bg-bim-orange',
    gradient: 'from-bim-orange to-bim-orange/80',
  },
  {
    icon: Wifi,
    title: 'Autodesk Tandem (IoT)',
    description: 'Connect your building with IoT sensors using Autodesk Tandem. Real-time monitoring and predictive maintenance.',
    href: '/services/autodesk-tandem',
    color: 'bg-bim-teal',
    gradient: 'from-bim-teal to-bim-teal/80',
  },
  {
    icon: Ruler,
    title: 'GFC Drawings',
    description: 'Good for Construction drawings - detailed, accurate construction documents ready for builders to use on site.',
    href: '/services/gfc-drawings',
    color: 'bg-bim-deep-blue',
    gradient: 'from-bim-deep-blue to-bim-deep-blue/80',
  },
  {
    icon: Radar,
    title: 'GPR Services',
    description: 'Ground Penetrating Radar surveys to locate utilities, rebar, and structures hidden underground before construction.',
    href: '/services/gpr-services',
    color: 'bg-bim-orange',
    gradient: 'from-bim-orange to-bim-orange/80',
  },
  {
    icon: Layers,
    title: 'LOD 350 Modeling',
    description: 'Level of Development 350 - detailed models with fabrication-level detail. Perfect for coordination and construction.',
    href: '/services/lod-350',
    color: 'bg-bim-teal',
    gradient: 'from-bim-teal to-bim-teal/80',
  },
]

export default function ServiceOverview() {
  const { startLoading } = useLoading()
  
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
            Our Services
          </h2>
          <p className="text-xl text-bim-charcoal/70 max-w-3xl mx-auto">
            Complete solutions for your building project, from initial design through daily operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-bim-concrete group relative overflow-hidden"
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                
                {/* Icon with animation */}
                <motion.div
                  className={`relative w-20 h-20 ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="text-white" size={36} />
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-white/30"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                  />
                </motion.div>
                
                <h3 className="text-2xl font-semibold text-bim-charcoal mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-bim-charcoal/70 mb-6 leading-relaxed relative z-10">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  onClick={() => startLoading()}
                  className="inline-flex items-center text-bim-teal font-semibold hover:text-bim-teal/80 transition-colors group/link relative z-10"
                >
                  Learn More
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.1 }}
                  >
                    <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={18} />
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            onClick={() => startLoading()}
            className="inline-flex items-center text-bim-deep-blue font-semibold hover:text-bim-teal transition-colors"
          >
            View All Services
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
