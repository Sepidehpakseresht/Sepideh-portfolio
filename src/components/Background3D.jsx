import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, Text, Html } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// Floating Code Block Component
function FloatingCodeBlock({ position, codeText, color, scale = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.003;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={1}
      floatingRange={[-0.2, 0.2]}
    >
      <group position={position}>
        {/* Code block background */}
        <mesh ref={meshRef} scale={scale}>
          <boxGeometry args={[2, 1.2, 0.1]} />
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.3}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>
        
        {/* Code text overlay */}
        <Html
          position={[0, 0, 0.1]}
          transform
          occlude
          style={{
            width: '180px',
            height: '100px',
            pointerEvents: 'none',
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <code className="text-xs font-mono text-white bg-black/50 p-2 rounded backdrop-blur-sm">
              {codeText}
            </code>
          </div>
        </Html>
      </group>
    </Float>
  );
}

// Floating Programming Symbol Component
function FloatingSymbol({ position, symbol, color, scale = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.01;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.002;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={1.5}
      floatingRange={[-0.1, 0.1]}
    >
      <group position={position}>
        <Text
          ref={meshRef}
          fontSize={scale * 1.5}
          color={color}
          anchorX="center"
          anchorY="middle"
          font="/fonts/FiraCode-Regular.woff"
        >
          {symbol}
        </Text>
        
        {/* Glow effect */}
        <mesh scale={scale * 2}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.1}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Creative Tool Component (for creativity aspect)
function CreativeTool({ position, toolType, color, scale = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y += 0.012;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0] * 2) * 0.004;
    }
  });

  const getToolGeometry = () => {
    switch (toolType) {
      case 'brush':
        return <coneGeometry args={[0.1, 1.5, 8]} />;
      case 'pencil':
        return <cylinderGeometry args={[0.05, 0.08, 1.2, 6]} />;
      case 'palette':
        return <dodecahedronGeometry args={[0.6, 0]} />;
      default:
        return <octahedronGeometry args={[0.5, 0]} />;
    }
  };

  return (
    <Float
      speed={1.8}
      rotationIntensity={0.8}
      floatIntensity={1.2}
      floatingRange={[-0.15, 0.15]}
    >
      <mesh ref={meshRef} position={position} scale={scale}>
        {getToolGeometry()}
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.7}
          emissive={color}
          emissiveIntensity={0.3}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

// Particle field with coding symbols
function CodingParticleField() {
  const points = useRef();
  const particleCount = 500;
  
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      // Random positions
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      
      // Coding-themed colors (syntax highlighting colors)
      const colorChoice = Math.random();
      if (colorChoice < 0.25) {
        colors[i * 3] = 0; colors[i * 3 + 1] = 1; colors[i * 3 + 2] = 1; // Cyan - functions
      } else if (colorChoice < 0.5) {
        colors[i * 3] = 1; colors[i * 3 + 1] = 0.5; colors[i * 3 + 2] = 0; // Orange - keywords
      } else if (colorChoice < 0.75) {
        colors[i * 3] = 0.5; colors[i * 3 + 1] = 1; colors[i * 3 + 2] = 0.5; // Green - strings
      } else {
        colors[i * 3] = 1; colors[i * 3 + 1] = 0.8; colors[i * 3 + 2] = 0; // Yellow - variables
      }
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x += 0.0003;
      points.current.rotation.y += 0.0008;
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
        size={0.03}
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
  const codeBlocks = [
    { text: "const dev = {\n  name: 'Sepideh',\n  skills: ['React']\n}", color: '#00ffff' },
    { text: "<div>\n  <h1>Hello</h1>\n  <p>World</p>\n</div>", color: '#ff6b6b' },
    { text: "function create() {\n  return magic;\n}", color: '#4ecdc4' },
    { text: ".hero {\n  display: flex;\n  magic: true;\n}", color: '#45b7d1' },
    { text: "import React from\n'react';\n\nexport default", color: '#96ceb4' },
  ];

  const programmingSymbols = [
    '{ }', '< >', '[ ]', '( )', '=>', '&&', '||', '++', '--', '===', '!==', 
    'fn', 'var', 'let', 'const', 'if', 'else', 'for', 'while', 'return',
    'class', 'extends', 'import', 'export', 'async', 'await'
  ];

  const creativeTools = ['brush', 'pencil', 'palette', 'tool'];
  
  const colors = ['#00ffff', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];

  const elements = useMemo(() => {
    const elementArray = [];
    
    // Add code blocks
    for (let i = 0; i < 5; i++) {
      elementArray.push({
        type: 'codeBlock',
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 12
        ],
        codeText: codeBlocks[i].text,
        color: codeBlocks[i].color,
        scale: 0.6 + Math.random() * 0.4,
      });
    }
    
    // Add programming symbols
    for (let i = 0; i < 15; i++) {
      elementArray.push({
        type: 'symbol',
        position: [
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15
        ],
        symbol: programmingSymbols[Math.floor(Math.random() * programmingSymbols.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        scale: 0.5 + Math.random() * 0.8,
      });
    }
    
    // Add creative tools
    for (let i = 0; i < 6; i++) {
      elementArray.push({
        type: 'creativeTool',
        position: [
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        ],
        toolType: creativeTools[Math.floor(Math.random() * creativeTools.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        scale: 0.4 + Math.random() * 0.6,
      });
    }
    
    return elementArray;
  }, []);

  return (
    <>
      {/* Ambient lighting with coding theme colors */}
      <ambientLight intensity={0.3} color="#00ffff" />
      <pointLight position={[10, 10, 10]} intensity={1} color="#4ecdc4" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ff6b6b" />
      <pointLight position={[0, 15, -10]} intensity={0.6} color="#feca57" />
      
      {/* Render all elements */}
      {elements.map((element, index) => {
        if (element.type === 'codeBlock') {
          return (
            <FloatingCodeBlock
              key={`code-${index}`}
              position={element.position}
              codeText={element.codeText}
              color={element.color}
              scale={element.scale}
            />
          );
        } else if (element.type === 'symbol') {
          return (
            <FloatingSymbol
              key={`symbol-${index}`}
              position={element.position}
              symbol={element.symbol}
              color={element.color}
              scale={element.scale}
            />
          );
        } else if (element.type === 'creativeTool') {
          return (
            <CreativeTool
              key={`tool-${index}`}
              position={element.position}
              toolType={element.toolType}
              color={element.color}
              scale={element.scale}
            />
          );
        }
        return null;
      })}
      
      {/* Coding particle field */}
      <CodingParticleField />
      
      {/* Enhanced sparkles with coding colors */}
      <Sparkles
        count={80}
        scale={[15, 15, 15]}
        size={3}
        speed={0.4}
        color="#00ffff"
      />
      <Sparkles
        count={60}
        scale={[12, 12, 12]}
        size={2}
        speed={0.3}
        color="#ff6b6b"
      />
    </>
  );
}

// Main Background3D component
export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}