import { Metadata } from 'next'
import ServiceDetail from '@/components/services/ServiceDetail'

export const metadata: Metadata = {
  title: 'Quantity Surveying | Services',
  description: 'Accurate material quantities and cost estimation from your 3D BIM models.',
}

export default function QuantitySurveyingPage() {
  return (
    <ServiceDetail
      title="Quantity Surveying"
      description="Get accurate material quantities and cost estimates directly from your 3D building models. Save time and reduce errors."
      problem="Traditional quantity surveying from 2D drawings is slow and error-prone. Manual counting leads to mistakes, budget overruns, and project delays."
      solution="We extract quantities automatically from your 3D BIM models. This gives you accurate counts, faster estimates, and better budget control throughout your project."
      workflow={[
        {
          step: 'Model Analysis',
          description: 'We analyze your 3D BIM model to identify all materials, components, and systems that need to be counted.',
        },
        {
          step: 'Quantity Extraction',
          description: 'Our software automatically counts materials like concrete, steel, pipes, and finishes from the model.',
        },
        {
          step: 'Cost Estimation',
          description: 'We apply current market rates to calculate costs for materials, labor, and equipment.',
        },
        {
          step: 'Budget Planning',
          description: 'We create detailed budgets broken down by building area, system, or construction phase.',
        },
        {
          step: 'Reports & Updates',
          description: 'You receive comprehensive quantity reports and cost estimates that update automatically as the design changes.',
        },
      ]}
      deliverables={[
        'Material Quantity Reports',
        'Cost Estimates',
        'Budget Breakdowns',
        'Bill of Quantities (BOQ)',
        'Cost Comparison Reports',
        'Updated Estimates',
        'Value Engineering Analysis',
      ]}
      standards={[
        'RICS Standards',
        'Industry Cost Databases',
        'ISO-19650-2',
        'Project-Specific Requirements',
      ]}
    />
  )
}
