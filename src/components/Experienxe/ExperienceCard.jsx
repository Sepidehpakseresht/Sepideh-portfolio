import { motion as Motion } from 'framer-motion';

const ExperienceCard = ({ title, description, link }) => {
  return (
    <Motion.div
      className="bg-gray-800 border border-cyan-500 rounded-lg p-6 w-full max-w-sm shadow-lg hover:shadow-cyan-600 transition duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-semibold text-cyan-400 mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 underline text-sm hover:text-cyan-400 transition"
        >
          View Project →
        </a>
      )}
    </Motion.div>
  );
};

export default ExperienceCard;
