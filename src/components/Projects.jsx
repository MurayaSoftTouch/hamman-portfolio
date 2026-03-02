import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

const ProjectCard = ({ project, index, isInView }) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 50, rotateX: -20 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, delay: index * 0.15, type: 'spring', stiffness: 80 } },
  };

  return (
    <motion.div className="group perspective-1000" variants={variants} initial="hidden" animate={controls}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

      <motion.div className="relative h-full glass rounded-2xl overflow-hidden cursor-pointer"
        whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5, transition: { duration: 0.3 } }}
        style={{ transformStyle: 'preserve-3d' }}>

        {project.featured && (
          <motion.div className="absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-bold text-white flex items-center gap-1"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: index * 0.15 + 0.5, type: 'spring' }}>
            <FaStar /> Featured
          </motion.div>
        )}

        <div className="relative h-48 overflow-hidden">
          <motion.img src={project.image} alt={project.name} className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.5 }} />

          <motion.div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent"
            initial={{ opacity: 0.5 }}
            animate={isHovered ? { opacity: 0.8 } : { opacity: 0.5 }} />

          <motion.div className="absolute inset-0 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}>
            <motion.a href={project.github_url} target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1, rotate: 360 }} whileTap={{ scale: 0.9 }}>
              <FaGithub className="text-xl" />
            </motion.a>
            <motion.a href={project.live_url} target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 flex items-center justify-center text-white"
              whileHover={{ scale: 1.1, rotate: 360 }} whileTap={{ scale: 0.9 }}>
              <FaExternalLinkAlt />
            </motion.a>
          </motion.div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{project.name}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags?.slice(0, 4).map((tag, i) => (
              <motion.span key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/20 text-primary-300 border border-primary-500/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.15 + i * 0.05 + 0.3 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.3)', y: -2 }}
              >
                {tag}
              </motion.span>
            ))}
            {project.tags?.length > 4 && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-500/20 text-gray-400">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>

        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ boxShadow: '0 0 40px rgba(99, 102, 241, 0.3)' }} />
      </motion.div>
    </motion.div>
  );
};

const Projects = ({ projects }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState('all');

  const allTags = ['all', ...new Set(projects?.flatMap(p => p.tags || []).slice(0, 5))];
  const filteredProjects = filter === 'all' ? projects : projects?.filter(p => p.tags?.includes(filter));

  return (
    <section id="projects" className="relative py-20 overflow-hidden" ref={ref}>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">🚀 Featured Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-white">Things I've </span>
            <span className="gradient-text">Built</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">A showcase of my best work in AI, backend systems, and full-stack development</p>
        </motion.div>

        <motion.div className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {allTags.map((tag, index) => (
            <motion.button key={tag} onClick={() => setFilter(tag)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === tag ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white' : 'glass text-gray-300 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.05 }}
            >
              {tag === 'all' ? '📋 All' : tag}
            </motion.button>
          ))}
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects?.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a href="https://github.com/MurayaSoftTouch" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <FaGithub />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
