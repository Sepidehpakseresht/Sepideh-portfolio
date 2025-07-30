import React from 'react';
import { motion } from 'framer-motion';

const courses = [
  {
    title: 'UI/UX Design — Rahnama College',
    description:
      'Foundations of user interface and experience design: design thinking, wireframing, prototyping, and usability testing. Real product design cases and user research.',
    color: '#00D4FF',
  },
  {
    title: 'Product Management — Reforge',
    description:
      'Product lifecycle, prioritization, stakeholder communication, and roadmap planning. Hands-on insight into balancing business goals with user needs in tech teams.',
    color: '#FF0080',
  },
  {
    title: 'Front-End Bootcamp — Coding Front',
    description:
      'Intensive bootcamp: HTML, CSS, JavaScript, SCSS, Bootstrap, Tailwind, Git, React. Real projects, portfolio, and responsive landing pages. Improved code structure and UI/UX thinking.',
    color: '#7B2CBF',
  },
];

const CoursesExperience = () => {
  return (
    <section
      id="experience"
      className="relative w-full max-w-7xl mx-auto px-6 py-24 min-h-[60vh] flex items-center justify-center"
    >
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-futura font-bold neon-text-blue mb-4">Experience</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Courses and programs that shaped my approach to product, design, and code.
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl border border-glass-border shadow-neon-blue/30 backdrop-blur-xl group cursor-pointer flex flex-col h-full transition-all duration-300"
              whileHover={{ scale: 1.04, boxShadow: `0 0 32px ${course.color}, 0 0 64px #00D4FF` }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-8 flex-1 flex flex-col justify-between">
                <h3 className="text-lg font-futura font-bold mb-2" style={{ color: course.color }}>{course.title}</h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-4">{course.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesExperience;
