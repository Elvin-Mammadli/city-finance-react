import "./partners.css";
import kia from "../../assets/kia.svg";
import hyundai from "../../assets/hyundai.svg";
import ateshgah from "../../assets/ateshgah.svg";
import qala from "../../assets/qala.svg";
import subaru from "../../assets/subaru.svg";
import mazda from "../../assets/mazda.svg";
import PartnerBox from "../../components/PartnerBox/PartnerBox";
import AllButton from "../../assets/HamisiButton.svg";

const partnerLogos = [
  { image: kia },
  { image: hyundai },
  { image: ateshgah },
  { image: qala },
  { image: subaru },
  { image: mazda },
];

const Partners = () => {
  return (
    <div className="partners">
      <div className="partners-heading">
        <h2>Onlar bizə etibar edir</h2>
        <a href="#hamisi">
          <img src={AllButton} alt="Hamisi" />
        </a>
      </div>

      <div class="partners-logos">
        {partnerLogos.map((logo, index) => (
          <PartnerBox image={logo.image} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
