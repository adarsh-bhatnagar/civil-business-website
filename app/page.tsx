import Hero from '@/components/sections/Hero'
import ProblemSection from '@/components/sections/ProblemSection'
import ServiceOverview from '@/components/sections/ServiceOverview'
import ProcessFlow from '@/components/sections/ProcessFlow'
import StandardsSection from '@/components/sections/StandardsSection'
import IndustriesSection from '@/components/sections/IndustriesSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServiceOverview />
      <ProcessFlow />
      <StandardsSection />
      <IndustriesSection />
      <CTASection />
    </>
  )
}
