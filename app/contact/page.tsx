'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLoading } from '@/contexts/LoadingContext'
import { toast } from 'react-toastify'

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const { startLoading } = useLoading()
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setIsLoading(true)
      await emailjs.send(
        SERVICE_ID!,
        TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company || 'N/A',
          phone: formData.phone || 'N/A',
          message: formData.message,
          time: new Date().toLocaleString('en-IN', {
            dateStyle: 'medium',
            timeStyle: 'short',
          }),
        },
        PUBLIC_KEY!
      )

      toast.success('Message sent successfully.')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      })
    } catch (error) {
      console.error('EmailJS Error:', error)
      toast.error('Failed to send message. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  if (isLoading) {
    startLoading();
  }

  return (
    <div className="pt-32 pb-24 bg-bim-concrete min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-bim-charcoal mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-bim-charcoal/70 max-w-3xl mx-auto">
            Ready to start your BIM or Digital Twin project? Get in touch with our team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-bim-charcoal mb-8">
              Get in Touch
            </h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-bim-teal/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="text-bim-teal" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-bim-charcoal mb-1">Email</h3>
                  <a href="mailto:info@bimconsultancy.com" className="text-bim-charcoal/70 hover:text-bim-teal transition-colors">
                    nirmaan.iq@outlook.com, nirmaaniq@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-bim-teal/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="text-bim-teal" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-bim-charcoal mb-1">Phone</h3>
                  <a href="tel:+441234567890" className="text-bim-charcoal/70 hover:text-bim-teal transition-colors">
                    +91 8858888155, +91 7080313566
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-bim-teal/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="text-bim-teal" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-bim-charcoal mb-1">Office</h3>
                  <p className="text-bim-charcoal/70">
                    Lucknow, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-bim-deep-blue text-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2 text-white/80">
                <div className="flex justify-between">
                  <span>All Days</span>
                  <span>9:00 AM - 6:00 PM IST</span>
                </div>
                {/* <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div> */}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg p-8 shadow-sm"
          >
            <h2 className="text-3xl font-semibold text-bim-charcoal mb-6">
              Send us a Message
            </h2>
            <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-bim-charcoal mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-bim-concrete rounded-md focus:outline-none focus:ring-2 focus:ring-bim-teal focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-bim-charcoal mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-bim-concrete rounded-md focus:outline-none focus:ring-2 focus:ring-bim-teal focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-bim-charcoal mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-bim-concrete rounded-md focus:outline-none focus:ring-2 focus:ring-bim-teal focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-bim-charcoal mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-bim-concrete rounded-md focus:outline-none focus:ring-2 focus:ring-bim-teal focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-bim-charcoal mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-bim-concrete rounded-md focus:outline-none focus:ring-2 focus:ring-bim-teal focus:border-transparent resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full text-lg py-4"
              >
                Send Message
                <Send className="ml-2" size={20} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
