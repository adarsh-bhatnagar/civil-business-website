import { Metadata } from 'next'
import ServiceDetail from '@/components/services/ServiceDetail'

export const metadata: Metadata = {
  title: 'Construction Intelligence | Services',
  description: '4D/5D scheduling, clash detection, and construction sequencing for optimized project delivery.',
}

export default function ConstructionIntelligencePage() {
  return (
    <ServiceDetail
      title="Construction Intelligence"
      description="Plan your construction schedule visually, find problems before they happen, and track costs accurately."
      problem="Most construction projects run late and go over budget because schedules don't account for how things actually fit together. Teams discover conflicts too late, and cost estimates are often wrong."
      solution="We combine your 3D building model with your construction schedule and costs. You can see exactly when and how everything gets built, spot conflicts early, and track progress in real-time."
      workflow={[
        {
          step: 'Create Visual Schedule',
          description: 'We link your 3D building model with your construction schedule so you can see the project build over time.',
        },
        {
          step: 'Find Conflicts Early',
          description: 'Our system automatically finds where different building parts will clash, so you can fix problems before construction starts.',
        },
        {
          step: 'Optimize Build Sequence',
          description: 'We help you plan the best order to build things, considering site space, materials delivery, and worker availability.',
        },
        {
          step: 'Calculate Costs Accurately',
          description: 'We automatically count materials and quantities from the 3D model and link them to costs for accurate budgeting.',
        },
        {
          step: 'Track Progress',
          description: 'Monitor how construction is progressing compared to your schedule and catch delays early.',
        },
      ]}
      deliverables={[
        'Visual Construction Schedule',
        'Conflict Detection Reports',
        'Construction Method Plans',
        'Cost Models & Budgets',
        'Material Quantity Reports',
        'Progress Tracking Dashboards',
        'Coordinated Construction Models',
      ]}
      standards={[
        'ISO-19650-2',
        'BS EN ISO 16739 (IFC)',
        'Construction Industry Standards',
        'Project-specific Requirements',
      ]}
    />
  )
}
