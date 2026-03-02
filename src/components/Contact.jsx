import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheck } from 'react-icons/fa';

const ContactInfo = ({ icon: Icon, label, value, href, index, isInView }) => {
  return (
    <motion.a href={href}
      className="group flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/5 transition-all duration-300"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15 }}
      whileHover={{ x: 10, scale: 1.02 }}
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="text-2xl text-white" />
      </div>
      <div>
        <p className="text-gray-400 text-sm">{label}</p>
        <p className="text-white font-medium group-hover:text-primary-400 transition-colors">{value}</p>
      </div>
    </motion.a>
  );
};

const Contact = ({ profile, contact, onSubmitMessage }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (onSubmitMessage) {
        await onSubmitMessage({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          status: 'unread'
        });
      }
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Error submitting message:', error);
      setIsSubmitting(false);
      alert('Failed to send message. Please try again.');
    }
  };

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: contact?.email || profile?.email, href: `mailto:${contact?.email || profile?.email}` },
    { icon: FaPhone, label: 'Phone', value: contact?.phone || profile?.phone, href: `tel:${contact?.phone || profile?.phone}` },
    { icon: FaMapMarkerAlt, label: 'Location', value: contact?.location || profile?.location, href: 'https://maps.google.com' },
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">📬 Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-white">Let's Work </span>
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Available for immediate employment. Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">👋</span> Contact Information
              </h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out through any of these channels. I'm always open to discussing new opportunities and projects.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <ContactInfo key={info.label} {...info} index={index} isInView={isInView} />
                ))}
              </div>

              <motion.div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }} />
                  <span className="text-green-400 font-medium">
                    {contact?.availability || profile?.availability || 'Available for immediate employment'}
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div className="glass rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">🌐 Follow Me</h3>
              <div className="flex gap-4">
                {['github', 'linkedin', 'twitter'].map((social, index) => (
                  <motion.a key={social} href={profile?.social?.[social]} target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-xl text-gray-400 hover:text-white hover:bg-primary-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -5, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <i className={`fa-brands fa-${social}`} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">✉️</span> Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }}>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Your Name 🙋</label>
                  <input type="text" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} required
                    className="w-full px-4 py-3 rounded-xl glass bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                    placeholder="John Doe" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 }}>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Your Email 📧</label>
                  <input type="email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} required
                    className="w-full px-4 py-3 rounded-xl glass bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                    placeholder="john@example.com" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8 }}>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Your Message 💬</label>
                  <textarea value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl glass bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..." />
                </motion.div>

                <motion.button type="submit" disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }} whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.9 }}
                >
                  {isSubmitting ? (
                    <><motion.div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} />Sending...</>
                  ) : isSubmitted ? (
                    <><FaCheck className="text-green-300" />Message Sent! ✅</>
                  ) : (
                    <><FaPaperPlane />Send Message</>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
