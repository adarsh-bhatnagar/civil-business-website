import { Metadata } from 'next'
import ServiceDetail from '@/components/services/ServiceDetail'

export const metadata: Metadata = {
  title: 'Scan to BIM (LiDAR) | NirmaanIQ',
  description: 'Convert high-precision laser scans into accurate digital as-built intelligence.',
}

export default function ScanToBIMPage() {
  return (
    <ServiceDetail
      title="Scan to BIM (LiDAR)"
      description="Capture reality with sub-millimeter precision. We convert billion-point LiDAR scans into structured, as-built building intelligence."
      problem="Renovating or retrofitting complex assets without accurate as-built data leads to design assumptions that fail during installation, causing significant escalation in project costs."
      solution="We deploy professional-grade LiDAR scanners to create a high-fidelity digital snapshot of existing conditions. This 'Point Cloud' is then intelligently modeled to create a reliable BIM foundation for design, engineering, and facility management."
      workflow={[
        {
          step: 'Capture Strategy',
          description: 'We establish a scanning network and control points to ensure absolute spatial accuracy across the entire asset.',
        },
        {
          step: 'LiDAR Reality Capture',
          description: 'Our field specialists use terrestrial and mobile laser scanners to capture dense spatial data of architecture, structure, and MEP systems.',
        },
        {
          step: 'Point Cloud Registration',
          description: 'Individual scan stations are registered into a single, unified 3D point cloud, validated against control measurements.',
        },
        {
          step: 'As-Built Intelligence Modeling',
          description: 'The point cloud is converted into a structured BIM model, differentiating between original design intent and actual as-built deviations.',
        },
        {
          step: 'Deviation & Quality Analysis',
          description: 'We perform a final audit to ensure the generated model meets the required accuracy tolerances and information standards.',
        },
      ]}
      deliverables={[
        'Registered 3D Point Clouds',
        'As-Built 3D BIM Models',
        'Reality Capture Accuracy Reports',
        'Model-to-Point Cloud Deviation Logs',
        'Spherical 360 Site Photography',
        'Renovation-Ready Federated Models',
      ]}
      standards={[
        'ISO-19650-3 Asset Information Management',
        'RICS Specification for Surveys',
        'USIBD Level of Accuracy (LOA) Standards',
        'Point Cloud Interoperability Formats',
      ]}
    />
  )
}
