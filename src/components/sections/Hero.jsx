import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Download, Code, Cpu, Database, Sun, Moon, User, LogOut, Sparkles, Zap, Star, ArrowRight } from 'lucide-react';
import SocialLink from '../ui/SocialLink';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import LoginModal from '../common/LoginModal';
import PyramidAnimation from '../common/PyramidAnimation';
import { PERSONAL_INFO } from '../../constants/config';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const { theme, toggleTheme } = useTheme();
  const { currentUser, isAdmin, login, logout } = useAuth();
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const containerRef = useRef(null);

  // Scroll-based parallax effects
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Smooth mouse follow effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useSpring(mousePosition.x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(mousePosition.y, { stiffness: 500, damping: 100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typewriter effect texts
  const typewriterTexts = [
    "Your vision deserves exceptional execution. 🚀",
    "Let's build something remarkable together. 💡",
    "Ready to transform your ideas into reality? ✨",
    "Your success story starts with the right code. 🎯",
    "Innovation meets expertise right here. 🏆",
    "Let's create the future, one line at a time. ⚡"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentFullText = typewriterTexts[currentTextIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentFullText.length) {
          setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
          setTypingSpeed(100);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
          setTypingSpeed(50);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex, typingSpeed]);

  // Particle system - Victor's style with more particles
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  // Floating code snippets
  const codeSnippets = [
    { code: '<Component />', x: '10%', y: '20%', delay: 0 },
    { code: 'function build()', x: '85%', y: '15%', delay: 1 },
    { code: 'const success = true', x: '15%', y: '75%', delay: 2 },
    { code: 'return <Future />', x: '80%', y: '70%', delay: 3 },
    { code: 'AI.transform()', x: '50%', y: '10%', delay: 4 },
  ];

  // Stats with counter animation
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <>
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={login}
      />

      <section
        ref={containerRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Gradient Background - Green/Navy theme (Victor's style) */}
        <div className={`absolute inset-0 bg-gradient-to-br ${
          theme === 'light'
            ? 'from-emerald-900 via-green-900 to-emerald-950'
            : 'from-gray-900 via-emerald-950 to-black'
        }`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>

        {/* Floating Orbs - Muted green colors (Victor's style) */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-emerald-600/15 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-10 w-96 h-96 bg-green-600/15 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-96 h-96 bg-emerald-700/15 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Floating Particles - Victor's pulse style */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-emerald-400/40 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Decorative Lines (Victor's style) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
        </div>

        {/* Mouse Follow Spotlight */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(500px circle at ${50 + mouseX.get() * 50}% ${50 + mouseY.get() * 50}%, rgba(16, 185, 129, 0.08), transparent 40%)`,
          }}
        />

        {/* Control Buttons - Top Right */}
        <div className="absolute top-4 right-4 z-50 flex gap-2">
          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 shadow-lg cursor-pointer ${
              theme === 'light'
                ? 'bg-amber-100/80 border-amber-300 hover:border-amber-400 text-amber-600 hover:text-amber-700 hover:shadow-amber-500/25'
                : 'bg-white/10 border-emerald-500/20 hover:border-emerald-500/50 text-emerald-400 hover:text-emerald-300 hover:shadow-emerald-500/25'
            }`}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon className="w-6 h-6" />
            ) : (
              <Sun className="w-6 h-6" />
            )}
          </motion.button>

          {currentUser ? (
            <div className="flex items-center gap-2">
              <span className={`text-sm px-3 py-2 rounded-full border hidden sm:block ${
                theme === 'light'
                  ? 'bg-emerald-100/50 border-emerald-300 text-emerald-700'
                  : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
              }`}>
                {isAdmin ? 'Admin' : 'User'}: {currentUser.name}
              </span>
              <motion.button
                onClick={logout}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 shadow-lg cursor-pointer ${
                  theme === 'light'
                    ? 'bg-red-100/80 border-red-300 hover:border-red-400 text-red-600 hover:text-red-700 hover:shadow-red-500/25'
                    : 'bg-white/10 border-red-500/20 hover:border-red-500/50 text-red-400 hover:text-red-300 hover:shadow-red-500/25'
                }`}
                aria-label="Logout"
              >
                <LogOut className="w-6 h-6" />
              </motion.button>
            </div>
          ) : (
            <motion.button
              onClick={() => setShowLoginModal(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 shadow-lg cursor-pointer ${
                theme === 'light'
                  ? 'bg-emerald-100/80 border-emerald-300 hover:border-emerald-400 text-emerald-600 hover:text-emerald-700 hover:shadow-emerald-500/25'
                  : 'bg-white/10 border-emerald-500/20 hover:border-emerald-500/50 text-emerald-400 hover:text-emerald-300 hover:shadow-emerald-500/25'
              }`}
              aria-label="Login"
            >
              <User className="w-6 h-6" />
            </motion.button>
          )}
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          style={{ opacity, scale }}
          className="relative z-10 container mx-auto px-4 py-16"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div variants={itemVariants} className="text-center lg:text-left flex-1">
              {/* Greeting Badge - Victor's style */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className={`inline-flex items-center gap-2 px-4 py-2 backdrop-blur-md rounded-full border mb-6 ${
                  theme === 'light'
                    ? 'bg-white/20 border-emerald-300/50'
                    : 'bg-white/10 border-emerald-500/30'
                }`}
              >
                <span className="text-2xl">👋</span>
                <span className={`font-medium ${theme === 'light' ? 'text-emerald-800' : 'text-white/90'}`}>
                  Welcome to my portfolio
                </span>
              </motion.div>

              {/* Name with Glow - Victor's style */}
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="block">Hello, I'm</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-green-300 to-emerald-400 drop-shadow-2xl">
                  {PERSONAL_INFO.name}
                </span>
              </motion.h1>

              {/* Title with Animated Background - Victor's style */}
              <motion.p
                className="text-xl md:text-2xl text-white/90 mb-8 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className={`inline-block px-6 py-3 backdrop-blur-md rounded-xl border ${
                  theme === 'light'
                    ? 'bg-emerald-600/20 border-emerald-500/30'
                    : 'bg-white/10 border-emerald-500/30'
                }`}>
                  💻 {PERSONAL_INFO.title}
                </span>
              </motion.p>

              {/* Description - Victor's style */}
              <motion.p
                className={`text-lg mb-10 max-w-xl mx-auto lg:mx-0 ${
                  theme === 'light' ? 'text-white/70' : 'text-white/80'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Passionate about creating innovative solutions through technology. Specializing in AI training, software development, and scalable systems.
              </motion.p>

              {/* CTA Buttons - Victor's style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
              >
                <a
                  href="#projects"
                  className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-700 text-white font-bold rounded-full shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300 overflow-hidden text-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    View My Work
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a
                  href="#contact"
                  className={`group px-8 py-4 font-bold rounded-full border-2 transition-all duration-300 text-lg ${
                    theme === 'light'
                      ? 'bg-white/20 border-emerald-400 text-emerald-800 hover:bg-white/30'
                      : 'bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white/20'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-2xl">📬</span>
                    Contact Me
                  </span>
                </a>
              </motion.div>

              {/* Social Links - Victor's style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex items-center justify-center lg:justify-start gap-4"
              >
                <span className={`text-sm ${theme === 'light' ? 'text-white/60' : 'text-white/70'}`}>
                  Follow me:
                </span>
                <motion.a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`group w-12 h-12 backdrop-blur-md rounded-full flex items-center justify-center border transition-all duration-300 ${
                    theme === 'light'
                      ? 'bg-white/20 border-emerald-300/50 hover:bg-gradient-to-br hover:from-emerald-600 hover:to-green-700'
                      : 'bg-white/10 border-white/20 hover:bg-gradient-to-br hover:from-emerald-600 hover:to-green-700'
                  }`}
                  title="Send Email"
                >
                  <span className="text-xl group-hover:animate-bounce">📧</span>
                </motion.a>
                <motion.a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`group w-12 h-12 backdrop-blur-md rounded-full flex items-center justify-center border transition-all duration-300 ${
                    theme === 'light'
                      ? 'bg-white/20 border-emerald-300/50 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-800'
                      : 'bg-white/10 border-white/20 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-800'
                  }`}
                  title="Connect on LinkedIn"
                >
                  <span className="text-xl group-hover:animate-bounce">💼</span>
                </motion.a>
                <motion.a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`group w-12 h-12 backdrop-blur-md rounded-full flex items-center justify-center border transition-all duration-300 ${
                    theme === 'light'
                      ? 'bg-white/20 border-emerald-300/50 hover:bg-gradient-to-br hover:from-emerald-700 hover:to-green-800'
                      : 'bg-white/10 border-white/20 hover:bg-gradient-to-br hover:from-emerald-700 hover:to-green-800'
                  }`}
                  title="Follow on GitHub"
                >
                  <span className="text-xl group-hover:animate-bounce">👨‍💻</span>
                </motion.a>
              </motion.div>

              {/* Quick Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className={`mt-8 flex flex-wrap gap-4 justify-center lg:justify-start text-sm ${
                  theme === 'light' ? 'text-white/60' : 'text-white/70'
                }`}
              >
                <motion.a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  whileHover={{ scale: 1.05, color: '#34d399' }}
                  className="flex items-center gap-2 transition-colors hover:text-emerald-400"
                >
                  <Mail className="w-4 h-4" />
                  {PERSONAL_INFO.email}
                </motion.a>
                <span className="hidden sm:inline">•</span>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2"
                >
                  <Star className="w-4 h-4 text-yellow-500" />
                  Top Rated Developer
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Right Side - Pyramid + Typewriter */}
            <motion.div
              variants={itemVariants}
              className="relative flex flex-col items-center gap-6"
              style={{ y: y2 }}
            >
              {/* Decorative Ring */}
              <motion.div
                className={`absolute inset-0 rounded-full border ${
                  theme === 'light' ? 'border-emerald-300/30' : 'border-emerald-500/10'
                }`}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ width: 400, height: 400, left: '50%', top: '50%', marginLeft: -200, marginTop: -200 }}
              />
              <motion.div
                className={`absolute inset-0 rounded-full border ${
                  theme === 'light' ? 'border-cyan-300/30' : 'border-cyan-500/10'
                }`}
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ width: 350, height: 350, left: '50%', top: '50%', marginLeft: -175, marginTop: -175 }}
              />

              <PyramidAnimation />

              {/* Typewriter Effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 max-w-md mx-auto w-full"
              >
                <div className={`relative backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg ${
                  theme === 'light'
                    ? 'bg-emerald-50/80 border border-emerald-200 shadow-emerald-500/10'
                    : 'bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 shadow-emerald-500/10'
                }`}>
                  <div className="flex items-center gap-3">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-2xl"
                    >
                      💬
                    </motion.span>
                    <div className="flex-1">
                      <p className={`font-medium text-sm md:text-base min-h-[1.5rem] ${
                        theme === 'light' ? 'text-emerald-700' : 'text-emerald-300'
                      }`}>
                        {displayedText}
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          className={`inline-block w-0.5 h-5 ml-1 align-middle ${
                            theme === 'light' ? 'bg-emerald-600' : 'bg-emerald-400'
                          }`}
                        />
                      </p>
                    </div>
                  </div>
                  {/* Decorative corners */}
                  <div className={`absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 rounded-tl-lg ${
                    theme === 'light' ? 'border-emerald-400' : 'border-emerald-500/50'
                  }`} />
                  <div className={`absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 rounded-tr-lg ${
                    theme === 'light' ? 'border-emerald-400' : 'border-emerald-500/50'
                  }`} />
                  <div className={`absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 rounded-bl-lg ${
                    theme === 'light' ? 'border-emerald-400' : 'border-emerald-500/50'
                  }`} />
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 rounded-br-lg ${
                    theme === 'light' ? 'border-emerald-400' : 'border-emerald-500/50'
                  }`} />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Section with Counter Animation */}
          <motion.div
            ref={statsRef}
            variants={itemVariants}
            className="mt-20"
          >
            <div className="relative">
              {/* Background Glow */}
              <div className={`absolute inset-0 rounded-3xl blur-3xl ${
                theme === 'light' 
                  ? 'bg-gradient-to-r from-emerald-200/30 via-cyan-200/30 to-emerald-200/30' 
                  : 'bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-emerald-500/5'
              }`} />

              <div className={`relative grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl border ${
                theme === 'light'
                  ? 'bg-white/70 backdrop-blur-xl border-emerald-200'
                  : 'bg-white/5 backdrop-blur-xl border-emerald-500/10'
              }`}>
                {[
                  { number: '5+', label: 'Years Experience', icon: '🎯', color: 'from-emerald-400 to-cyan-400' },
                  { number: '50+', label: 'Projects Completed', icon: '🚀', color: 'from-cyan-400 to-blue-400' },
                  { number: '15+', label: 'Happy Clients', icon: '😊', color: 'from-purple-400 to-pink-400' },
                  { number: '10+', label: 'AI Models Trained', icon: '🤖', color: 'from-orange-400 to-red-400' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={statsVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className={`text-4xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, delay: index * 0.1, repeat: Infinity }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div
                      className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                      initial={{ opacity: 0 }}
                      animate={statsVisible ? { opacity: 1 } : {}}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className={`text-sm mt-1 ${
                      theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                    }`}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
