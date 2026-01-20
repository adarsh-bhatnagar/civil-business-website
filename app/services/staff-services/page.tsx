import { Metadata } from 'next'
import ServiceDetail from '@/components/services/ServiceDetail'

export const metadata: Metadata = {
  title: 'Staff Services | Services',
  description: 'Expert BIM professionals available for your projects when you need them.',
}

export default function StaffServicesPage() {
  return (
    <ServiceDetail
      title="Staff Services"
      description="Get expert BIM professionals for your projects. We provide skilled team members when you need them, for as long as you need them."
      problem="Finding qualified BIM professionals is difficult and expensive. Hiring full-time staff isn't always practical, especially for short-term projects or peak workloads."
      solution="We provide experienced BIM professionals who can join your team immediately. Get the expertise you need without the overhead of permanent hires."
      workflow={[
        {
          step: 'Assess Your Needs',
          description: 'We discuss your project requirements and identify what skills and experience you need.',
        },
        {
          step: 'Match Professionals',
          description: 'We match you with BIM professionals who have the right skills and experience for your project.',
        },
        {
          step: 'Onboarding',
          description: 'Our staff integrates with your team, learns your processes, and gets up to speed quickly.',
        },
        {
          step: 'Project Delivery',
          description: 'They work alongside your team, delivering high-quality BIM work according to your standards.',
        },
        {
          step: 'Support & Handover',
          description: 'We provide ongoing support and ensure smooth handover when the project completes.',
        },
      ]}
      deliverables={[
        'Experienced BIM Modelers',
        'BIM Coordinators',
        'Project Managers',
        'Technical Support',
        'Quality Assurance',
        'Training & Knowledge Transfer',
        'Flexible Engagement Terms',
      ]}
      standards={[
        'ISO-19650 Compliance',
        'Your Company Standards',
        'Industry Best Practices',
        'Quality Assurance Processes',
      ]}
    />
  )
}
