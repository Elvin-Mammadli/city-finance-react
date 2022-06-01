import "./servicesCard.css";
import Button from "../Button/Button";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 2 } },
  hidden: { opacity: 0 },
};

const ServicesCard = ({ image, heading, period }) => {
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
      className="services-card"
      whileHover={{
        scale: 0.95,
        transition: { duration: 0.4 },
      }}
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="services-card-top">
        <img src={image} alt={`${image}`} />
      </div>
      <div className="services-card-bottom">
        <h6>{heading}</h6>
        <div className="text-row">
          <div className="text-left">
            <span>Müddət: </span>
            <span>{period}</span>
          </div>
          <div className="text-right">
            <span>Valyuta: </span>
            <span>₼</span>
          </div>
        </div>
        <Button text="Sifariş et" style={{ width: "100%" }} />
      </div>
    </motion.div>
  );
};

export default ServicesCard;
