import { Metadata } from 'next'
import ServiceDetail from '@/components/services/ServiceDetail'
import BIMVisualization from '@/components/3d/BIMVisualization'

export const metadata: Metadata = {
  title: 'BIM Design & Engineering | Services',
  description: 'Comprehensive BIM modeling, coordination, and design optimization for complex construction projects.',
}

export default function BIMDesignEngineeringPage() {
  return (
    <ServiceDetail
      title="BIM Design & Engineering"
      description="We create detailed 3D digital models of your building project. All teams work together on one shared model, catching problems before construction starts."
      problem="Usually, architects, engineers, and contractors work separately. They create their own drawings that don't match up. This causes expensive problems during construction when things don't fit together."
      solution="We create one shared 3D model that everyone uses. All teams can see the whole project and spot conflicts early. This prevents costly mistakes and keeps your project on schedule."
      workflow={[
        {
          step: 'Project Setup',
          description: 'We set up the project structure, decide what information we need, and establish how teams will work together.',
        },
        {
          step: 'Create 3D Models',
          description: 'Each team (architects, engineers, etc.) creates their part of the building in 3D using our shared standards.',
        },
        {
          step: 'Combine & Check',
          description: 'We combine all the models into one and automatically check for conflicts. We fix problems before construction starts.',
        },
        {
          step: 'Optimize Design',
          description: 'We analyze the design for energy efficiency, cost, and buildability to make sure it works well.',
        },
        {
          step: 'Deliver Models',
          description: 'We provide you with complete, checked 3D models that your construction team can use on site.',
        },
      ]}
      deliverables={[
        'Complete 3D Building Models',
        'Conflict Detection Reports',
        'Project Work Plan',
        'Coordination Reports',
        'Design Analysis & Recommendations',
        'Information Delivery Plans',
        'Final As-Built Documentation',
      ]}
      standards={[
        'ISO-19650-1 & 2',
        'BS EN ISO 16739 (IFC)',
        'BS EN ISO 29481 (IDM)',
        'PAS 1192 Series',
        'AIA E202',
      ]}
      visual={<BIMVisualization />}
    />
  )
}
