import { motion } from "framer-motion";

const ResponsiveComponent = () => {
  return (
    <div className="h-[400px] w-[200px] overflow-hidden p-4 flex flex-col rounded-[24px] bg-glass border-solid border-[1px] border-gray">
      <div className="h-full min-h-[140px] break-words overflow-hidden fadeout">
        <motion.p
          className="text-[76px] tracking-[20px] font-mono leading-[60px] origin-top-left"
          animate={{
            opacity: [0, 1, 1, 1, 1, 1, 0],
            scaleX: [1.5, 1.5, 2.5, 2.5, 2.5, 1.5, 1.5],
            scaleY: [1, 1, 1, 1.5, 1.5, 1.5, 8],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 3,
            time: [0, 0.05, 0.2, 0.3, 0.45, 0.7, 1]
          }}
          >
            responsive
          </motion.p>
      </div>
      <p className="font z-10 leading-relaxed">Make your animations work on all devices.</p>
    </div>
  )
}

export default ResponsiveComponent;