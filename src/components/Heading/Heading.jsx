import "./heading.css";
import Button from "../Button/Button";

const Heading = () => {
  return (
    <section className="heading">
      <div className="heading-left">
        <div className="heading-left-textbox">
          <h1>
            <span>Sərfəli </span>
            Kredit
          </h1>
          <p>“City Finance” uzun müddətli və aşağı faiz dərəcəli kredit təklifləri ilə bərabər rahat ödəmə üsulları da təklif edir.</p>
          <Button text="Ətraflı baxın" />
        </div>
      </div>
      <div className="heading-right">
      </div>
    </section>
  );
};

export default Heading;
