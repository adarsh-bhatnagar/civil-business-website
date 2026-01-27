import { Metadata } from 'next'
import Image from 'next/image'
import ServiceDetail from '@/components/services/ServiceDetail'
import designModelingImg from '@/app/assets/bim_designer.jpg'

export const metadata: Metadata = {
  title: 'BIM Design & 3D Modeling | NirmaanIQ',
  description: 'Professional architectural and engineering design with detailed 3D building models.',
}

export default function DesignModelingPage() {
  return (
    <ServiceDetail
      title="BIM Design & 3D Modeling"
      description="Accurate building models that enable coordination across disciplines. We create digital intelligence that serves as a single source of truth for your entire project."
      problem="Design silos often lead to inconsistent documentation and uncoordinated systems, resulting in expensive field changes and construction delays."
      solution="We develop federated BIM models that integrate architectural, structural, and MEP systems. This coordinated approach ensures design intent is maintained and constructability is verified before site mobilization."
      workflow={[
        {
          step: 'Requirement Alignment',
          description: 'We align with project stakeholders to define Information Requirements (EIR/AIR) and establish the BIM execution framework.',
        },
        {
          step: 'Multi-discipline Modeling',
          description: 'Our specialists develop high-fidelity models for architecture, structure, and building systems in a unified digital environment.',
        },
        {
          step: 'Information Integration',
          description: 'We embed critical metadata into model elements, ensuring data integrity for downstream construction and operational use.',
        },
        {
          step: 'Coordinated Review',
          description: 'Systematic review cycles identify and resolve spatial and technical conflicts between disciplines during the design phase.',
        },
        {
          step: 'Validated Deliverables',
          description: 'Final models and drawings are validated against standards to ensure they are ready for construction issue.',
        },
      ]}
      deliverables={[
        'Federated 3D Building Models',
        'Coordinated Design Documentation',
        'Discipline-Specific BIM Models',
        'Design Coordination Reports',
        'Information Management Templates',
        'Validated 2D Extraction Sets',
      ]}
      standards={[
        'ISO-19650-1 & 2 Information Management',
        'Industry Foundation Classes (IFC) Compliance',
        'Project-Specific LOD Requirements',
        'Engineering Discipline Standards',
      ]}
      visual={
        <div className="relative w-full h-full min-h-[400px]">
          <Image
            src={designModelingImg}
            alt="BIM Design and Modeling Intelligence"
            fill
            className="object-cover"
            priority
          />
        </div>
      }
    />
  )
}
