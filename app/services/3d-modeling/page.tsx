import { Metadata } from 'next'
import ServiceDetail from '@/components/services/ServiceDetail'
import BIMVisualization from '@/components/3d/BIMVisualization'

export const metadata: Metadata = {
  title: '3D Modeling | Services',
  description: 'High-quality 3D building models with LOD 350 specifications for construction and coordination.',
}

export default function Modeling3DPage() {
  return (
    <ServiceDetail
      title="3D Modeling"
      description="Create detailed 3D building models with LOD 350 specifications. High-quality models ready for construction coordination and fabrication."
      problem="Many 3D models lack the detail needed for construction. Low-detail models cause coordination problems and don't help contractors build accurately."
      solution="We create detailed LOD 350 models with fabrication-level detail. These models show exactly how building components fit together, making construction smoother and more accurate."
      workflow={[
        {
          step: 'Model Setup',
          description: 'We set up the model structure, define LOD requirements, and establish modeling standards for your project.',
        },
        {
          step: 'Detailed Modeling',
          description: 'We create 3D models with LOD 350 detail, including exact dimensions, connections, and assembly information.',
        },
        {
          step: 'Material & Properties',
          description: 'We add material specifications, properties, and metadata to each component in the model.',
        },
        {
          step: 'Quality Check',
          description: 'We review models for accuracy, completeness, and compliance with LOD 350 standards.',
        },
        {
          step: 'Model Delivery',
          description: 'You receive complete, detailed models ready for coordination, fabrication, and construction.',
        },
      ]}
      deliverables={[
        'LOD 350 3D Models',
        'Detailed Component Models',
        'Material Specifications',
        'Assembly Information',
        'Model Documentation',
        'Quality Reports',
        'Coordination-Ready Models',
      ]}
      standards={[
        'LOD 350 Specification',
        'ISO-19650-2',
        'BS EN ISO 16739 (IFC)',
        'Industry Modeling Standards',
      ]}
      visual={<BIMVisualization />}
    />
  )
}
