import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const ExperienceCard = ({ experience, index, isInView, isLeft }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const variants = {
    hidden: { opacity: 0, x: isLeft ? -100 : 100, rotateY: isLeft ? -30 : 30 },
    visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.7, delay: index * 0.2, type: 'spring', stiffness: 80 } },
  };

  return (
    <motion.div className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'} mb-12`}
      variants={variants} initial="hidden" animate={controls}>

      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-cyan-500 transform -translate-x-1/2" />

      <motion.div className="absolute left-1/2 top-8 w-4 h-4 bg-primary-500 rounded-full transform -translate-x-1/2 z-10"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
        style={{ boxShadow: '0 0 20px rgba(99, 102, 241, 0.6)' }} />

      <motion.div className={`w-full md:w-[calc(50%-40px)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto md:text-right'}`}
        whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }}>

        <div className="glass rounded-2xl p-6 md:p-8 group hover:bg-white/5 transition-all duration-300">
          <div className={`flex items-center gap-3 mb-4 ${!isLeft ? 'md:justify-end' : ''}`}>
            <motion.div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center text-2xl"
              whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }}>
              🏢
            </motion.div>
            <div className={!isLeft ? 'md:text-right' : ''}>
              <h3 className="text-xl font-bold text-white">{experience.company}</h3>
              <p className="text-primary-400 font-medium">{experience.role}</p>
            </div>
          </div>

          <div className={`flex flex-wrap gap-4 text-sm text-gray-400 mb-4 ${!isLeft ? 'md:justify-end' : ''}`}>
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary-400" />
              {experience.location}
            </span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-primary-400" />
              {formatDate(experience.start_date)} - {experience.current ? 'Present' : formatDate(experience.end_date)}
            </span>
          </div>

          <p className="text-gray-300 mb-4 leading-relaxed">{experience.description}</p>

          {experience.achievements && (
            <ul className={`space-y-2 mb-4 ${!isLeft ? 'md:justify-end' : ''}`}>
              {experience.achievements.map((achievement, i) => (
                <motion.li key={i} className="text-gray-400 text-sm flex items-start gap-2"
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 + i * 0.1 + 0.5 }}
                  style={{ flexDirection: isLeft ? 'row' : 'row-reverse' }}
                >
                  <span className="text-green-400 flex-shrink-0">✓</span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          )}

          <div className={`flex flex-wrap gap-2 ${!isLeft ? 'md:justify-end' : ''}`}>
            {experience.technologies?.map((tech, i) => (
              <motion.span key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/20 text-primary-300 border border-primary-500/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2 + i * 0.05 + 0.7 }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 102, 241, 0.3)' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {experience.current && (
            <motion.div className={`absolute -top-3 ${isLeft ? '-right-3' : '-left-3'} px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-xs font-bold text-white`}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: index * 0.2 + 0.8, type: 'spring' }}>
              🟢 Current
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Experience = ({ experience }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-20 overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">💼 Work Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-white">My Professional </span>
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">8+ years of building scalable systems and training AI models</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {experience?.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} isInView={isInView} isLeft={index % 2 === 0} />
          ))}
        </div>

        <motion.div className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.a href="/Hamman_Muraya_Complete_CV.pdf" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <FaBriefcase />
            Download Full CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
