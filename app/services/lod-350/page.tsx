import { Metadata } from 'next'
import ServiceDetail from '@/components/services/ServiceDetail'
import BIMVisualization from '@/components/3d/BIMVisualization'

export const metadata: Metadata = {
  title: 'LOD 350 Modeling | Services',
  description: 'Level of Development 350 - detailed models with fabrication-level detail for construction.',
}

export default function LOD350Page() {
  return (
    <ServiceDetail
      title="LOD 350 Modeling"
      description="Create detailed BIM models with Level of Development 350 specifications. Fabrication-ready models with exact dimensions and assembly information."
      problem="Many BIM models lack the detail needed for construction. Low LOD models don't show how components connect, causing coordination problems and construction delays."
      solution="We create LOD 350 models with fabrication-level detail. These models show exact dimensions, connections, and assembly methods, making construction faster and more accurate."
      workflow={[
        {
          step: 'LOD Requirements',
          description: 'We define LOD 350 requirements for your project, specifying what detail is needed for each component.',
        },
        {
          step: 'Detailed Modeling',
          description: 'We create models with LOD 350 detail, including exact dimensions, connections, and fabrication information.',
        },
        {
          step: 'Assembly Information',
          description: 'We add assembly details showing how components connect and are installed.',
        },
        {
          step: 'Quality Verification',
          description: 'We verify models meet LOD 350 standards and contain all required information.',
        },
        {
          step: 'Model Delivery',
          description: 'You receive fabrication-ready models that contractors can use directly for construction.',
        },
      ]}
      deliverables={[
        'LOD 350 BIM Models',
        'Fabrication Details',
        'Assembly Instructions',
        'Connection Details',
        'Component Specifications',
        'Quality Reports',
        'Construction-Ready Models',
      ]}
      standards={[
        'LOD 350 Specification',
        'ISO-19650-2',
        'BS EN ISO 16739 (IFC)',
        'Fabrication Standards',
      ]}
      visual={<BIMVisualization />}
    />
  )
}
