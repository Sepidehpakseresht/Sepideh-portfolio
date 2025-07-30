import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

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
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative w-full max-w-7xl mx-auto px-6 py-24 min-h-[60vh] flex flex-col items-center justify-center">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-display font-extrabold text-white mb-2">Contact</h2>
        <div className="w-16 h-1 mx-auto bg-primary rounded-full mb-2" />
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Let’s build something amazing together.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="glass rounded-2xl p-10 md:p-16 border border-glass-border shadow-orange w-full max-w-lg mx-auto"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-surface border border-glass-border rounded-lg text-white focus:outline-none focus-orange transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-surface border border-glass-border rounded-lg text-white focus:outline-none focus-orange transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 bg-surface border border-glass-border rounded-lg text-white focus:outline-none focus-orange transition"
          ></textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`w-full flex justify-center items-center gap-2 bg-primary text-white py-3 px-4 rounded-full font-semibold text-lg shadow-orange hover:shadow-orange transition-all duration-300 ${
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
            {status === 'success' ? (
              <>
                <FaCheckCircle className="text-white text-xl animate-bounce" /> Sent!
              </>
            ) : status === 'loading' ? 'Sending...' : 'Send Message'}
          </motion.button>
          {status === 'error' && (
            <p className="text-red-400 text-center">❌ Oops! Something went wrong. Try again.</p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
