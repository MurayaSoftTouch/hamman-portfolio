import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Building, Calendar, MapPin, Sparkles, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const WorkHistory = () => {
  const containerRef = useRef(null);
  const { theme } = useTheme();
  const [expandedId, setExpandedId] = useState(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);

  // Mouse parallax
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  const workHistory = [
    {
      id: 1,
      company: "Leading AI Company",
      location: "Remote",
      role: "Expert Contributor (HLE Project)",
      period: "Oct 2025 – Feb 2026",
      icon: '🤖',
      color: 'from-emerald-400 to-cyan-400',
      responsibilities: [
        "Created expert-level question-answer pairs for the Humanity's Last Exam (HLE) benchmark in Computer Science and Engineering domains.",
        "Developed complex, multi-step reasoning problems that test AI models on deep understanding and precise thinking at a graduate level or higher.",
        "Provided detailed solutions and explanations adhering to strict formatting rules (LaTeX, Markdown) and domain-specific standards.",
        "Participated in peer review processes to ensure submission quality and adherence to project guidelines, defending submissions during adjudication when necessary.",
        "Ensured all content was original, non-routine, and self-contained without reliance on external tools or public archives."
      ]
    },
    {
      id: 2,
      company: "AI Training Platform",
      location: "Remote",
      role: "AI Trainer & Model Evaluator (Code & Math Projects)",
      period: "Aug 2025 – Feb 2026",
      icon: '🧠',
      color: 'from-blue-400 to-purple-400',
      responsibilities: [
        "Code Human Preference: Selected git repositories and iterated with AI models to produce production-ready code. Conducted rigorous technical reviews of AI-generated code snippets in Python and TypeScript, identifying logic errors and security vulnerabilities.",
        "Sigma Math Project: Created unique, original, and complex mathematical reasoning questions designed to stump AI models across subdomains like Graph Theory, Number Theory, and Calculus.",
        "Wrote detailed Chain-of-Thought explanations demonstrating step-by-step logical processes for complex problems, ensuring accuracy and factual correctness.",
        "Evaluated model responses against quality rubrics focusing on logic, correctness, naming, modularity, and error handling.",
        "Ensured all mathematical expressions were formatted correctly using LaTeX within Markdown editors."
      ]
    },
    {
      id: 3,
      company: "Global AI Services Company",
      location: "Remote",
      role: "Senior AI Trainer & Responsible AI Maker",
      period: "Jun 2025 – Jan 2026",
      icon: '⚖️',
      color: 'from-orange-400 to-red-400',
      responsibilities: [
        "Project Armadillo: Graded and rewrote AI responses for affective conversations, ensuring adherence to responsible AI requirements (deflection, disclaimers, limited engagement).",
        "Evaluated AI outputs on engagement, emotional support, and overall quality using a 1-5 scale within FT Studio.",
        "Knowledge Project: Contributed expert-level submissions in Computer Science and Mathematics domains, adhering to strict rate schedules and billing cycles.",
        "Data Annotation: Conducted AI data labeling, model evaluation, and prompt optimization for conversational AI models.",
        "Improved model performance by 20% through QA checks, metadata structuring, and supervised learning pipeline support.",
        "Ensured compliance with data privacy, AI ethics standards, and specific project guidelines regarding mental health and crisis deflection."
      ]
    },
    {
      id: 4,
      company: "International AI Company",
      location: "Remote, USA",
      role: "Senior AI Trainer & Software Engineer",
      period: "Jul 2023 – May 2025",
      icon: '💻',
      color: 'from-purple-400 to-pink-400',
      responsibilities: [
        "Lead Code Evaluator: Conducted rigorous technical reviews of AI-generated code snippets in Python and TypeScript, identifying logic errors, security vulnerabilities, and inefficiencies.",
        "RLHF Strategy: Ranked model responses and authored \"Gold Standard\" rewrites to train models on best practices, code readability, and modular design.",
        "Model Optimization: Designed complex, adversarial prompts to test model reasoning capabilities in edge cases (e.g., race conditions, memory leaks).",
        "Technical Documentation: Provided detailed, pedagogical rationales for every evaluation, teaching the model why specific solutions were superior."
      ]
    },
    {
      id: 5,
      company: "Standard Chartered Bank",
      location: "UK (Remote)",
      role: "Senior Backend Engineer (Contract)",
      period: "Dec 2022 – Jun 2023",
      icon: '🏦',
      color: 'from-cyan-400 to-blue-400',
      responsibilities: [
        "Built secure, high-performance backend services for a global banking platform using Elixir and Python.",
        "Designed versioned, backwards-compatible APIs consumed by millions of users, focusing on data consistency and latency reduction.",
        "Implemented advanced logging and monitoring to diagnose system bottlenecks in a distributed architecture."
      ]
    },
    {
      id: 6,
      company: "Power Financial Wellness",
      location: "Nairobi, Kenya",
      role: "Senior Backend Engineer (FinTech)",
      period: "Jul 2021 – Nov 2022",
      icon: '💰',
      color: 'from-emerald-400 to-green-400',
      responsibilities: [
        "Led the backend engineering for a high-traffic fintech platform serving thousands of users across East Africa.",
        "Built secure integrations with third-party payment gateways and mobile money providers.",
        "Translated complex financial product requirements into reliable, bug-free code, aligning technical decisions with business goals."
      ]
    },
    {
      id: 7,
      company: "Alsoug.com",
      location: "Khartoum, Sudan",
      role: "Senior Backend Engineer",
      period: "Apr 2020 – Jun 2021",
      icon: '🛒',
      color: 'from-blue-400 to-cyan-400',
      responsibilities: [
        "Led the migration from a monolithic legacy system to a modern service-oriented architecture, improving system uptime.",
        "Established automated testing pipelines to ensure code quality during rapid release cycles."
      ]
    },
    {
      id: 8,
      company: "Gladys Technologies",
      location: "Nairobi, Kenya",
      role: "Software Engineer",
      period: "Apr 2017 – Mar 2020",
      icon: '🚀',
      color: 'from-purple-400 to-pink-400',
      responsibilities: [
        "Developed core REST and GraphQL APIs using Elixir and Phoenix that formed the backbone of multiple client applications.",
        "Implemented robust authentication (OAuth/JWT) systems for client applications."
      ]
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      ref={containerRef}
      id="experience"
      className={`py-24 relative overflow-hidden transition-colors duration-500 ${
        theme === 'light' 
          ? 'bg-gradient-to-br from-gray-50 via-purple-50/20 to-white' 
          : 'bg-gradient-to-br from-gray-900 via-purple-950/20 to-black'
      }`}
    >
      {/* Animated Grid */}
      <div className={`absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:50px_50px] ${
        theme === 'light' ? 'opacity-50' : 'opacity-100'
      }`} />

      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.08),transparent_70%)]" />

      {/* Floating Particles */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-purple-500/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/15 rounded-full mix-blend-screen filter blur-3xl opacity-30"
        animate={{ scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full mix-blend-screen filter blur-3xl opacity-30"
        animate={{ scale: [1, 1.3, 1], x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Mouse Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(500px circle at ${50 + mousePosition.x * 50}% ${50 + mousePosition.y * 50}%, rgba(168, 85, 247, 0.08), transparent 40%)`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4 ${
              theme === 'light' 
                ? 'bg-purple-100/50 border-purple-300' 
                : 'bg-purple-500/10 border-purple-500/30'
            }`}
          >
            <Sparkles className={`w-4 h-4 ${
              theme === 'light' ? 'text-purple-600' : 'text-purple-400'
            }`} />
            <span className={`text-sm font-medium ${
              theme === 'light' ? 'text-purple-700' : 'text-purple-400'
            }`}>Career Journey</span>
          </motion.div>

          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            theme === 'light' ? 'text-gray-900' : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-300% animate-gradient-shift'
          }`}>
            Work History
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={`${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            } max-w-3xl mx-auto text-lg`}
          >
            A track record of building exceptional products and leading engineering teams
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-6"
          />
        </motion.div>

        {/* Timeline - Vertical Layout */}
        <div className="max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 md:-translate-x-1/2 ${
            theme === 'light' ? 'opacity-50' : 'opacity-100'
          }`} />

          {/* Timeline Items */}
          {workHistory.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-8 md:mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                className={`absolute top-0 w-12 h-12 rounded-full bg-gradient-to-br ${job.color} flex items-center justify-center shadow-lg z-10 ${
                  index % 2 === 0 ? 'right-0 md:right-auto md:-translate-x-1/2 md:left-1/2' : 'left-0 md:left-1/2 md:-translate-x-1/2'
                }`}
                style={{
                  boxShadow: `0 10px 30px -10px rgba(168, 85, 247, 0.5)`
                }}
              >
                <span className="text-2xl">{job.icon}</span>
              </motion.div>

              {/* Content Card */}
              <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                className={`ml-16 md:ml-0 p-6 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                } ${
                  theme === 'light'
                    ? 'bg-white border border-gray-200 hover:border-purple-300'
                    : 'bg-gray-800/80 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40'
                }`}
                onClick={() => toggleExpand(job.id)}
              >
                {/* Header */}
                <div className="mb-4">
                  <motion.h3
                    className={`text-lg font-bold mb-1 bg-gradient-to-r ${job.color} bg-clip-text text-transparent`}
                  >
                    {job.role}
                  </motion.h3>
                  <p className={`font-semibold flex items-center gap-2 ${
                    theme === 'light' ? 'text-gray-800' : 'text-gray-200'
                  }`}>
                    <Building className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    {job.company}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm">
                    <span className={`flex items-center gap-1 ${
                      theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      <Calendar className="w-3 h-3 text-purple-400" />
                      {job.period}
                    </span>
                    <span className={`flex items-center gap-1 ${
                      theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      {job.location}
                    </span>
                  </div>
                </div>

                {/* Expand Indicator */}
                <motion.div
                  className={`flex items-center gap-2 text-sm mb-4 ${
                    theme === 'light' ? 'text-purple-600' : 'text-purple-400'
                  }`}
                >
                  <span>{expandedId === job.id ? 'Show Less' : 'View Details'}</span>
                  <motion.div
                    animate={{ rotate: expandedId === job.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.div>

                {/* Responsibilities */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedId === job.id ? 'auto' : 0,
                    opacity: expandedId === job.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={expandedId === job.id ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className={`w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5 ${
                          theme === 'light' ? 'text-emerald-600' : 'text-emerald-400'
                        }`} />
                        <span className={`flex-1 leading-relaxed ${
                          theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                        }`}>
                          {resp}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Corner decoration */}
                <motion.div
                  className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${job.color} rounded-full blur-2xl opacity-10`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 relative"
        >
          <div className={`absolute inset-0 rounded-3xl blur-3xl ${
            theme === 'light' 
              ? 'bg-gradient-to-r from-purple-200/30 via-pink-200/30 to-purple-200/30' 
              : 'bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5'
          }`} />

          <div className={`relative p-8 rounded-3xl border text-center ${
            theme === 'light'
              ? 'bg-white/70 backdrop-blur-xl border-purple-200'
              : 'bg-white/5 backdrop-blur-xl border-purple-500/20'
          }`}>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="text-6xl mb-4"
            >
              🚀
            </motion.div>
            <h3 className={`text-2xl font-bold mb-2 ${
              theme === 'light' ? 'text-purple-600' : 'text-purple-400'
            }`}>Ready to Build Something Amazing?</h3>
            <p className={`mb-6 max-w-2xl mx-auto ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              Let's collaborate and bring your vision to life with cutting-edge technology and expertise
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkHistory;
