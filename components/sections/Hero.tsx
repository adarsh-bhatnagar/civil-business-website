'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import BIMVisualization from '@/components/3d/BIMVisualization'
import AnimatedBackground from '@/components/visual/AnimatedBackground'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-bim-deep-blue via-bim-deep-blue/95 to-bim-deep-blue/80">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Floating sparkles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 2,
          }}
        >
          <Sparkles className="text-bim-teal/30" size={12} />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4 px-4 py-1 bg-bim-teal/20 text-bim-teal text-sm font-semibold rounded-full border border-bim-teal/30"
            >
              Following Standards
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">Built-Environment</span>
              <span className="block text-bim-teal">Intelligence</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              NirmaanIQ converts physical assets into reliable digital intelligence. We reduce coordination risk,
              prevent costly errors, and ensure accurate information flows across design, construction, and operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary">
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button href="/services" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Explore Services
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              <div>
                <div className="text-3xl font-bold text-bim-teal">50+</div>
                <div className="text-sm text-white/70 mt-1">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-bim-teal">100+</div>
                <div className="text-sm text-white/70 mt-1">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-bim-teal">5+</div>
                <div className="text-sm text-white/70 mt-1">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden border border-bim-teal/20 shadow-2xl"
          >
            <BIMVisualization />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
