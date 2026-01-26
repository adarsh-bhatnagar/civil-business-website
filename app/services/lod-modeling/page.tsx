import { Metadata } from 'next'
import Image from 'next/image'
import ServiceDetail from '@/components/services/ServiceDetail'
import lodImg from '@/app/assets/design_modeling.jpg'

export const metadata: Metadata = {
  title: 'LOD-Based BIM Modeling (Up to LOD 500) | NirmaanIQ',
  description: 'Level of Development modeling from conceptual through as-built and operational phases.',
}

export default function LODModelingPage() {
  return (
    <ServiceDetail
      title="LOD-Based BIM Modeling (Up to LOD 500)"
      description="Tailored digital models that match your project's maturity and data needs. From conceptual design (LOD 100) to operational asset intelligence (LOD 500)."
      problem="Inconsistent levels of detail in models lead to confusion, incorrect quantity takeoffs, and a failure to meet the information needs of downstream stakeholders."
      solution="We implement structured LOD (Level of Development) and LOI (Level of Information) frameworks. This ensures that every model element contains the geometric detail and technical data required for its specific purpose, whether for cost estimation, coordination, or FM integration."
      workflow={[
        {
          step: 'Information Requirements Analysis',
          description: 'We define the required LOD for each asset category based on the project phase and the intended use of the model.',
        },
        {
          step: 'Geometric Detail Development',
          description: 'Our specialists model elements to the agreed-upon LOD, ensuring accurate physical representation for coordination and visualization.',
        },
        {
          step: 'Data Enrichment (LOI)',
          description: 'We embed technical specifications, maintenance schedules, and warranty information into model elements as required.',
        },
        {
          step: 'Validation & Verification',
          description: 'Continuous auditing ensures that the models strictly adhere to the defined LOD/LOI standards at each delivery milestone.',
        },
        {
          step: 'Operational Handover (LOD 500+)',
          description: 'We finalize models for operational use, integrating as-built changes and operational data for facility management systems.',
        },
      ]}
      deliverables={[
        'LOD-Specific 3D Models',
        'Model Element Tables',
        'Information Maturity Reports',
        'As-Built Operational Models',
        'Asset Information Handover Sets',
        'LOD/LOI Implementation Plans',
      ]}
      standards={[
        'BIM Forum LOD Specification',
        'ISO-19650 Information Management',
        'Project BIM execution requirements',
        'Facility Management Data Standards',
      ]}
      visual={
        <div className="relative w-full h-full min-h-[400px]">
          <Image
            src={lodImg}
            alt="Multi-LOD Building Information Intelligence"
            fill
            className="object-cover"
          />
        </div>
      }
    />
  )
}
