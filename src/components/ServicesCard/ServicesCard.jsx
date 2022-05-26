import "./servicesCard.css";
import Button from "../Button/Button";

const ServicesCard = ({ image, heading, period }) => {
  return (
    <div className="services-card">
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
    </div>
  );
};

export default ServicesCard;
