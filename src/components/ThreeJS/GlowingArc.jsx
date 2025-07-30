import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, BufferGeometry, Float32BufferAttribute } from 'three';

const GlowingArc = ({ position = [0, 0, 0], scale = 1, color = '#00D4FF' }) => {
  const meshRef = useRef();
  const pointsRef = useRef();

  // Create arc geometry
  const arcGeometry = useMemo(() => {
    const radius = 2;
    const segments = 64;
    const startAngle = 0;
    const endAngle = Math.PI;
    
    const positions = [];
    const colors = [];
    
    for (let i = 0; i <= segments; i++) {
      const angle = startAngle + (endAngle - startAngle) * (i / segments);
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      const z = 0;
      
      positions.push(x, y, z);
      
      // Create gradient color effect
      const intensity = 0.5 + 0.5 * Math.sin(angle);
      const r = parseInt(color.slice(1, 3), 16) / 255;
      const g = parseInt(color.slice(3, 5), 16) / 255;
      const b = parseInt(color.slice(5, 7), 16) / 255;
      
      colors.push(r * intensity, g * intensity, b * intensity);
    }
    
    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
    
    return geometry;
  }, [color]);

  // Create particle system for glow effect
  const particles = useMemo(() => {
    const particleCount = 200;
    const positions = [];
    const colors = [];
    const sizes = [];
    
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI;
      const radius = 1.8 + Math.random() * 0.4;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      const z = (Math.random() - 0.5) * 0.1;
      
      positions.push(x, y, z);
      
      const intensity = 0.3 + 0.7 * Math.random();
      const r = parseInt(color.slice(1, 3), 16) / 255;
      const g = parseInt(color.slice(3, 5), 16) / 255;
      const b = parseInt(color.slice(5, 7), 16) / 255;
      
      colors.push(r * intensity, g * intensity, b * intensity);
      sizes.push(Math.random() * 0.05 + 0.02);
    }
    
    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
    geometry.setAttribute('size', new Float32BufferAttribute(sizes, 1));
    
    return geometry;
  }, [color]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    
    if (pointsRef.current) {
      pointsRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* Main arc */}
      <mesh ref={meshRef}>
        <primitive object={arcGeometry} />
        <meshBasicMaterial 
          vertexColors 
          transparent 
          opacity={0.8}
          toneMapped={false}
        />
      </mesh>
      
      {/* Glow particles */}
      <points ref={pointsRef}>
        <primitive object={particles} />
        <pointsMaterial
          vertexColors
          size={0.1}
          transparent
          opacity={0.6}
          blending={2}
          toneMapped={false}
        />
      </points>
      
      {/* Additional glow layers */}
      <mesh scale={[1.1, 1.1, 1]}>
        <primitive object={arcGeometry} />
        <meshBasicMaterial 
          color={color}
          transparent 
          opacity={0.1}
          toneMapped={false}
        />
      </mesh>
      
      <mesh scale={[1.2, 1.2, 1]}>
        <primitive object={arcGeometry} />
        <meshBasicMaterial 
          color={color}
          transparent 
          opacity={0.05}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
};

export default GlowingArc;