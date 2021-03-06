import "./campaigns.css";
import arrow_right from "../../assets/arrow-right.svg";
import GiftPic from "../../assets/gift.svg";
import FlowerPic from "../../assets/flower.svg";
import GoldPic from "../../assets/goldbar.svg";
import CampaignsCard from "../../components/CampaignsCard/CampaignsCard";

const campaigns = [
  {
    image: GiftPic,
    header: "Partnyorlarımızda Novruz bayramı kampaniyası",
    period: "28.03.2022",
  },
  {
    image: FlowerPic,
    header: "City finance-dan yaz sürprizləri",
    period: "25.04.2022",
  },
  {
    image: GoldPic,
    header: "Lombard krediti üzrə Kampaniya",
    period: "12.05.2022",
  },
];

const Campaigns = () => {
  return (
    <section className="campaigns">
      <div className="campaigns-box container">
        <div className="heading-row">
          <h2>Kampaniyalar</h2>
          <div className="allbtn">
            <a href="hamisi">Hamısı</a>
            <img className="arrow_right" src={arrow_right} alt="arrow right" />
          </div>
        </div>

        <div className="campaigns-cards">
          {campaigns.map(({ image, header, period }, index) => (
            <CampaignsCard
              key={index}
              image={image}
              header={header}
              period={period}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
