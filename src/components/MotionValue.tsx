import { motion, useMotionValue } from "framer-motion";

const MotionValueComponent = () => {
  const scale = useMotionValue(1);
  
  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="w-[100px] h-[100px] bg-red-500 rounded-[25px]"
        style={{ scale }}
        />
      <input
        type="range"
        className="mt-[50px] z-10"
        min={0.5}
        max={5}
        step={0.1}
        onChange={e => scale.set(e.target.value)}
      />
    </div>
  )
}

export default MotionValueComponent;