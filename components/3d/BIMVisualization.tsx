'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Grid, Box, Environment } from '@react-three/drei'
import { Suspense } from 'react'
import * as THREE from 'three'

function BIMScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#14B8A6" />
      
      <Grid
        args={[20, 20]}
        cellColor="#14B8A6"
        sectionColor="#0A2540"
        cellThickness={0.5}
        sectionThickness={1}
        fadeDistance={25}
        fadeStrength={1}
      />

      {/* Building Structure */}
      <group>
        {/* Base Foundation */}
        <Box args={[8, 0.5, 8]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#1F2933" metalness={0.3} roughness={0.7} />
        </Box>

        {/* Main Structure */}
        <Box args={[6, 4, 6]} position={[0, 2.5, 0]}>
          <meshStandardMaterial color="#0A2540" metalness={0.2} roughness={0.8} />
        </Box>

        {/* Top Floor */}
        <Box args={[5, 3, 5]} position={[0, 6.5, 0]}>
          <meshStandardMaterial color="#0A2540" metalness={0.2} roughness={0.8} />
        </Box>

        {/* Structural Elements */}
        {[-2.5, 0, 2.5].map((x) =>
          [-2.5, 0, 2.5].map((z) => (
            <Box key={`${x}-${z}`} args={[0.3, 4, 0.3]} position={[x, 2, z]}>
              <meshStandardMaterial color="#14B8A6" emissive="#14B8A6" emissiveIntensity={0.2} />
            </Box>
          ))
        )}

        {/* Digital Twin Sensors */}
        <group>
          <Box args={[0.2, 0.2, 0.2]} position={[2, 3, 2]}>
            <meshStandardMaterial color="#F97316" emissive="#F97316" emissiveIntensity={0.5} />
          </Box>
          <Box args={[0.2, 0.2, 0.2]} position={[-2, 3, -2]}>
            <meshStandardMaterial color="#F97316" emissive="#F97316" emissiveIntensity={0.5} />
          </Box>
          <Box args={[0.2, 0.2, 0.2]} position={[2, 7, -2]}>
            <meshStandardMaterial color="#F97316" emissive="#F97316" emissiveIntensity={0.5} />
          </Box>
        </group>
      </group>

      <Environment preset="city" />
    </>
  )
}

export default function BIMVisualization() {
  return (
    <div className="w-full h-full">
      <Canvas shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[12, 8, 12]} fov={50} />
          <BIMScene />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={8}
            maxDistance={20}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
