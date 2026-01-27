import { Metadata } from 'next'
import ServiceDetail from '@/components/services/ServiceDetail'

export const metadata: Metadata = {
  title: 'GPR & Subsurface Investigation | NirmaanIQ',
  description: 'Locate hidden utilities and subsurface structures using high-frequency electromagnetic radar.',
}

export default function GPRServicesPage() {
  return (
    <ServiceDetail
      title="GPR & Subsurface Investigation"
      description="See through concrete and soil with electromagnetic precision. We locate hidden utilities, rebar, and subsurface structures before they impact your project."
      problem="Undocumented underground utilities and hidden structural elements pose significant risks to safety, schedules, and budgets during excavation and renovation."
      solution="We utilize high-frequency Ground Penetrating Radar (GPR) to map subsurface conditions without destructive investigation. Our specialists interpret radar signatures to provide accurate 3D locations of hidden assets, allowing for informed site planning."
      workflow={[
        {
          step: 'Site Context Assessment',
          description: 'We review existing utility maps and heritage records to develop a targeted scanning strategy for the site.',
        },
        {
          step: 'High-Frequency Scouting',
          description: 'Our technicians deploy GPR systems to scan the target area, capturing electromagnetic reflections from subsurface anomalies.',
        },
        {
          step: 'Signal Interpretation',
          description: 'We process raw radar data using specialized software to differentiate between utilities, voids, rebar, and geological features.',
        },
        {
          step: 'Spatial Mapping',
          description: 'Identified features are mapped into 3D space, providing depth and orientation data for every detected subsurface asset.',
        },
        {
          step: 'Digital Twin Integration',
          description: 'Findings are integrated with BIM or GIS environments, ensuring subsurface risks are visible to all project stakeholders.',
        },
      ]}
      deliverables={[
        'Subsurface Utility Maps',
        'Concrete Scanning & Rebar Layouts',
        'Comprehensive GPR Survey Reports',
        '3D Utility Models (BIM/GIS Integrated)',
        'Site Risk Assessment Documentation',
        'Underground Asset Inventory',
      ]}
      standards={[
        'ASCE 38-02 Standard for Underground Utilities',
        'ASTM D6432 GPR Survey Standards',
        'Local Utility Detection Regulations',
        'Safety & Excavation Guidelines',
      ]}
    />
  )
}
