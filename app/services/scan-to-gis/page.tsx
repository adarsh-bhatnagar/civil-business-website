import { Metadata } from 'next'
import ServiceDetail from '@/components/services/ServiceDetail'

export const metadata: Metadata = {
    title: 'Scan to GIS Integration | NirmanIQ',
    description: 'Integrate reality capture data with Geographic Information Systems for infrastructure and site planning.',
}

export default function ScanToGISPage() {
    return (
        <ServiceDetail
            title="Scan to GIS Integration"
            description="Bridge the gap between building-scale intelligence and geographic context. We integrate high-precision reality capture with GIS frameworks for comprehensive site intelligence."
            problem="Isolated building data lacks the geographic context needed for large-scale planning, infrastructure management, and site-wide asset tracking."
            solution="We convert reality capture data—including LiDAR and aerial photogrammetry—into GIS-ready datasets. By integrating BIM intelligence with GIS platforms, we provide stakeholders with a comprehensive view of assets across their geographic environment."
            workflow={[
                {
                    step: 'Site Reality Capture',
                    description: 'We perform high-precision laser scanning or aerial surveys to capture the existing site conditions and surrounding infrastructure.',
                },
                {
                    step: 'Georeferencing & Processing',
                    description: 'Captured data is georeferenced to global or local coordinate systems and processed into accurate point clouds or meshes.',
                },
                {
                    step: 'Feature Extraction',
                    description: 'We extract critical features such as terrain, utility points, boundaries, and existing structures into GIS-compatible formats.',
                },
                {
                    step: 'Database Integration',
                    description: 'Spatial data is integrated with asset databases, enabling site-wide tracking and attribute management.',
                },
                {
                    step: 'Platform Delivery',
                    description: 'Integrated GIS datasets are delivered through online viewer platforms or internal GIS environments for stakeholder use.',
                },
            ]}
            deliverables={[
                'Georeferenced Reality Capture Data',
                'Integrated GIS Database',
                'Site-Scale 3D Context Models',
                'Topographic & Infrastructure Datasets',
                'Online Spatial Viewer Access',
                'Asset Attribute Reports',
            ]}
            standards={[
                'OGC Geospatial Standards',
                'ISO-19115 Metadata Standards',
                'Infrastructure Data Frameworks',
                'Coordinate System Regulations',
            ]}
        />
    )
}
