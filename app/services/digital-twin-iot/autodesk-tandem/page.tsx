import { Metadata } from 'next'
import ServiceDetail from '@/components/services/ServiceDetail'
import DigitalTwinVisualization from '@/components/3d/DigitalTwinVisualization'

export const metadata: Metadata = {
  title: 'Autodesk Tandem (IoT) | Services',
  description: 'Connect your building with IoT sensors using Autodesk Tandem platform for real-time monitoring.',
}

export default function AutodeskTandemPage() {
  return (
    <ServiceDetail
      title="Autodesk Tandem (IoT)"
      description="Connect your building with IoT sensors using Autodesk Tandem. Real-time monitoring, predictive maintenance, and operational optimization."
      problem="Building operators lack visibility into how their building performs. Without real-time data, problems go unnoticed until they become expensive to fix."
      solution="We set up Autodesk Tandem to connect your BIM models with IoT sensors. You get real-time monitoring of building performance, helping you maintain and optimize operations."
      workflow={[
        {
          step: 'Platform Setup',
          description: 'We set up your Autodesk Tandem platform and import your building models and asset information.',
        },
        {
          step: 'IoT Sensor Planning',
          description: 'We design sensor networks to monitor temperature, energy, equipment status, and environmental conditions.',
        },
        {
          step: 'Sensor Integration',
          description: 'We connect IoT sensors to your building systems and integrate them with the Tandem platform.',
        },
        {
          step: 'Data Connection',
          description: 'We connect building management systems and ensure real-time data flows to your digital twin.',
        },
        {
          step: 'Dashboard & Monitoring',
          description: 'We create custom dashboards so you can monitor building performance and receive alerts.',
        },
      ]}
      deliverables={[
        'Autodesk Tandem Platform',
        'IoT Sensor Network',
        'Real-Time Dashboards',
        'Performance Monitoring',
        'Alert Systems',
        'Integration Documentation',
        'Training & Support',
      ]}
      standards={[
        'ISO-19650-3',
        'Autodesk Tandem Standards',
        'IoT Best Practices',
        'Building Automation Standards',
      ]}
      visual={<DigitalTwinVisualization />}
    />
  )
}
