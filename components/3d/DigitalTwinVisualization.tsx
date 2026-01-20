'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Grid, Box, Environment, Sphere } from '@react-three/drei'
import { Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

function Sensor({ position, pulse }: { position: [number, number, number]; pulse: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current && pulse) {
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.2)
    }
  })

  return (
    <group position={position}>
      <Sphere ref={meshRef} args={[0.15, 16, 16]}>
        <meshStandardMaterial color="#F97316" emissive="#F97316" emissiveIntensity={0.8} />
      </Sphere>
      <Box args={[0.1, 0.3, 0.1]} position={[0, -0.2, 0]}>
        <meshStandardMaterial color="#1F2933" />
      </Box>
    </group>
  )
}

function DigitalTwinScene() {
  return (
    <>
      <ambientLight intensity={0.6} />
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

        {/* IoT Sensors */}
        <Sensor position={[2, 3, 2]} pulse={true} />
        <Sensor position={[-2, 3, -2]} pulse={true} />
        <Sensor position={[2, 7, -2]} pulse={true} />
        <Sensor position={[-2, 7, 2]} pulse={true} />
        <Sensor position={[0, 1, 0]} pulse={true} />

        {/* Data Flow Lines */}
        {[[2, 3, 2], [-2, 3, -2], [2, 7, -2]].map((pos, i) => {
          const points = [
            new THREE.Vector3(...pos),
            new THREE.Vector3(0, 8, 0),
          ]
          return (
            <line key={i}>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={points.length}
                  array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#14B8A6" opacity={0.5} transparent />
            </line>
          )
        })}
      </group>

      <Environment preset="city" />
    </>
  )
}

export default function DigitalTwinVisualization() {
  return (
    <div className="w-full h-full">
      <Canvas shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[12, 8, 12]} fov={50} />
          <DigitalTwinScene />
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
