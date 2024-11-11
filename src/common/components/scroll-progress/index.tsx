'use client';

import { FC } from 'react';
import { motion, useScroll } from 'framer-motion';

/**
 * Scroll progress
 * @constructor
 */
const ScrollProgress: FC = () => {
  const { scrollYProgress } = useScroll();

  return <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />;
};

export default ScrollProgress;
