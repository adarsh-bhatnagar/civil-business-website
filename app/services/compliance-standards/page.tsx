import { Metadata } from 'next'
import ServiceDetail from '@/components/services/ServiceDetail'

export const metadata: Metadata = {
  title: 'Compliance & Standards | Services',
  description: 'ISO-19650 implementation, information management, and regulatory compliance assurance.',
}

const workflow = [
  {
    step: 'Review Current System',
    description: 'We look at how you currently manage information and identify what needs to change to meet ISO-19650 standards.',
  },
  {
    step: 'Design Your System',
    description: 'We design a shared information platform and create clear processes for how teams will work together.',
  },
  {
    step: 'Set It Up',
    description: 'We set up the platform, configure workflows, assign responsibilities, and implement the standards.',
  },
  {
    step: 'Train Your Team',
    description: 'We train your team on the new processes and provide ongoing support to ensure everyone follows them.',
  },
  {
    step: 'Check Compliance',
    description: 'We regularly check that you are following the standards and help you get certified if needed.',
  },
]

const deliverables = [
  'Implementation Plan',
  'Shared Information Platform',
  'Process Procedures',
  'Project Work Plans',
  'Compliance Reports',
  'Training & Workshops',
  'Certification Help',
]

const standards = [
  'ISO-19650-1, 2, 3, 4, 5',
  'BS EN ISO 16739 (IFC)',
  'BS EN ISO 29481 (IDM)',
  'PAS 1192 Series',
  'Industry-specific Regulations',
]

export default function ComplianceStandardsPage() {
  return (
    <ServiceDetail
      title="Compliance & Standards"
      description="Help you follow ISO-19650 standards and set up systems to manage your project information properly from start to finish."
      problem="Many companies struggle to organize project information. Files get lost, teams cannot find what they need, and you cannot prove you are following industry standards. This creates legal risks and wastes time and money."
      solution="We help you set up a proper information management system following ISO-19650 standards. We create a shared platform where everyone can find what they need, establish clear processes, and help you prove compliance."
      workflow={workflow}
      deliverables={deliverables}
      standards={standards}
    />
  )
}
