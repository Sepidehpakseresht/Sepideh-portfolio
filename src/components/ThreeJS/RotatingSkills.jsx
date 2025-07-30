import { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import * as THREE from 'three';

const RotatingSkills = ({ skills = [], onSkillSelect, selectedSkill }) => {
  const groupRef = useRef();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillPositions = useMemo(() => {
    const radius = 3;
    const positions = [];
    
    skills.forEach((skill, index) => {
      const angle = (index / skills.length) * Math.PI * 2;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      const z = 0;
      
      positions.push({ x, y, z, angle, skill });
    });
    
    return positions;
  }, [skills]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  const handleSkillClick = (skill) => {
    if (onSkillSelect) {
      onSkillSelect(skill);
    }
  };

  return (
    <group ref={groupRef}>
      {/* Central glow effect */}
      <mesh position={[0, 0, -0.1]}>
        <circleGeometry args={[3.5, 32]} />
        <meshBasicMaterial 
          color="#00D4FF" 
          transparent 
          opacity={0.1}
          toneMapped={false}
        />
      </mesh>
      
      {/* Skill icons */}
      {skillPositions.map(({ x, y, z, skill, angle }, index) => (
        <group key={skill.name} position={[x, y, z]}>
          {/* Icon background glow */}
          <mesh 
            position={[0, 0, -0.05]}
            onClick={() => handleSkillClick(skill)}
            onPointerOver={() => setHoveredSkill(skill.name)}
            onPointerOut={() => setHoveredSkill(null)}
          >
            <circleGeometry args={[0.8, 16]} />
            <meshBasicMaterial 
              color={selectedSkill?.name === skill.name ? "#FF0080" : "#00D4FF"}
              transparent 
              opacity={hoveredSkill === skill.name ? 0.3 : 0.1}
              toneMapped={false}
            />
          </mesh>
          
          {/* Skill icon */}
          <Html
            position={[0, 0, 0.1]}
            center
            distanceFactor={8}
            style={{
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0, 0, 0, 0.8)',
              borderRadius: '50%',
              border: `2px solid ${selectedSkill?.name === skill.name ? "#FF0080" : "#00D4FF"}`,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: hoveredSkill === skill.name ? 'scale(1.2)' : 'scale(1)',
            }}
          >
            <div className="text-2xl text-white">
              {skill.icon}
            </div>
          </Html>
          
          {/* Skill name */}
          <Text
            position={[0, -1.2, 0]}
            fontSize={0.3}
            color={selectedSkill?.name === skill.name ? "#FF0080" : "#00D4FF"}
            anchorX="center"
            anchorY="middle"
            font="/fonts/Orbitron-Regular.ttf"
            style={{
              textShadow: selectedSkill?.name === skill.name 
                ? '0 0 10px #FF0080' 
                : '0 0 5px #00D4FF'
            }}
          >
            {skill.name}
          </Text>
        </group>
      ))}
      
      {/* Connecting lines */}
      {skillPositions.map(({ x, y }, index) => {
        const nextIndex = (index + 1) % skillPositions.length;
        const nextPos = skillPositions[nextIndex];
        
        return (
          <line key={`line-${index}`}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([x, y, 0, nextPos.x, nextPos.y, 0])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial 
              color="#00D4FF" 
              transparent 
              opacity={0.3}
              toneMapped={false}
            />
          </line>
        );
      })}
    </group>
  );
};

export default RotatingSkills;