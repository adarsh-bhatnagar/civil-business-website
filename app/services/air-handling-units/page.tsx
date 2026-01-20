import { Metadata } from 'next'
import ServiceDetail from '@/components/services/ServiceDetail'

export const metadata: Metadata = {
  title: 'Air Handling Units | Services',
  description: 'Specialized MEP modeling for HVAC systems and air handling units.',
}

export default function AirHandlingUnitsPage() {
  return (
    <ServiceDetail
      title="Air Handling Units (AHU)"
      description="Expert modeling of HVAC systems and air handling units. Detailed MEP models integrated with your building design."
      problem="HVAC systems are complex and need careful coordination with structure and architecture. Poor modeling leads to installation problems and performance issues."
      solution="We specialize in detailed AHU and HVAC modeling. We create accurate models that show exactly how systems fit in your building, ensuring smooth installation and optimal performance."
      workflow={[
        {
          step: 'System Design Review',
          description: 'We review HVAC design requirements, equipment specifications, and system layouts.',
        },
        {
          step: 'AHU Modeling',
          description: 'We create detailed 3D models of air handling units, including all components, connections, and clearances.',
        },
        {
          step: 'Ductwork Modeling',
          description: 'We model complete ductwork systems, showing routing, sizes, and connections throughout the building.',
        },
        {
          step: 'Coordination',
          description: 'We coordinate HVAC models with structure and architecture to ensure everything fits properly.',
        },
        {
          step: 'Documentation',
          description: 'We create detailed drawings and specifications for installation and maintenance.',
        },
      ]}
      deliverables={[
        'AHU 3D Models',
        'Ductwork Models',
        'HVAC System Models',
        'Coordination Models',
        'Installation Drawings',
        'Equipment Schedules',
        'Maintenance Documentation',
      ]}
      standards={[
        'ASHRAE Standards',
        'ISO-19650-2',
        'MEP Modeling Standards',
        'LOD 350 Specifications',
      ]}
    />
  )
}
