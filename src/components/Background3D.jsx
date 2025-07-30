import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// Floating geometric shapes
function FloatingGeometry({ position, geometry, color, scale = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.002;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[-0.1, 0.1]}
    >
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometry}
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.6}
          emissive={color}
          emissiveIntensity={0.2}
          wireframe={Math.random() > 0.5}
        />
      </mesh>
    </Float>
  );
}

// Particle field component
function ParticleField() {
  const points = useRef();
  const particleCount = 1000;
  
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      // Random positions
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      // Random colors (cyan to purple spectrum)
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i * 3] = 0; // R
        colors[i * 3 + 1] = 1; // G
        colors[i * 3 + 2] = 1; // B (cyan)
      } else if (colorChoice < 0.66) {
        colors[i * 3] = 0.54; // R
        colors[i * 3 + 1] = 0.36; // G
        colors[i * 3 + 2] = 0.96; // B (purple)
      } else {
        colors[i * 3] = 1; // R
        colors[i * 3 + 1] = 0; // G
        colors[i * 3 + 2] = 1; // B (magenta)
      }
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x += 0.0005;
      points.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Main 3D Scene
function Scene() {
  const geometries = [
    <icosahedronGeometry args={[0.5, 0]} />,
    <octahedronGeometry args={[0.5, 0]} />,
    <tetrahedronGeometry args={[0.5, 0]} />,
    <dodecahedronGeometry args={[0.5, 0]} />,
    <boxGeometry args={[0.8, 0.8, 0.8]} />,
    <coneGeometry args={[0.5, 1, 6]} />,
  ];

  const colors = [
    '#00ffff', // cyan
    '#8b5cf6', // purple
    '#ff00ff', // magenta
    '#00ff88', // green
    '#0099ff', // blue
    '#ff006e', // pink
  ];

  const shapes = useMemo(() => {
    const shapeArray = [];
    for (let i = 0; i < 15; i++) {
      shapeArray.push({
        position: [
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        ],
        geometry: geometries[Math.floor(Math.random() * geometries.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        scale: 0.3 + Math.random() * 0.7,
      });
    }
    return shapeArray;
  }, []);

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} color="#00ffff" />
      <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ffff" />
      
      {/* Floating geometric shapes */}
      {shapes.map((shape, index) => (
        <FloatingGeometry
          key={index}
          position={shape.position}
          geometry={shape.geometry}
          color={shape.color}
          scale={shape.scale}
        />
      ))}
      
      {/* Particle field */}
      <ParticleField />
      
      {/* Sparkles for extra magic */}
      <Sparkles
        count={50}
        scale={[10, 10, 10]}
        size={2}
        speed={0.3}
        color="#00ffff"
      />
    </>
  );
}

// Main Background3D component
export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}