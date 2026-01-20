import { Metadata } from 'next'
import ServiceDetail from '@/components/services/ServiceDetail'

export const metadata: Metadata = {
  title: 'Clash Detection | Services',
  description: 'Automatically find conflicts between building systems before construction starts.',
}

export default function ClashDetectionPage() {
  return (
    <ServiceDetail
      title="Clash Detection"
      description="Find conflicts between building systems automatically before construction. Fix problems early and save time and money."
      problem="Different building systems (structure, MEP, architecture) often conflict with each other. Finding these problems during construction is expensive and causes delays."
      solution="We use automated clash detection software to find conflicts in your 3D models before construction starts. We identify problems, prioritize them, and help resolve them quickly."
      workflow={[
        {
          step: 'Model Preparation',
          description: 'We gather all discipline models (architectural, structural, MEP) and prepare them for clash detection.',
        },
        {
          step: 'Automated Detection',
          description: 'Our software automatically scans models and identifies where different systems conflict or overlap.',
        },
        {
          step: 'Clash Analysis',
          description: 'We analyze each clash, determine severity, and prioritize which conflicts need immediate attention.',
        },
        {
          step: 'Resolution Planning',
          description: 'We work with design teams to develop solutions for each clash and update models accordingly.',
        },
        {
          step: 'Verification',
          description: 'We re-run clash detection to verify all conflicts are resolved before construction begins.',
        },
      ]}
      deliverables={[
        'Clash Detection Reports',
        'Prioritized Clash Lists',
        'Resolution Recommendations',
        'Updated Models',
        'Verification Reports',
        'Coordination Meeting Support',
        'Ongoing Monitoring',
      ]}
      standards={[
        'ISO-19650-2',
        'Industry Clash Tolerance Standards',
        'Project-Specific Requirements',
        'Best Practice Guidelines',
      ]}
    />
  )
}
