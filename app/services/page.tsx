import { Metadata } from 'next'
import Link from 'next/link'
import { Building2, Calculator, Users, Box, AlertTriangle, Cpu, Camera, FileText, Wind, Wifi, Ruler, Radar, Layers, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services | BIM & Digital Twin Consultancy',
  description: 'Comprehensive BIM and Digital Twin services including design, modeling, quantity surveying, clash detection, and more.',
}

const services = [
  {
    icon: Building2,
    title: 'Design & Modeling',
    description: 'Professional architectural and engineering design with detailed 3D building models.',
    href: '/services/design-modeling',
    features: ['Architectural Design', 'Engineering Design', '3D Building Models', 'Design Coordination'],
    color: 'bg-bim-teal',
  },
  {
    icon: Calculator,
    title: 'Quantity Surveying',
    description: 'Accurate material quantities and cost estimation from your 3D models.',
    href: '/services/quantity-surveying',
    features: ['Material Takeoff', 'Cost Estimation', 'Budget Planning', 'Quantity Reports'],
    color: 'bg-bim-orange',
  },
  {
    icon: Users,
    title: 'Staff Services',
    description: 'Expert BIM professionals available for your projects.',
    href: '/services/staff-services',
    features: ['BIM Modelers', 'Coordinators', 'Project Managers', 'Technical Support'],
    color: 'bg-bim-deep-blue',
  },
  {
    icon: Box,
    title: '3D Modeling',
    description: 'High-quality 3D building models with LOD 350 specifications.',
    href: '/services/3d-modeling',
    features: ['LOD 350 Models', 'Detailed Geometry', 'Material Specifications', 'Model Coordination'],
    color: 'bg-bim-teal',
  },
  {
    icon: AlertTriangle,
    title: 'Clash Detection',
    description: 'Automatically find conflicts between building systems before construction.',
    href: '/services/clash-detection',
    features: ['Automated Detection', 'Conflict Reports', 'Resolution Planning', 'Coordination'],
    color: 'bg-bim-orange',
  },
  {
    icon: Cpu,
    title: 'Digital Twin',
    description: 'Live digital replicas of your building with real-time monitoring.',
    href: '/services/digital-twin',
    features: ['Real-Time Monitoring', 'IoT Integration', 'Performance Analytics', 'Predictive Maintenance'],
    color: 'bg-bim-teal',
  },
  {
    icon: Camera,
    title: 'Scan to BIM (LIDAR)',
    description: 'Convert laser scans of existing buildings into accurate 3D models.',
    href: '/services/scan-to-bim',
    features: ['LIDAR Scanning', 'Point Cloud Processing', 'As-Built Models', 'Renovation Planning'],
    color: 'bg-bim-deep-blue',
  },
  {
    icon: FileText,
    title: 'CAD to BIM',
    description: 'Convert your existing 2D CAD drawings into intelligent 3D BIM models.',
    href: '/services/cad-to-bim',
    features: ['2D to 3D Conversion', 'Drawing Interpretation', 'Model Creation', 'Data Enrichment'],
    color: 'bg-bim-teal',
  },
  {
    icon: Wind,
    title: 'Air Handling Units',
    description: 'Specialized MEP modeling for HVAC systems and air handling units.',
    href: '/services/air-handling-units',
    features: ['HVAC Modeling', 'AHU Design', 'Ductwork Modeling', 'System Integration'],
    color: 'bg-bim-orange',
  },
  {
    icon: Wifi,
    title: 'Autodesk Tandem (IoT)',
    description: 'Connect your building with IoT sensors using Autodesk Tandem platform.',
    href: '/services/autodesk-tandem',
    features: ['IoT Integration', 'Sensor Networks', 'Real-Time Data', 'Platform Setup'],
    color: 'bg-bim-teal',
  },
  {
    icon: Ruler,
    title: 'GFC Drawings',
    description: 'Good for Construction drawings - detailed construction documents.',
    href: '/services/gfc-drawings',
    features: ['Construction Drawings', 'Detail Sheets', 'Shop Drawings', 'Installation Guides'],
    color: 'bg-bim-deep-blue',
  },
  {
    icon: Radar,
    title: 'GPR Services',
    description: 'Ground Penetrating Radar surveys to locate utilities and structures.',
    href: '/services/gpr-services',
    features: ['Utility Detection', 'Rebar Location', 'Concrete Scanning', 'Survey Reports'],
    color: 'bg-bim-orange',
  },
  {
    icon: Layers,
    title: 'LOD 350 Modeling',
    description: 'Level of Development 350 - detailed models with fabrication-level detail.',
    href: '/services/lod-350',
    features: ['Fabrication Detail', 'Assembly Information', 'Coordination Ready', 'Construction Ready'],
    color: 'bg-bim-teal',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-bim-concrete min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-bim-charcoal mb-6">
            Our Services
          </h1>
          <p className="text-xl text-bim-charcoal/70 max-w-3xl mx-auto">
            Complete BIM and Digital Twin solutions for your construction project. 
            From design to operations, we have got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-bim-concrete group"
              >
                <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h2 className="text-2xl font-semibold text-bim-charcoal mb-4">
                  {service.title}
                </h2>
                <p className="text-bim-charcoal/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-bim-charcoal/70">
                      <span className={`w-2 h-2 ${service.color} rounded-full mr-3`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-bim-teal font-semibold hover:text-bim-teal/80 transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={18} />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
