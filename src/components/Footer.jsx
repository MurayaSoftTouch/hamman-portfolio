import { motion } from 'framer-motion';
import { FaHeart, FaArrowUp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = ({ profile }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'fa-github', href: profile?.social?.github, color: 'hover:text-white' },
    { name: 'LinkedIn', icon: 'fa-linkedin', href: profile?.social?.linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: 'fa-twitter', href: profile?.social?.twitter, color: 'hover:text-sky-400' },
    { name: 'Email', icon: 'fa-envelope', href: `mailto:${profile?.email}`, color: 'hover:text-red-400' },
  ];

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: profile?.email },
    { icon: FaPhone, label: 'Phone', value: profile?.phone },
    { icon: FaMapMarkerAlt, label: 'Location', value: profile?.location },
  ];

  return (
    <footer className="relative pt-16 pb-8 border-t border-white/10 bg-gradient-to-t from-dark-950 via-dark-950 to-dark-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-3xl font-black gradient-text mb-2">
                {profile?.name?.split(' ')[0]}.dev
              </h3>
              <p className="text-sm text-primary-400 font-medium">
                {profile?.title}
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building digital experiences that matter. Specialized in AI training,
              scalable systems, and full-stack development.
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-xl glass flex items-center justify-center text-gray-400 transition-all duration-300 ${link.color}`}
                  whileHover={{ scale: 1.15, y: -5, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  title={link.name}
                >
                  <i className={`fa-brands ${link.icon} text-xl`} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="text-primary-400">🔗</span> Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-primary-500 to-purple-500 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="text-primary-400">📬</span> Contact
            </h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="flex items-start gap-3 group"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary-500 group-hover:to-purple-500 transition-all duration-300">
                    <info.icon className="text-primary-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-1">{info.label}</p>
                    <p className="text-gray-300 text-sm group-hover:text-white transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="text-primary-400">✨</span> Stay Connected
            </h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Subscribe to get updates on new projects, AI insights, and tech opportunities.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl glass bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 pr-12"
                />
                <motion.button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gradient-to-r from-primary-500 to-purple-500 flex items-center justify-center text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaEnvelope className="text-sm" />
                </motion.button>
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-500 to-purple-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe Now 🚀
              </motion.button>
            </form>
          </motion.div>
        </div>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 bg-dark-950">
              <span className="text-2xl">🦄</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-sm">
              © {currentYear} <span className="gradient-text font-semibold">{profile?.name}</span>.
              All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Made with <FaHeart className="inline text-red-500 mx-1" /> and <span className="text-amber-500">☕</span> •
              Powered by <span className="text-primary-400">React</span> + <span className="text-cyan-400">Supabase</span>
            </p>
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            className="group w-12 h-12 rounded-xl glass flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-purple-500 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FaArrowUp className="group-hover:translate-y-[-2px] transition-transform" />
          </motion.button>
        </div>

        <motion.div
          className="mt-8 pt-6 border-t border-white/5 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-xs mb-3">Built with modern technologies</p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <span className="px-3 py-1 rounded-full glass">⚛️ React</span>
            <span className="px-3 py-1 rounded-full glass">🎨 Tailwind CSS</span>
            <span className="px-3 py-1 rounded-full glass">📦 Bootstrap</span>
            <span className="px-3 py-1 rounded-full glass">🎬 Framer Motion</span>
            <span className="px-3 py-1 rounded-full glass">🗄️ Supabase</span>
            <span className="px-3 py-1 rounded-full glass">⚡ Vite</span>
            <span className="px-3 py-1 rounded-full glass">🚀 Netlify</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
