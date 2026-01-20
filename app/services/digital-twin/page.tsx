import { Metadata } from 'next'
import ServiceDetail from '@/components/services/ServiceDetail'
import DigitalTwinVisualization from '@/components/3d/DigitalTwinVisualization'

export const metadata: Metadata = {
  title: 'Digital Twin | Services',
  description: 'Live digital replicas of your building with real-time monitoring and IoT integration.',
}

export default function DigitalTwinServicePage() {
  return (
    <ServiceDetail
      title="Digital Twin"
      description="Create a live digital copy of your building that updates in real-time. Connect IoT sensors to monitor performance, optimize operations, and predict maintenance needs."
      problem="Building operators lack visibility into how their building performs. Without real-time data, problems go unnoticed until they become expensive to fix. Maintenance is reactive instead of proactive."
      solution="We create digital twins that connect your BIM models with real-time sensor data. You can monitor building performance, receive alerts, and predict when maintenance is needed before problems occur."
      workflow={[
        {
          step: 'Model Preparation',
          description: 'We prepare your building models and extract asset information needed for the digital twin.',
        },
        {
          step: 'IoT Sensor Design',
          description: 'We design sensor networks to monitor temperature, energy, equipment status, and environmental conditions.',
        },
        {
          step: 'Platform Setup',
          description: 'We set up the digital twin platform and connect it with your building management systems.',
        },
        {
          step: 'Sensor Integration',
          description: 'We install and connect IoT sensors throughout your building and integrate them with the platform.',
        },
        {
          step: 'Monitoring & Analytics',
          description: 'We create dashboards for real-time monitoring and set up analytics for predictive maintenance.',
        },
      ]}
      deliverables={[
        'Digital Twin Platform',
        'IoT Sensor Network',
        'Real-Time Monitoring Dashboards',
        'Performance Analytics',
        'Predictive Maintenance Alerts',
        'Integration Documentation',
        'Training & Support',
      ]}
      standards={[
        'ISO-19650-3',
        'IoT Standards',
        'Building Automation Standards',
        'Data Security Standards',
      ]}
      visual={<DigitalTwinVisualization />}
    />
  )
}
