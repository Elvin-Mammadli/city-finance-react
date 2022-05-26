import "./valuesCard.css";

const ValuesCard = ({ heading, text, icon }) => {
  return (
    <div className="values-card">
      <img src={icon} alt="cart-icon" />
      <h3>{heading}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ValuesCard;
