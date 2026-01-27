import { Metadata } from 'next'
import Link from 'next/link'
import { Building2, Calculator, Users, Box, AlertTriangle, Cpu, Camera, FileText, Wind, Wifi, Ruler, Radar, Layers, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services | NirmaanIQ - Built-Environment Intelligence',
  description: 'Comprehensive BIM and Digital Twin services including design, modeling, clash detection, reality capture, and digital twin integration.',
}

const services = [
  {
    icon: Building2,
    title: 'BIM Design & 3D Modeling',
    description: 'Accurate building models that enable coordination across disciplines. Reduce rework by identifying design conflicts early and ensuring all teams work from a single source of truth.',
    href: '/services/design-modeling',
    features: ['Multi-discipline Coordination', 'LOD-Specific Modeling', 'Design Intent Capture', 'Federated Model Management'],
    color: 'bg-bim-teal',
  },
  {
    icon: AlertTriangle,
    title: 'Clash Detection & Coordination',
    description: 'Identify spatial conflicts between building systems before construction begins. Prevent costly on-site rework and schedule delays through systematic clash resolution.',
    href: '/services/clash-detection',
    features: ['Automated Clash Detection', 'Multi-discipline Coordination', 'Resolution Tracking', 'Coordination Meetings Support'],
    color: 'bg-bim-orange',
  },
  {
    icon: Camera,
    title: 'Scan to BIM (LiDAR)',
    description: 'Convert existing conditions into accurate as-built models using laser scanning. Essential for renovation, retrofit, and facility management projects.',
    href: '/services/scan-to-bim',
    features: ['Point Cloud Processing', 'As-Built Documentation', 'Existing Conditions Analysis', 'Renovation Planning Support'],
    color: 'bg-bim-deep-blue',
  },
  {
    icon: FileText,
    title: 'CAD to BIM Conversion',
    description: 'Transform legacy 2D drawings into intelligent 3D models. Modernize project documentation and enable BIM workflows for existing projects.',
    href: '/services/cad-to-bim',
    features: ['2D to 3D Conversion', 'Data Enrichment', 'Model Intelligence', 'Legacy Documentation Upgrade'],
    color: 'bg-bim-teal',
  },
  {
    icon: Wind,
    title: 'MEP & HVAC BIM Modeling',
    description: 'Detailed mechanical, electrical, and plumbing system models including HVAC and air handling units. Ensure constructability and system integration across all building services.',
    href: '/services/mep-hvac-modeling',
    features: ['MEP Systems Modeling', 'HVAC & AHU Design', 'System Coordination', 'Fabrication-Ready Models'],
    color: 'bg-bim-orange',
  },
  {
    icon: Wifi,
    title: 'Digital Twin & IoT Integration',
    description: 'Connect physical assets to real-time data streams for operational intelligence. Integrate IoT sensors with building models using platforms like Autodesk Tandem for predictive maintenance and performance optimization.',
    href: '/services/digital-twin-iot',
    features: ['IoT Sensor Integration', 'Real-Time Monitoring', 'Performance Analytics', 'Predictive Maintenance'],
    color: 'bg-bim-teal',
  },
  {
    icon: Ruler,
    title: 'Construction Issue Drawings (GFC / IFC)',
    description: 'Coordinated construction documentation ready for fabrication and installation. Good for Construction (GFC) and Issued for Construction (IFC) drawings that minimize field conflicts.',
    href: '/services/construction-drawings',
    features: ['Coordinated Shop Drawings', 'Fabrication Details', 'Installation Sequences', 'Field-Ready Documentation'],
    color: 'bg-bim-deep-blue',
  },
  {
    icon: Radar,
    title: 'GPR & Subsurface Investigation',
    description: 'Ground Penetrating Radar surveys to locate hidden utilities, rebar, and subsurface structures. Prevent costly damage and delays by knowing what lies beneath before you dig.',
    href: '/services/gpr-services',
    features: ['Utility Detection', 'Rebar Mapping', 'Concrete Scanning', 'Subsurface Analysis'],
    color: 'bg-bim-orange',
  },
  {
    icon: Layers,
    title: 'LOD-Based BIM Modeling (Up to LOD 500)',
    description: 'Level of Development modeling from conceptual (LOD 100) through as-built and operational (LOD 500). Match model detail to project phase requirements and information needs.',
    href: '/services/lod-modeling',
    features: ['LOD 100-650 Modeling', 'Phase-Appropriate Detail', 'As-Built Documentation', 'Facility Management Ready'],
    color: 'bg-bim-teal',
  },
  {
    icon: Box,
    title: 'Scan to GIS',
    description: 'Integrate reality capture data with Geographic Information Systems for infrastructure and site planning. Bridge building-scale BIM with site-scale GIS for comprehensive project intelligence.',
    href: '/services/scan-to-gis',
    features: ['GIS Integration', 'Site Context Modeling', 'Infrastructure Planning', 'Geospatial Analysis'],
    color: 'bg-bim-deep-blue',
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
            Comprehensive built-environment intelligence services across design, construction, and operations.
            From initial concept through facility management, we ensure accurate information flows throughout the asset lifecycle.
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
