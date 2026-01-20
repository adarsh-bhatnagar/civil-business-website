import { Metadata } from 'next'
import ServiceDetail from '@/components/services/ServiceDetail'
import BIMVisualization from '@/components/3d/BIMVisualization'

export const metadata: Metadata = {
  title: 'Design & Modeling | Services',
  description: 'Professional architectural and engineering design with detailed 3D building models.',
}

export default function DesignModelingPage() {
  return (
    <ServiceDetail
      title="Design & Modeling"
      description="Professional architectural and engineering design services. We create detailed 3D building models that all teams can use together."
      problem="Design teams often work separately, creating drawings that don't match up. This causes expensive problems during construction when things don't fit together properly."
      solution="We create one shared 3D model that everyone uses. Architects, engineers, and contractors all work on the same model, so problems are caught early and fixed before construction starts."
      workflow={[
        {
          step: 'Project Planning',
          description: 'We meet with you to understand your needs, set up the project structure, and plan how teams will work together.',
        },
        {
          step: 'Architectural Design',
          description: 'Our architects create the building design in 3D, including layouts, facades, and interior spaces.',
        },
        {
          step: 'Engineering Design',
          description: 'Engineers add structural, MEP, and other systems to the model, ensuring everything works together.',
        },
        {
          step: 'Model Coordination',
          description: 'We combine all designs into one coordinated model and check for conflicts between different systems.',
        },
        {
          step: 'Design Review & Approval',
          description: 'You review the 3D model, make changes, and approve the final design before construction begins.',
        },
      ]}
      deliverables={[
        'Complete 3D Building Models',
        'Architectural Drawings',
        'Engineering Drawings',
        'Coordination Reports',
        'Design Documentation',
        'Material Specifications',
        'Construction-Ready Models',
      ]}
      standards={[
        'ISO-19650-1 & 2',
        'LOD 300-350',
        'BS EN ISO 16739 (IFC)',
        'Industry Best Practices',
      ]}
      visual={<BIMVisualization />}
    />
  )
}
