import { Metadata } from 'next'
import ServiceDetail from '@/components/services/ServiceDetail'

export const metadata: Metadata = {
  title: 'GFC Drawings | Services',
  description: 'Good for Construction drawings - detailed construction documents ready for builders.',
}

export default function GFCDrawingsPage() {
  return (
    <ServiceDetail
      title="GFC Drawings (Good for Construction)"
      description="Detailed construction drawings that builders can use directly on site. Clear, accurate, and construction-ready documentation."
      problem="Many drawings lack the detail builders need. Unclear or incomplete drawings cause construction mistakes, delays, and extra costs."
      solution="We create GFC (Good for Construction) drawings with all the detail builders need. Our drawings are clear, accurate, and ready to use on site without interpretation."
      workflow={[
        {
          step: 'Model Preparation',
          description: 'We prepare your BIM models, ensuring all information needed for construction is included.',
        },
        {
          step: 'Drawing Creation',
          description: 'We create detailed construction drawings with dimensions, annotations, and specifications.',
        },
        {
          step: 'Detail Sheets',
          description: 'We develop detail sheets showing connections, assemblies, and installation methods.',
        },
        {
          step: 'Review & Coordination',
          description: 'We coordinate drawings across disciplines and review for accuracy and completeness.',
        },
        {
          step: 'Final Documentation',
          description: 'We finalize drawings, add required stamps, and deliver construction-ready documentation.',
        },
      ]}
      deliverables={[
        'Construction Drawings',
        'Detail Sheets',
        'Installation Guides',
        'Specification Sheets',
        'Coordination Drawings',
        'Shop Drawings',
        'As-Built Documentation',
      ]}
      standards={[
        'ISO-19650-2',
        'Construction Drawing Standards',
        'Industry Best Practices',
        'Project-Specific Requirements',
      ]}
    />
  )
}
