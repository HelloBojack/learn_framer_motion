import { useRef } from 'react';
import { motion, useMotionValue, useTransform } from "framer-motion";

const DragComponent = () => {
  const constraintsRef = useRef(null)

  const x = useMotionValue(0);
  const scale = useTransform(x, [-500, 0, 500], [0, 1, 0]);
  const backgroundColor = useTransform(x, [-500, 0, 500], ["#ff0000", "#000000", "#00ff00"]);

  return (
    <motion.div
      ref={constraintsRef}
      className='border border-gray-400 w-64 h-64 flex items-center justify-center'
      >
      <motion.div
        className="border border-gray-400 w-24 h-24 rounded-[50%] flex items-center justify-center"
        drag="x"
        style={{ x, scale, backgroundColor }}
        dragSnapToOrigin
        dragConstraints={constraintsRef}
        // whileDrag={{ scale }}
      >
        Drag me
      </motion.div>
    </motion.div>
  )
}

export default DragComponent;