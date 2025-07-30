import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const form = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/xyzwrqoo', {
        method: 'POST',
        body: form,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 4000); 
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative w-full max-w-7xl mx-auto px-6 py-24 min-h-[60vh] flex items-center justify-center">
      <div className="w-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-10 md:p-16 border border-glass-border shadow-neon-blue/30 backdrop-blur-xl w-full max-w-xl mx-auto"
        >
          <h2 className="text-5xl font-futura font-bold neon-text-blue mb-8 text-center">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-surface border border-glass-border rounded-lg text-white focus:outline-none focus-neon transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-surface border border-glass-border rounded-lg text-white focus:outline-none focus-neon transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full px-4 py-3 bg-surface border border-glass-border rounded-lg text-white focus:outline-none focus-neon transition"
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full flex justify-center items-center gap-2 bg-gradient-to-r from-neon-blue to-neon-pink text-white py-3 px-4 rounded-full font-semibold text-lg shadow-neon-blue hover:shadow-neon-pink transition-all duration-300 ${
                status === 'loading' || status === 'success' ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              disabled={status === 'loading' || status === 'success'}
            >
              {status === 'loading' && (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              )}
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </motion.button>
            {status === 'success' && (
              <p className="text-green-400 text-center animate-pulse">
                ✅ Thank you! Your message has been sent.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center">❌ Oops! Something went wrong. Try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
