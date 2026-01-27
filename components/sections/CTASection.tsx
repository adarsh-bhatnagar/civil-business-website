'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { ArrowRight, Phone, Mail } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-bim-deep-blue via-bim-deep-blue/95 to-bim-deep-blue text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Secure Your Asset Intelligence?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Partner with NirmaanIQ for enterprise-grade built-environment intelligence and structured information management from design through operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button href="/services" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              Explore Services
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/70">
            <a href="tel:+441234567890" className="flex items-center hover:text-bim-teal transition-colors">
              <Phone className="mr-2" size={18} />
              +91 8858888155
            </a>
            <a href="mailto:info@nirmaniq.com" className="flex items-center hover:text-bim-teal transition-colors">
              <Mail className="mr-2" size={18} />
              nirmaan.iq@outlook.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
