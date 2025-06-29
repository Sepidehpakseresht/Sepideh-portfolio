import { motion as Motion } from "framer-motion";

function Footer() {
  return (
    <Motion.footer
      className="bg-gradient-to-b from-gray-950 to-gray-950 text-center py-5 text-white/50 text-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
    >
      Version 1.0 — <span className="text-cyan-200 font-medium">coded with 💙 and growing every day</span>
    </Motion.footer>
  );
}

export default Footer;
