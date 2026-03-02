import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const SkillCard = ({ skill, index, isInView }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 50, rotateX: -30 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 100 } },
  };

  return (
    <motion.div className="group perspective-1000" variants={variants} initial="hidden" animate={controls}>
      <motion.div className="relative h-40 glass rounded-2xl p-6 cursor-pointer transform-style-3d"
        whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `radial-gradient(circle at center, ${skill.color}20 0%, transparent 70%)` }} />

        <div className="relative z-10 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <motion.div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{ background: `${skill.color}20` }}
              whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }}>
              <i className={`${skill.icon}`} style={{ color: skill.color }} />
            </motion.div>
            <span className="text-3xl">{skill.emoji}</span>
          </div>

          <h3 className="text-white font-semibold text-lg mb-3">{skill.name}</h3>

          <div className="mt-auto">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">Proficiency</span>
              <span className="text-white font-medium">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <motion.div className="skill-bar-fill"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1.5, delay: index * 0.1 + 0.3 }}
                style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)` }} />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ boxShadow: `0 0 30px ${skill.color}40` }} />
      </motion.div>
    </motion.div>
  );
};

const Skills = ({ skills }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-20 overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">⚡ Skills & Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-white">Technologies I </span>
            <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive toolkit for building modern, scalable applications and training AI models
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {skills?.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} isInView={isInView} />
          ))}
        </div>

        <motion.div className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="glass rounded-2xl p-8 inline-block">
            <div className="text-4xl mb-4">📚</div>
            <h4 className="text-xl font-semibold text-white mb-2">Always Learning</h4>
            <p className="text-gray-400 max-w-md">
              Currently exploring: <span className="gradient-text font-medium">Advanced LLM Architectures, Quantum Computing, Edge AI</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
