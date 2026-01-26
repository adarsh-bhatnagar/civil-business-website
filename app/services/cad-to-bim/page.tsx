import { Metadata } from 'next'
import ServiceDetail from '@/components/services/ServiceDetail'

export const metadata: Metadata = {
  title: 'CAD to BIM Conversion | NirmanIQ',
  description: 'Transform legacy 2D CAD documentation into intelligent 3D building intelligence.',
}

export default function CADToBIMPage() {
  return (
    <ServiceDetail
      title="CAD to BIM Conversion"
      description="Modernize legacy assets by converting 2D technical drawings into intelligent building models. We transform static lines into actionable digital intelligence."
      problem="Legacy 2D drawings lack the spatial intelligence and data structure required for modern coordination, resulting in fragmented information and unreliable cost estimates."
      solution="We interpret and reconstruct legacy documentation into high-fidelity BIM models. This process doesn't just add a third dimension; it adds data structure, system intelligence, and spatial coordination to your existing asset records."
      workflow={[
        {
          step: 'Documentation Audit',
          description: 'We review existing CAD sets to assess data validity and identify information gaps before conversion begins.',
        },
        {
          step: 'Intelligence Framework Setup',
          description: 'We establish the BIM standards, classification systems, and LOD requirements necessary for the converted model.',
        },
        {
          step: 'Digital Reconstruction',
          description: 'Our engineers reconstruct the asset in 3D, interpreting design intent and cross-referencing multiple drawing sets for accuracy.',
        },
        {
          step: 'Information Enrichment',
          description: 'We embed technical attributes and specifications into model elements, ensuring the model is useful for coordination and management.',
        },
        {
          step: 'Federation & Validation',
          description: 'Converted models are validated for spatial accuracy and consistency with the source documentation.',
        },
      ]}
      deliverables={[
        'Structured 3D BIM Models',
        'Intelligence-Enriched Components',
        'Conversion Integrity Reports',
        'Updated Coordinated Documentation',
        'Asset Information Model (AIM) Foundation',
        'Interoperable Model Formats (IFC)',
      ]}
      standards={[
        'ISO-19650-2 Information Production',
        'Uniclass or OmniClass Classification',
        'COBie Data Requirements',
        'National BIM Standards Compliance',
      ]}
    />
  )
}
