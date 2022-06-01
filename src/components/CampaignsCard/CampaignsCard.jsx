import "./campaignsCard.css";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const boxVariant = {
  visible: { opacity: 1, rotate: 360 },
  hidden: { opacity: 0, rotate: 180 },
};

const CampaignsCard = ({ image, header, period }) => {
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
      className="campaigns-card"
      whileHover={{
        scale: 0.95,
        transition: { duration: 0.4 },
      }}
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      <div className="campaigns-card-top">
        <img src={image} alt={`${image}`} />
      </div>
      <div className="campaigns-card-bottom">
        <h6>{header}</h6>
        <p>⏱ {period}</p>
      </div>
    </motion.div>
  );
};

export default CampaignsCard;
