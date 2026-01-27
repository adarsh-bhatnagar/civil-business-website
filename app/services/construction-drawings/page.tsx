import { Metadata } from 'next'
import ServiceDetail from '@/components/services/ServiceDetail'

export const metadata: Metadata = {
  title: 'Construction Issue Drawings (GFC / IFC) | NirmaanIQ',
  description: 'Coordinated construction documentation ready for fabrication and installation.',
}

export default function ConstructionDrawingsPage() {
  return (
    <ServiceDetail
      title="Construction Issue Drawings (GFC / IFC)"
      description="Field-ready documentation derived from coordinated digital intelligence. We provide high-accuracy GFC and IFC sets that eliminate field ambiguity."
      problem="Poorly coordinated 2D drawings derived from disjointed sources lead to errors on site, conflicting installation instructions, and costly rework."
      solution="We extract all construction documentation directly from coordinated 3D BIM models. This ensures that every drawing—from plans and sections to complex details—is perfectly synchronized and constructible."
      workflow={[
        {
          step: 'Model Sign-off',
          description: 'Documentation extraction begins only after the multi-discipline model has been fully coordinated and signed off.',
        },
        {
          step: 'Template & Standard Setup',
          description: 'We establish project-specific drawing templates and standards to ensure consistency and readability for site teams.',
        },
        {
          step: 'Automated extraction',
          description: 'We extract primary plans, sections, and elevations directly from the coordinated 3D environment.',
        },
        {
          step: 'Detailing & Annotation',
          description: 'Our engineers add necessary detailing, dimensions, and technical annotations, focusing on installation clarity.',
        },
        {
          step: 'Quality Assurance Review',
          description: 'Every drawing set undergoes rigorous review to ensure consistency with the model and compliance with local standards.',
        },
      ]}
      deliverables={[
        'Good for Construction (GFC) Sets',
        'Issued for Construction (IFC) Packages',
        'Detailed Shop Drawings',
        'Installation & Spool Sheets',
        'As-Built Record Drawings',
        'Schedules and Material Takeoffs',
      ]}
      standards={[
        'Local Building Authority Standards',
        'National CAD/BIM Standards',
        'Project Drawing Protocols',
        'Engineering Documentation Standards',
      ]}
    />
  )
}
