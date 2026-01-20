import { Metadata } from 'next'
import ServiceDetail from '@/components/services/ServiceDetail'

export const metadata: Metadata = {
  title: 'Scan to BIM (LIDAR) | Services',
  description: 'Convert laser scans of existing buildings into accurate 3D BIM models.',
}

export default function ScanToBIMPage() {
  return (
    <ServiceDetail
      title="Scan to BIM (LIDAR)"
      description="Use LIDAR laser scanning to capture existing buildings accurately, then convert scans into detailed 3D BIM models."
      problem="Renovating existing buildings is difficult without accurate drawings. Traditional measuring is slow and misses details, leading to design mistakes and construction problems."
      solution="We use LIDAR laser scanners to quickly capture millions of precise measurements of your building. Then we convert these scans into accurate 3D BIM models your design team can use."
      workflow={[
        {
          step: 'Site Survey Planning',
          description: 'We visit your site, assess the building, and plan where to scan to capture everything you need.',
        },
        {
          step: 'LIDAR Scanning',
          description: 'We use professional laser scanners to capture millions of precise measurements of your building in hours.',
        },
        {
          step: 'Point Cloud Processing',
          description: 'We combine all scan data, clean it up, and create a complete 3D point cloud of your building.',
        },
        {
          step: 'Model Creation',
          description: 'We convert the point cloud into a detailed 3D BIM model with walls, floors, ceilings, and MEP systems.',
        },
        {
          step: 'Quality & Delivery',
          description: 'We verify accuracy, add missing information, and deliver complete models ready for design work.',
        },
      ]}
      deliverables={[
        'LIDAR Scan Data',
        '3D Point Clouds',
        'As-Built BIM Models',
        'Accuracy Reports',
        'Comparison with Original Drawings',
        'Renovation-Ready Models',
        'Point Cloud Viewers',
      ]}
      standards={[
        'ISO-19650-2 & 3',
        'Survey Industry Standards',
        'Point Cloud Best Practices',
        'BS EN ISO 16739 (IFC)',
      ]}
    />
  )
}
