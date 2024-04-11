import { motion, useSpring } from "framer-motion";

const MotionValueComponent = () => {
  const scale  = useSpring(1);
  
  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="w-[100px] h-[100px] bg-red-500 rounded-[50px]"
        style={{ scale }}
      />
      <input
        type="range"
        className="mt-[50px] z-10"
        min={0.5}
        max={5}
        step={0.01}
        defaultValue={1}
        onChange={e => scale.set(parseFloat(e.target.value))}
      />
    </div>
  )
}

export default MotionValueComponent;