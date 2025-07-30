import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="glass border-t border-glass-border shadow-neon-blue/20 backdrop-blur-xl text-center py-6 text-gray-400 text-sm w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
    >
      <span className="font-futura text-neon-blue">Sepideh Pakseresht</span> &mdash; <span className="text-neon-pink">Futuristic Portfolio</span> &mdash; <span className="text-neon-green">v1.0</span>
    </motion.footer>
  );
}

export default Footer;
