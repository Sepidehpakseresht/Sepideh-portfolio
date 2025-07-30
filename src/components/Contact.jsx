import { useState } from 'react';
import RotatingSkillCircle from './RotatingSkillCircle';
import { sectionCircleData } from '../data/sectionData';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const contactData = sectionCircleData.contact;

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
    <section id="contact" className="relative min-h-auto flex items-center justify-center px-4 py-40 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Rotating Skills Circle for Contact section */}
      <div className="hidden lg:block">
        <RotatingSkillCircle
          skills={contactData.skills}
          title={contactData.title}
          size="small"
          position="left"
          autoRotate={true}
          rotationSpeed={35}
        />
      </div>
      
      <div className="w-full max-w-xl relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-white glow-text">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded modern-card hover-lift transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded modern-card hover-lift transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded modern-card hover-lift transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
          ></textarea>

          <button
            type="submit"
            className={`w-full flex justify-center items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded transition duration-300 hover-lift glow-border ${
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
          </button>

          {status === 'success' && (
            <p className="text-green-400 text-center animate-pulse">
              ✅ Thank you! Your message has been sent.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center">❌ Oops! Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
