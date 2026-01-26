'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Building2, AlertTriangle, Camera, FileText, Wind, Wifi, Ruler, Radar, Layers, Box } from 'lucide-react'
import { useLoading } from '@/contexts/LoadingContext'

const services = [
  {
    icon: Building2,
    title: 'BIM Design & 3D Modeling',
    description: 'Accurate building models that enable coordination across disciplines. Reduce rework by identifying design conflicts early.',
    href: '/services/design-modeling',
    color: 'bg-bim-teal',
    gradient: 'from-bim-teal to-bim-teal/80',
  },
  {
    icon: AlertTriangle,
    title: 'Clash Detection & Coordination',
    description: 'Identify spatial conflicts between building systems before construction. Prevent costly on-site rework and schedule delays.',
    href: '/services/clash-detection',
    color: 'bg-bim-orange',
    gradient: 'from-bim-orange to-bim-orange/80',
  },
  {
    icon: Camera,
    title: 'Scan to BIM (LiDAR)',
    description: 'Convert existing conditions into accurate as-built models using laser scanning. Essential for renovation and retrofit projects.',
    href: '/services/scan-to-bim',
    color: 'bg-bim-deep-blue',
    gradient: 'from-bim-deep-blue to-bim-deep-blue/80',
  },
  {
    icon: FileText,
    title: 'CAD to BIM Conversion',
    description: 'Transform legacy 2D drawings into intelligent 3D models. Modernize project documentation and enable BIM workflows.',
    href: '/services/cad-to-bim',
    color: 'bg-bim-teal',
    gradient: 'from-bim-teal to-bim-teal/80',
  },
  {
    icon: Wind,
    title: 'MEP & HVAC BIM Modeling',
    description: 'Detailed MEP system models including HVAC and air handling units. Ensure constructability and system integration.',
    href: '/services/mep-hvac-modeling',
    color: 'bg-bim-orange',
    gradient: 'from-bim-orange to-bim-orange/80',
  },
  {
    icon: Wifi,
    title: 'Digital Twin & IoT Integration',
    description: 'Connect physical assets to real-time data for operational intelligence. Integrate IoT sensors for predictive maintenance.',
    href: '/services/digital-twin-iot',
    color: 'bg-bim-teal',
    gradient: 'from-bim-teal to-bim-teal/80',
  },
  {
    icon: Ruler,
    title: 'Construction Issue Drawings (GFC / IFC)',
    description: 'Coordinated construction documentation ready for fabrication. GFC and IFC drawings that minimize field conflicts.',
    href: '/services/construction-drawings',
    color: 'bg-bim-deep-blue',
    gradient: 'from-bim-deep-blue to-bim-deep-blue/80',
  },
  {
    icon: Radar,
    title: 'GPR & Subsurface Investigation',
    description: 'Ground Penetrating Radar surveys to locate hidden utilities and structures. Prevent costly damage before you dig.',
    href: '/services/gpr-services',
    color: 'bg-bim-orange',
    gradient: 'from-bim-orange to-bim-orange/80',
  },
  {
    icon: Layers,
    title: 'LOD-Based BIM Modeling (Up to LOD 650)',
    description: 'Level of Development modeling from conceptual through as-built. Match model detail to project phase requirements.',
    href: '/services/lod-modeling',
    color: 'bg-bim-teal',
    gradient: 'from-bim-teal to-bim-teal/80',
  },
  {
    icon: Box,
    title: 'Scan to GIS',
    description: 'Integrate reality capture with Geographic Information Systems. Bridge building-scale BIM with site-scale GIS.',
    href: '/services/scan-to-gis',
    color: 'bg-bim-deep-blue',
    gradient: 'from-bim-deep-blue to-bim-deep-blue/80',
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
            Comprehensive solutions across design, construction, and operations. Reliable digital intelligence for the entire asset lifecycle.
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
