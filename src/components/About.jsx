import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaLaptopCode, FaCloud, FaDatabase } from 'react-icons/fa';

const About = ({ profile, education }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: '8+', label: 'Years Experience', icon: '🎯' },
    { number: '50+', label: 'Projects Completed', icon: '🚀' },
    { number: '30+', label: 'Happy Clients', icon: '😊' },
    { number: '15+', label: 'Technologies', icon: '⚡' },
  ];

  const focusAreas = [
    { icon: FaCode, title: 'Frontend Development', description: 'Building beautiful, responsive UIs with React and modern CSS', color: 'from-blue-500 to-cyan-500', emoji: '🎨' },
    { icon: FaLaptopCode, title: 'Backend Development', description: 'Creating robust APIs with Python, Elixir, and Node.js', color: 'from-purple-500 to-pink-500', emoji: '⚙️' },
    { icon: FaCloud, title: 'AI & Cloud', description: 'Training LLMs and deploying on AWS, Azure, GCP', color: 'from-orange-500 to-red-500', emoji: '🤖' },
    { icon: FaDatabase, title: 'Database Design', description: 'Designing efficient data models with PostgreSQL, Redis', color: 'from-green-500 to-teal-500', emoji: '🗄️' },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">👨‍💻 About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-white">Get to Know </span>
            <span className="gradient-text">Me Better</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ph.D. in Software Engineering with expertise in AI training and scalable systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="relative z-10 glass rounded-3xl p-8 overflow-hidden">
                <motion.img src={profile?.avatar} alt={profile?.name} className="w-full max-w-md mx-auto rounded-2xl" whileHover={{ scale: 1.02 }} />
              </div>
              <motion.div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-500 to-purple-500 rounded-2xl -z-10"
                animate={{ rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} />
              <motion.div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full -z-10"
                animate={{ rotate: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity }} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Hello! I'm <span className="gradient-text">{profile?.name}</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">{profile?.bio}</p>

            {education && education[0] && (
              <div className="glass rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center text-2xl flex-shrink-0">🎓</div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{education[0].degree}</h4>
                    <p className="text-primary-400">{education[0].institution}</p>
                    <p className="text-gray-400 text-sm mt-1">{education[0].field} • {education[0].grade}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-xl">📍</span>
                <span>{profile?.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-xl">✉️</span>
                <span>{profile?.email}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div key={stat.label} className="glass rounded-2xl p-6 text-center" whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {focusAreas.map((area, index) => (
            <motion.div key={area.title} className="group glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300" whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <area.icon className="text-2xl text-white" />
              </div>
              <div className="text-2xl mb-2">{area.emoji}</div>
              <h4 className="text-white font-semibold text-lg mb-2">{area.title}</h4>
              <p className="text-gray-400 text-sm">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
