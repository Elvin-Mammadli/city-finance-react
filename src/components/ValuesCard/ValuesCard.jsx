import "./valuesCard.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 0.8 } },
  hidden: { opacity: 0 },
};

const ValuesCard = ({ heading, text, icon }) => {
  const control = useAnimation();
  const { inView, ref } = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.4 },
        cursor: "pointer"
      }}
      className="values-card"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <img src={icon} alt="cart-icon" />
      <h3>{heading}</h3>
      <p>{text}</p>
    </motion.div>
  );
};

export default ValuesCard;
