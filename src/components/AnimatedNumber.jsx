import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedNumber = ({ value }) => {
  const controls = useAnimation();
  const [number, setNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        number: value,
        transition: { duration: 2, ease: "easeInOut" }
      });
    }
  }, [controls, value, isVisible]);

  return (
    <motion.span
      ref={ref}
      animate={controls}
      initial={{ number: 0 }}
      onUpdate={(latest) => setNumber(latest.number.toFixed(0))}
    >
      {number}
    </motion.span>
  );
};

export default AnimatedNumber;
