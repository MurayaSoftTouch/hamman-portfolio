import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getAllPortfolioData, submitContactForm } from './lib/supabase';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const portfolioData = await getAllPortfolioData();
        setData(portfolioData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching portfolio data:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            className="w-20 h-20 border-4 border-primary-500/30 border-t-primary-500 rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Loading portfolio... 🚀
          </motion.p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-400 mb-4">{error}</p>
          <p className="text-sm text-gray-500 mb-4">
            Make sure you have set up your Supabase credentials in .env file
          </p>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark-950 min-h-screen overflow-x-hidden">
      <Navigation />

      <main>
        <Hero
          profile={data?.profile}
          social={data?.profile?.social}
        />

        <About
          profile={data?.profile}
          education={data?.education}
        />

        <Skills skills={data?.skills} />

        <Experience experience={data?.experience} />

        <Projects projects={data?.projects} />

        <Contact
          profile={data?.profile}
          contact={data?.profile}
          onSubmitMessage={submitContactForm}
        />
      </main>

      <Footer profile={data?.profile} />
    </div>
  );
}

export default App;
