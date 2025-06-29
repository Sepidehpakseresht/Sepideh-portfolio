import React from 'react';

const courses = [
  {
    title: 'UI/UX Design — Rahnama College',
    description:
      'This course taught me the foundations of user interface and experience design. I learned about design thinking, wireframing, prototyping, and usability testing, while working on real product design cases. It deepened my understanding of how users interact with interfaces.',
  },
  {
    title: 'Product Management — Reforge',
    description:
      'In this course, I explored the full product lifecycle, prioritization strategies, stakeholder communication, and roadmap planning. It gave me hands-on insight into how to balance business goals with user needs in cross-functional tech teams.',
  },
  {
    title: 'Front-End Bootcamp — Coding Front',
    description:
      'This intensive bootcamp focused on HTML, CSS, JavaScript, SCSS, Bootstrap, Tailwind, Git, and React. I completed real projects including a portfolio and responsive landing pages, while improving my code structure, problem-solving, and UI/UX thinking as a junior developer.',
  },
];

const CoursesExperience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white"
    >
      <div className="max-w-4xl mx-auto text-center ">
        <h2 className="text-4xl font-bold text-white mb-10 glow-text">Experiences 📚</h2>
        <div className="space-y-12 text-left ">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-cyan-500 rounded-lg p-6 shadow-lg cursor-pointer hover:shadow-cyan-600 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">{course.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesExperience;
