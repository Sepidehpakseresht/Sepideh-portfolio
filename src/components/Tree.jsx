import { useEffect, useState } from 'react';
import tree1 from '../assets/tree-stage-1.png';
import tree2 from '../assets/tree-stage-2.png';
import tree3 from '../assets/tree-stage-3.png';

const Tree = () => {
  const [stage, setStage] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 300) {
        setStage(1); 
      } else if (scrollY >= 300 && scrollY < 600) {
        setStage(2); 
      } else {
        setStage(3);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getImage = () => {
    if (stage === 1) return tree1;
    if (stage === 2) return tree2;
    return tree3;
  };

  return (
    <section className="min-h-screen flex justify-center items-center bg-gray-900 transition-all duration-700 ease-in-out">
      <img
        src={getImage()}
        alt={`Tree stage ${stage}`}
        className="w-[300px] sm:w-[400px] md:w-[500px] transition-all duration-700 ease-in-out"
      />
    </section>
  );
};

export default Tree;
