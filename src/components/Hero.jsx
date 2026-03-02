import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';

function FloatingShape({ position, color, scale, speed = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2 * speed} rotationIntensity={2} floatIntensity={3}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial color={color} distort={0.4} speed={2} roughness={0.2} metalness={0.8} />
      </mesh>
    </Float>
  );
}

function FloatingSphere({ position, color, scale }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial color={color} distort={0.3} speed={3} roughness={0.1} metalness={0.9} />
      </mesh>
    </Float>
  );
}

function FloatingTorus({ position, color, scale }) {
  return (
    <Float speed={2} rotationIntensity={3} floatIntensity={2}>
      <mesh position={position} scale={scale}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  );
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />

      <FloatingShape position={[-4, 2, -2]} color="#6366f1" scale={0.5} speed={1.2} />
      <FloatingShape position={[4, -2, -1]} color="#8b5cf6" scale={0.4} speed={0.8} />
      <FloatingSphere position={[3, 3, -3]} color="#06b6d4" scale={0.3} />
      <FloatingSphere position={[-3, -3, -2]} color="#f472b6" scale={0.25} />
      <FloatingTorus position={[-5, -1, -4]} color="#fbbf24" scale={0.3} />
      <FloatingTorus position={[5, 1, -3]} color="#34d399" scale={0.25} />
    </>
  );
}

const Hero = ({ profile, social }) => {
  const containerRef = useRef();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const socialLinks = [
    { icon: FaGithub, href: social?.github, color: 'hover:text-white', label: 'GitHub' },
    { icon: FaLinkedin, href: social?.linkedin, color: 'hover:text-blue-400', label: 'LinkedIn' },
    { icon: FaTwitter, href: social?.twitter, color: 'hover:text-sky-400', label: 'Twitter' },
    { icon: FaEnvelope, href: `mailto:${profile?.email}`, color: 'hover:text-red-400', label: 'Email' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <Scene3D />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 via-dark-950/70 to-dark-950 z-0" />

      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{ y: [null, Math.random() * -100 - 50], opacity: [0, 1, 0] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 rounded-full glass text-primary-300 text-sm font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            👋 Welcome to my portfolio
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-white">I'm </span>
            <span className="gradient-text">{profile?.name}</span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {profile?.title} 🚀
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {profile?.tagline}
          </motion.p>

          <motion.div className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a href="#projects" className="btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              View My Work 💼
            </motion.a>
            <motion.a href="#contact" className="px-8 py-3 rounded-full border-2 border-primary-500 text-primary-400 font-semibold hover:bg-primary-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Get In Touch 📩
            </motion.a>
            <motion.a href="/Hamman_Muraya_Complete_CV.pdf" className="px-8 py-3 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <FaDownload /> Download CV
            </motion.a>
          </motion.div>

          <motion.div className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full glass flex items-center justify-center text-xl transition-all duration-300 ${link.color}`}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <link.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-white/50 rounded-full"
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
