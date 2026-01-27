import { Metadata } from 'next'
import Image from 'next/image'
import ServiceDetail from '@/components/services/ServiceDetail'
import ahuImg from '@/app/assets/air_handling_unit.jpg'

export const metadata: Metadata = {
  title: 'MEP & HVAC BIM Modeling | NirmaanIQ',
  description: 'Detailed mechanical, electrical, and plumbing system models including HVAC and air handling units.',
}

export default function MEPHVACModelingPage() {
  return (
    <ServiceDetail
      title="MEP & HVAC BIM Modeling"
      description="Detailed modeling of building systems to ensure integrated performance and constructability. We specialize in complex mechanical systems and air handling units."
      problem="Mechanical and plumbing systems are often the most complex to coordinate, leading to significant site rework if spatial requirements aren't accurately modeled."
      solution="We develop high-fidelity MEP models that account for fabrication tolerances and maintenance clearances. By integrating equipment like Air Handling Units (AHUs) with ductwork and piping, we ensure system performance and installation ease."
      workflow={[
        {
          step: 'System Schema Analysis',
          description: 'We analyze 2D system diagrams and specifications to understand the functional requirements of the mechanical, electrical, and plumbing systems.',
        },
        {
          step: 'Equipment & AHU Modeling',
          description: 'We create accurate 3D representations of AHUs, pumps, switchgear, and other equipment, accounting for real-world dimensions and service zones.',
        },
        {
          step: 'Distribution Modeling',
          description: 'Our specialists model ductwork, piping, and cable trays, ensuring logical routing and compliance with engineering design.',
        },
        {
          step: 'Integration & Coordination',
          description: 'We coordinate MEP services with structural and architectural elements, resolving route conflicts before they impact construction.',
        },
        {
          step: 'Fabrication Extraction',
          description: 'Coordinated models are used to extract fabrication-ready drawings and spool sheets, streamlining the supply chain.',
        },
      ]}
      deliverables={[
        'Fully Coordinated MEP Models',
        'Detailed HVAC & AHU Layouts',
        'Piping & Plumbing 3D Models',
        'Electrical Containment Models',
        'Equipment Service Zone Layouts',
        'MEP Coordination Reports',
      ]}
      standards={[
        'ASHRAE & SMACNA Standards',
        'LOD 350-400 Fabrication Level',
        'ISO-19650 Information Management',
        'Local Building Codes Compliance',
      ]}
      visual={
        <div className="relative w-full h-full min-h-[400px]">
          <Image
            src={ahuImg}
            alt="Detailed MEP and AHU Building Intelligence"
            fill
            className="object-cover"
          />
        </div>
      }
    />
  )
}
