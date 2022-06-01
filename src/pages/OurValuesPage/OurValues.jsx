import ValuesCard from "../../components/ValuesCard/ValuesCard";
import "./ourValues.css";
import cartIcon from "../../assets/cart-icon.svg";
import purposeIcon from "../../assets/purpose-icon.svg";
import goalsIcon from "../../assets/goals-icon.svg";

const cardDatas = [
  {
    id: 1,
    icon: cartIcon,
    heading: "Missiyamız",
    text: "Müştərilərə daha keyfiyyətli xidmət vermək, bizneslərə layihələrində dəyər qatmaq və ölkə iqtisadiyyatına dəstək olmaq.",
  },
  {
    id: 2,
    icon: purposeIcon,
    heading: "Məqsədimiz",
    text: "Müştərilərə maksimal dərəcədə faydalı olmaq.",
  },
  {
    id: 3,
    icon: goalsIcon,
    heading: "Hədəfimiz",
    text: "Qabaqcıl və daha güclü maliyyə qurumuna çevrilmək.",
  },
];

const OurValues = () => {
  return (
    <section className="our-values">
      <div className="our-values-box container">
        {cardDatas.map((card) => (
          <ValuesCard
            key={card.id}
            icon={card.icon}
            heading={card.heading}
            text={card.text}
          />
        ))}
      </div>
    </section>
  );
};

export default OurValues;
