import "./campaignsCard.css";

const CampaignsCard = ({ image, header, period }) => {
  return (
    <div className="campaigns-card">
      <div className="campaigns-card-top">
        <img src={image} alt={`${image}`} />
      </div>
      <div className="campaigns-card-bottom">
        <h6>{header}</h6>
        <p>⏱ {period}</p>
      </div>
    </div>
  );
};

export default CampaignsCard;
