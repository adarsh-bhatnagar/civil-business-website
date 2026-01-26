import { Metadata } from 'next'
import Image from 'next/image'
import ServiceDetail from '@/components/services/ServiceDetail'
import digitalTwinImg from '@/app/assets/digital_twin_iot.jpg'

export const metadata: Metadata = {
  title: 'Digital Twin & IoT Integration | NirmanIQ',
  description: 'Connect physical assets to real-time data for operational intelligence.',
}

export default function DigitalTwinIoTPage() {
  return (
    <ServiceDetail
      title="Digital Twin & IoT Integration"
      description="Bridge the gap between physical assets and digital intelligence. We create live replicas of your buildings that deliver real-time operational insights."
      problem="Traditional handover information is static and quickly becomes outdated, leaving facility managers with insufficient data to optimize building performance."
      solution="We implement digital twin frameworks that integrate BIM data with IoT sensor streams. Using platforms like Autodesk Tandem, we provide a single interface for real-time monitoring, performance analytics, and predictive maintenance."
      workflow={[
        {
          step: 'Operational Data Requirements',
          description: 'We work with facility managers to define the critical asset data and performance metrics needed for effective building operations.',
        },
        {
          step: 'Asset Information Modeling',
          description: 'We enrich BIM models with operational metadata, creating a high-fidelity "Digital Asset" ready for system integration.',
        },
        {
          step: 'IoT Architecture Design',
          description: 'We design the sensor network and data integration layer required to feed real-time performance data into the digital twin.',
        },
        {
          step: 'Platform Implementation',
          description: 'Using Autodesk Tandem or equivalent platforms, we establish the digital twin environment and map physical sensors to digital elements.',
        },
        {
          step: 'Analytics & Insight Delivery',
          description: 'We configure dashboards and alert systems that convert raw sensor data into actionable insights for energy optimization and maintenance.',
        },
      ]}
      deliverables={[
        'Operational Digital Twin Platform',
        'IoT Integration Architecture',
        'Asset Information Models (AIM)',
        'Performance Analytics Dashboards',
        'Predictive Maintenance Workflows',
        'Real-time Operational Dashboards',
      ]}
      standards={[
        'ISO-19650-3 Operational Phase',
        'Asset Information Requirements (AIR)',
        'Cybersecurity & Data Privacy Standards',
        'Open Data Exchange Formats',
      ]}
      visual={
        <div className="relative w-full h-full min-h-[400px]">
          <Image
            src={digitalTwinImg}
            alt="Real-time Digital Twin and IoT Intelligence"
            fill
            className="object-cover"
          />
        </div>
      }
    />
  )
}
