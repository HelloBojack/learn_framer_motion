import { motion } from "framer-motion";

export default function HoverComponent() {
  return <motion.button
    initial={{ opacity: 0.6 }}
    whileHover={{
      scale: 1.2,
      transition: { duration: 1 },
    }}
    whileTap={{ scale: 0.9 }}
    whileInView={{ opacity: 1 }}
  >
    Hover me
  </motion.button>
}