import { Metadata } from 'next'
import ServiceDetail from '@/components/services/ServiceDetail'

export const metadata: Metadata = {
  title: 'CAD to BIM | Services',
  description: 'Convert your existing 2D CAD drawings into intelligent 3D BIM models.',
}

export default function CADToBIMPage() {
  return (
    <ServiceDetail
      title="CAD to BIM"
      description="Transform your 2D CAD drawings into intelligent 3D BIM models. Modernize your project documentation and unlock BIM benefits."
      problem="Many projects still use 2D CAD drawings that lack intelligence and 3D coordination. This limits collaboration and makes it harder to find problems early."
      solution="We convert your existing CAD drawings into intelligent 3D BIM models. This gives you all the benefits of BIM without starting from scratch."
      workflow={[
        {
          step: 'Drawing Review',
          description: 'We review your CAD drawings, understand the design intent, and plan the conversion process.',
        },
        {
          step: 'Model Structure Setup',
          description: 'We set up the BIM model structure, define levels, grids, and establish modeling standards.',
        },
        {
          step: '3D Model Creation',
          description: 'We build 3D models from your 2D drawings, interpreting design intent and creating intelligent components.',
        },
        {
          step: 'Data Enrichment',
          description: 'We add properties, materials, and metadata to make models intelligent and useful for coordination.',
        },
        {
          step: 'Quality & Delivery',
          description: 'We verify accuracy against original drawings and deliver complete BIM models ready for use.',
        },
      ]}
      deliverables={[
        '3D BIM Models from CAD',
        'Intelligent Components',
        'Model Documentation',
        'Conversion Reports',
        'Accuracy Verification',
        'Updated Drawings',
        'BIM-Ready Models',
      ]}
      standards={[
        'ISO-19650-2',
        'BS EN ISO 16739 (IFC)',
        'Original CAD Standards',
        'BIM Modeling Standards',
      ]}
    />
  )
}
