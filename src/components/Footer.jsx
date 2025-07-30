import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="w-full text-center py-6 text-gray-400 text-sm border-t border-glass-border bg-background"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
    >
      <span className="font-display text-primary font-bold">Sepideh Pakseresht</span>
      <span className="mx-2 text-primary">•</span>
      <span className="font-semibold">Modern Portfolio</span>
      <span className="mx-2 text-primary">•</span>
      <span>v1.0</span>
    </motion.footer>
  );
}

export default Footer;
