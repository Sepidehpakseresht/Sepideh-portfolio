import { useState, useRef } from 'react';
import { motion as Motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Ring } from '@react-three/drei';
import * as THREE from 'three';

// 3D Contact Orb Component
function ContactOrb() {
  const meshRef = useRef();
  const ringRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x += 0.005;
      ringRef.current.rotation.z += 0.01;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[-0.2, 0.2]}
    >
      <group>
        {/* Main orb */}
        <Sphere ref={meshRef} args={[1, 32, 32]}>
          <meshStandardMaterial
            color="#00ffff"
            transparent
            opacity={0.3}
            emissive="#00ffff"
            emissiveIntensity={0.4}
            wireframe={true}
          />
        </Sphere>
        
        {/* Rotating rings */}
        <Ring ref={ringRef} args={[1.2, 1.4, 32]}>
          <meshStandardMaterial
            color="#8b5cf6"
            transparent
            opacity={0.6}
            emissive="#8b5cf6"
            emissiveIntensity={0.2}
          />
        </Ring>
        
        <Ring args={[1.6, 1.8, 32]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial
            color="#ff00ff"
            transparent
            opacity={0.4}
            emissive="#ff00ff"
            emissiveIntensity={0.2}
          />
        </Ring>
      </group>
    </Float>
  );
}

// 3D Contact Scene
function ContactScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#00ffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8b5cf6" />
      <ContactOrb />
    </>
  );
}

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const form = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/xyzwrqoo', {
        method: 'POST',
        body: form,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 4000); 
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputVariants = {
    focused: {
      scale: 1.02,
      boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
      borderColor: "#00ffff",
    },
    unfocused: {
      scale: 1,
      boxShadow: "0 0 0px rgba(0, 255, 255, 0)",
      borderColor: "rgba(255, 255, 255, 0.1)",
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-24 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-medium via-space-deep to-space-black" />
      
      {/* Animated background orbs */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-neon-cyan/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-[140px] animate-pulse" />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left side - 3D Visual */}
        <Motion.div
          className="hidden lg:block h-[500px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
            <ContactScene />
          </Canvas>
        </Motion.div>

        {/* Right side - Contact Form */}
        <Motion.div
          className="w-full max-w-xl mx-auto lg:mx-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center lg:text-left mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 font-futuristic">
              <span className="holographic-text">Contact Me</span>
            </h2>
            <p className="text-xl text-neon-cyan font-mono glow-text">
              Let's build something amazing together
            </p>
          </div>

          <Motion.div
            className="glass-morphism rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Input */}
              <Motion.div
                variants={inputVariants}
                animate={focusedField === 'name' ? 'focused' : 'unfocused'}
                transition={{ duration: 0.3 }}
              >
                <label className="block text-sm font-mono text-neon-cyan mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 bg-space-dark/50 border border-white/10 rounded-lg text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:border-neon-cyan focus:bg-space-dark/70"
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                />
              </Motion.div>

              {/* Email Input */}
              <Motion.div
                variants={inputVariants}
                animate={focusedField === 'email' ? 'focused' : 'unfocused'}
                transition={{ duration: 0.3 }}
              >
                <label className="block text-sm font-mono text-neon-cyan mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-space-dark/50 border border-white/10 rounded-lg text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:border-neon-cyan focus:bg-space-dark/70"
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
              </Motion.div>

              {/* Message Input */}
              <Motion.div
                variants={inputVariants}
                animate={focusedField === 'message' ? 'focused' : 'unfocused'}
                transition={{ duration: 0.3 }}
              >
                <label className="block text-sm font-mono text-neon-cyan mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-space-dark/50 border border-white/10 rounded-lg text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:border-neon-cyan focus:bg-space-dark/70 resize-none"
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                />
              </Motion.div>

              {/* Submit Button */}
              <Motion.button
                type="submit"
                className={`w-full futuristic-button flex justify-center items-center gap-3 py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  status === 'loading' || status === 'success' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                disabled={status === 'loading' || status === 'success'}
                whileHover={status === 'idle' || status === 'error' ? { scale: 1.02, y: -2 } : {}}
                whileTap={status === 'idle' || status === 'error' ? { scale: 0.98 } : {}}
              >
                {status === 'loading' && (
                  <Motion.div
                    className="w-6 h-6 border-2 border-neon-cyan border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                )}
                {status === 'loading' ? 'Transmitting...' : 'Send Message'}
              </Motion.button>

              {/* Status Messages */}
              {status === 'success' && (
                <Motion.div
                  className="text-center p-4 glass-morphism rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-neon-green text-lg font-semibold mb-2">
                    ✅ Message Transmitted Successfully!
                  </div>
                  <p className="text-gray-300 text-sm">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </Motion.div>
              )}
              
              {status === 'error' && (
                <Motion.div
                  className="text-center p-4 glass-morphism rounded-lg border border-red-500/30"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-red-400 text-lg font-semibold mb-2">
                    ❌ Transmission Failed
                  </div>
                  <p className="text-gray-300 text-sm">
                    Something went wrong. Please try again.
                  </p>
                </Motion.div>
              )}
            </form>
          </Motion.div>

          {/* Contact Info */}
          <Motion.div
            className="mt-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 font-mono text-sm mb-4">
              Or reach me directly at:
            </p>
            <a
              href="mailto:sepiidehpakseresht@gmail.com"
              className="text-neon-cyan hover:text-neon-purple transition-colors duration-300 font-mono"
            >
              sepiidehpakseresht@gmail.com
            </a>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Contact;
