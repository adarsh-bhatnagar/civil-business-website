'use client'

import Link from 'next/link'
import { Building2, Mail, Phone, MapPin } from 'lucide-react'
import { useLoading } from '@/contexts/LoadingContext'

export default function Footer() {
  const { startLoading } = useLoading()
  return (
    <footer className="bg-bim-deep-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="text-bim-teal" size={24} />
              <span className="text-xl font-bold">NirmaanIQ</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Built-environment intelligence consultancy. Converting physical assets into reliable digital intelligence across design, construction, and operations.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-bim-teal">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" onClick={() => startLoading()} className="text-white/70 hover:text-bim-teal transition-colors">
                  BIM Design & Engineering
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={() => startLoading()} className="text-white/70 hover:text-bim-teal transition-colors">
                  Construction Intelligence
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={() => startLoading()} className="text-white/70 hover:text-bim-teal transition-colors">
                  Reality Capture
                </Link>
              </li>
              <li>
                <Link href="/digital-twin" onClick={() => startLoading()} className="text-white/70 hover:text-bim-teal transition-colors">
                  Digital Twin & IoT
                </Link>
              </li>
              <li>
                <Link href="/iso-19650" onClick={() => startLoading()} className="text-white/70 hover:text-bim-teal transition-colors">
                  Compliance & Standards
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-bim-teal">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" onClick={() => startLoading()} className="text-white/70 hover:text-bim-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" onClick={() => startLoading()} className="text-white/70 hover:text-bim-teal transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/iso-19650" onClick={() => startLoading()} className="text-white/70 hover:text-bim-teal transition-colors">
                  ISO-19650 Standards
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => startLoading()} className="text-white/70 hover:text-bim-teal transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-bim-teal">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Mail className="text-bim-teal mt-0.5 flex-shrink-0" size={16} />
                <a href="mailto:info@bimconsultancy.com" className="text-white/70 hover:text-bim-teal transition-colors">
                  nirmaan.iq@outlook.com, nirmaan.iq@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="text-bim-teal mt-0.5 flex-shrink-0" size={16} />
                <a href="tel:+441234567890" className="text-white/70 hover:text-bim-teal transition-colors">
                  +91 8858888155, +91 7080313566
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-bim-teal mt-0.5 flex-shrink-0" size={16} />
                <span className="text-white/70">
                  Lucknow, Uttar Pradesh, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} NirmaanIQ. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-bim-teal transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-bim-teal transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
