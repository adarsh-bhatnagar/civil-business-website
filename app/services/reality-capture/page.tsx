import { Metadata } from 'next'
import ServiceDetail from '@/components/services/ServiceDetail'

export const metadata: Metadata = {
  title: 'Reality Capture | Services',
  description: 'Laser scanning, photogrammetry, and point cloud processing for accurate as-built documentation.',
}

export default function RealityCapturePage() {
  return (
    <ServiceDetail
      title="Reality Capture"
      description="Scan existing buildings with lasers to create accurate 3D models. Perfect for renovation and retrofit projects."
      problem="When renovating an existing building, you often don't have accurate drawings of what's actually there. Traditional measuring takes too long and misses details, leading to design mistakes and construction problems."
      solution="We use laser scanners to quickly capture the exact shape and size of your existing building. We create a precise 3D model that your design team can use, eliminating guesswork and costly mistakes."
      workflow={[
        {
          step: 'Plan the Scan',
          description: 'We visit your site and plan where to scan to capture everything you need for your project.',
        },
        {
          step: 'Scan the Building',
          description: 'We use laser scanners to capture millions of precise measurements of your building in just hours.',
        },
        {
          step: 'Process the Data',
          description: 'We combine all the scan data, clean it up, and create a complete 3D point cloud of your building.',
        },
        {
          step: 'Create 3D Model',
          description: 'We turn the scan data into a 3D building model that your design team can use for planning renovations.',
        },
        {
          step: 'Deliver Results',
          description: 'You receive the 3D scan data, a complete building model, and reports showing any differences from original drawings.',
        },
      ]}
      deliverables={[
        'Complete 3D Scan Data',
        'Accurate Building Models',
        'Comparison Reports',
        'Survey Documentation',
        '3D Viewing Tools',
        'Quality Reports',
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
