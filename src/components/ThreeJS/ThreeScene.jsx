import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import GlowingArc from './GlowingArc';

const ThreeScene = ({ children, className = '' }) => {
  return (
    <div className={`three-canvas ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        style={{ background: 'transparent' }}
      >
        {/* Ambient light for overall illumination */}
        <ambientLight intensity={0.1} />
        
        {/* Point light for dramatic effect */}
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00D4FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#FF0080" />
        
        {/* Stars background for space effect */}
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1}
        />
        
        {/* Main content */}
        {children}
        
        {/* Subtle camera controls */}
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default ThreeScene;