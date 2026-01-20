import { Metadata } from 'next'
import ServiceDetail from '@/components/services/ServiceDetail'
import DigitalTwinVisualization from '@/components/3d/DigitalTwinVisualization'

export const metadata: Metadata = {
  title: 'Digital Twin & IoT | Services',
  description: 'Live digital replicas with IoT integration for real-time monitoring and predictive maintenance.',
}

export default function DigitalTwinIOTPage() {
  return (
    <ServiceDetail
      title="Digital Twin & IoT"
      description="Live digital replicas of built assets with IoT sensor integration for real-time monitoring, predictive maintenance, and operational optimization."
      problem="Building operators lack visibility into asset performance, leading to reactive maintenance, energy waste, and premature equipment failure. Disconnected systems and manual processes prevent data-driven decision-making. Asset information from construction is lost or inaccessible during operations."
      solution="Our Digital Twin & IoT services create live digital replicas that connect BIM models with real-time IoT sensor data. We integrate building systems, monitor performance, and enable predictive analytics for proactive maintenance and operational optimization throughout the asset lifecycle."
      workflow={[
        {
          step: 'Asset Data Integration',
          description: 'Extract and structure asset information from BIM models and construction documentation.',
        },
        {
          step: 'IoT Sensor Deployment',
          description: 'Design and deploy IoT sensor networks for monitoring building systems and environmental conditions.',
        },
        {
          step: 'Digital Twin Platform',
          description: 'Develop digital twin platform connecting 3D models with real-time sensor data and analytics.',
        },
        {
          step: 'Data Integration & Analytics',
          description: 'Integrate building management systems, implement analytics, and create predictive models.',
        },
        {
          step: 'Operations Dashboard',
          description: 'Deploy operations dashboards with real-time monitoring, alerts, and maintenance workflows.',
        },
      ]}
      deliverables={[
        'Digital Twin Platform',
        'IoT Sensor Network Design',
        'Real-Time Monitoring Dashboards',
        'Predictive Analytics Models',
        'Asset Information Models',
        'Integration with BMS/SCADA',
        'Maintenance Management Workflows',
      ]}
      standards={[
        'ISO-19650-3',
        'ISO/IEC 30141 (IoT Reference Architecture)',
        'BS EN ISO 16739 (IFC)',
        'Building Automation Standards',
      ]}
      visual={<DigitalTwinVisualization />}
    />
  )
}
