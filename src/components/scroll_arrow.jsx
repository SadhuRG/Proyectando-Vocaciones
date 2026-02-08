import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa'; // Instala: npm i react-icons

const ScrollArrow = ({ onClick }) => (
  <motion.div
    className="scroll_arrow"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    onClick={onClick}
  >
    <FaArrowDown size={20} color="#6A1B9A" />
  </motion.div>
);

export default ScrollArrow;