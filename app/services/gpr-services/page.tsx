import { Metadata } from 'next'
import ServiceDetail from '@/components/services/ServiceDetail'

export const metadata: Metadata = {
  title: 'GPR Services | Services',
  description: 'Ground Penetrating Radar surveys to locate utilities and structures hidden underground.',
}

export default function GPRServicesPage() {
  return (
    <ServiceDetail
      title="GPR Services (Ground Penetrating Radar)"
      description="Use Ground Penetrating Radar to see what's hidden underground. Locate utilities, rebar, and structures before you dig."
      problem="Digging without knowing what's underground is risky. Hitting utilities or rebar causes expensive damage, delays, and safety hazards."
      solution="We use Ground Penetrating Radar to scan underground and create maps showing exactly where utilities, rebar, and structures are located. Dig safely and avoid costly surprises."
      workflow={[
        {
          step: 'Site Assessment',
          description: 'We visit your site, understand your needs, and plan the GPR survey area.',
        },
        {
          step: 'GPR Scanning',
          description: 'We use professional GPR equipment to scan underground, detecting utilities, rebar, and structures.',
        },
        {
          step: 'Data Processing',
          description: 'We process scan data, interpret results, and identify what we found underground.',
        },
        {
          step: 'Mapping & Reporting',
          description: 'We create detailed maps showing locations of utilities, rebar, and structures with depth information.',
        },
        {
          step: 'Integration',
          description: 'We integrate GPR findings with your BIM models so designers can plan around existing infrastructure.',
        },
      ]}
      deliverables={[
        'GPR Survey Reports',
        'Utility Location Maps',
        'Rebar Detection Maps',
        'Depth Information',
        'BIM Integration',
        'Risk Assessment',
        'Recommendations',
      ]}
      standards={[
        'ASTM D6432',
        'Industry GPR Standards',
        'Utility Detection Standards',
        'Safety Guidelines',
      ]}
    />
  )
}
