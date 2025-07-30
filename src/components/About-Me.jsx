import { motion } from 'framer-motion';
import { FaUserGraduate, FaCode, FaRocket, FaBriefcase } from 'react-icons/fa';

const milestones = [
  {
    icon: <FaUserGraduate className="text-primary text-2xl" />,
    title: 'UI/UX Design',
    desc: 'Learned design thinking, wireframing, and usability.',
    year: '2019',
  },
  {
    icon: <FaBriefcase className="text-primary text-2xl" />,
    title: 'Product Management',
    desc: 'Balanced user needs with technical realities.',
    year: '2020',
  },
  {
    icon: <FaCode className="text-primary text-2xl" />,
    title: 'Front-End Dev',
    desc: 'Building modern, interactive web apps.',
    year: '2021',
  },
  {
    icon: <FaRocket className="text-primary text-2xl" />,
    title: 'UI Engineer',
    desc: 'Delivering stunning UI with React & Three.js.',
    year: '2023',
  },
];

const About = () => (
  <section id="about" className="relative w-full max-w-7xl mx-auto px-6 py-24 min-h-[60vh] flex flex-col items-center">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-display font-extrabold text-white mb-2">About</h2>
      <div className="w-16 h-1 mx-auto bg-primary rounded-full mb-2" />
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        My journey in tech, from design to code.
      </p>
    </div>
    <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center">
      {/* Orange timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/40 rounded-full -translate-x-1/2 z-0" />
      <div className="relative z-10 flex flex-col gap-16 w-full">
        {milestones.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-8 w-full"
          >
            <div className="flex flex-col items-center min-w-[60px]">
              <div className="glass rounded-full w-14 h-14 flex items-center justify-center mb-2 border-2 border-primary shadow-orange">
                {m.icon}
              </div>
              <span className="text-xs text-primary font-bold">{m.year}</span>
            </div>
            <div className="glass rounded-xl p-6 border border-glass-border shadow-orange flex-1">
              <div className="font-display font-bold text-lg text-white mb-1">{m.title}</div>
              <div className="text-gray-300 text-base">{m.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
