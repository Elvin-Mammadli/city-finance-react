import "./services.css";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import card1 from "../../assets/cardspic1.svg";
import card2 from "../../assets/cardspic2.svg";
import card3 from "../../assets/cardspic3.svg";
import card4 from "../../assets/cardspic4.svg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const servicesCard = [
  {
    id: 1,
    image: card1,
    heading: "Avtokredit",
    period: "1-3 il",
  },
  {
    id: 2,
    image: card2,
    heading: "Mikrokredit",
    period: "1-3 il",
  },
  {
    id: 3,
    image: card3,
    heading: "İstehlak krediti",
    period: "1-3 il",
  },
  {
    id: 4,
    image: card4,
    heading: "Lombard krediti",
    period: "1-3 il",
  },
  {
    id: 5,
    image: card1,
    heading: "Avtokredit",
    period: "1-3 il",
  },
  {
    id: 6,
    image: card2,
    heading: "Mikrokredit",
    period: "1-3 il",
  },
  {
    id: 7,
    image: card3,
    heading: "İstehlak krediti",
    period: "1-3 il",
  },
  {
    id: 8,
    image: card4,
    heading: "Lombard krediti",
    period: "1-3 il",
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2>Xidmətlərimiz</h2>
        <OwlCarousel className="owl-theme" items={4} margin={10}>
          {servicesCard.map((card) => (
            <ServicesCard
              key={card.id}
              image={card.image}
              heading={card.heading}
              period={card.period}
            />
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Services;
