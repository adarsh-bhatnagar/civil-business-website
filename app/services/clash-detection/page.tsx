import { Metadata } from 'next'
import Image from 'next/image'
import ServiceDetail from '@/components/services/ServiceDetail'
import clashDetectionImg from '@/app/assets/clash_detection.jpg'

export const metadata: Metadata = {
  title: 'Clash Detection & Coordination | NirmaanIQ',
  description: 'Identify spatial conflicts between building systems before construction begins.',
}

export default function ClashDetectionPage() {
  return (
    <ServiceDetail
      title="Clash Detection & Coordination"
      description="Identify spatial conflicts and coordination failures before they reach the site. We ensure your building systems work together seamlessly."
      problem="Unresolved spatial conflicts between MEP, structure, and architecture lead to emergency field fixes, schedule overruns, and wasted materials."
      solution="We perform systematic, automated clash detection across all disciplines. Our process doesn't just find clashes; it manages their resolution through structured coordination, ensuring a constructible design."
      workflow={[
        {
          step: 'Model Federation',
          description: 'We aggregate multi-discipline models into a unified coordination environment, ensuring all systems are correctly positioned.',
        },
        {
          step: 'Automated Conflict Identification',
          description: 'Using advanced coordination software, we run rule-based tests to identify hard, soft, and workflow clashes.',
        },
        {
          step: 'Clash Analysis & Prioritization',
          description: 'We filter results to remove duplicates and ignore non-critical issues, focusing on "real" clashes that impact constructability.',
        },
        {
          step: 'Structured Coordination Workshops',
          description: 'We lead coordination meetings to resolve prioritized conflicts, ensuring technical feasible solutions are implemented.',
        },
        {
          step: 'Resolution Verification',
          description: 'We verify that agreed-upon changes are correctly updated in the source models and run final "sign-off" coordination checks.',
        },
      ]}
      deliverables={[
        'Prioritized Clash Matrix',
        'Coordination Issue Logs',
        'Resolution Status Reports',
        'Coordinated Federated Models',
        'Constructability Review Documentation',
        'Meeting Minutes and Action Items',
      ]}
      standards={[
        'ISO-19650-2 Coordination Workflows',
        'Industry Standard Clash Tolerances',
        'Project BIM Execution Plan (BEP)',
        'Building System Clearance Requirements',
      ]}
      visual={
        <div className="relative w-full h-full min-h-[400px]">
          <Image
            src={clashDetectionImg}
            alt="Automated Clash Detection and System Coordination"
            fill
            className="object-cover"
          />
        </div>
      }
    />
  )
}
