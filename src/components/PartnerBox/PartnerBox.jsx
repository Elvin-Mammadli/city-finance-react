import "./partnerBox.css";

const PartnerBox = ({ image }) => {
  return (
    <div className="partner-box">
      <img src={`${image}`} alt={`${image}`} />
    </div>
  );
};

export default PartnerBox;
