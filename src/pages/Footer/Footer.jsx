import "./footer.css";
import footerLogo from "../../assets/footer-logo.svg";
import facebook from "../../assets/Facebook.svg";
import twitter from "../../assets/Twitter.svg";
import instagram from "../../assets/Instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-boxes container">
        <div className="footer-column footer-logo-column">
          <div className="top">
            <img src={footerLogo} alt="city-finance-logo" />
            <p>
              Ünvan: Demirchi Tower, <br /> 17-ci mərtəbə
            </p>
          </div>
          <p>© 2022 All Rights Reserved</p>
        </div>
        <div className="footer-column footer-nav-column">
          <h4>Şirkət</h4>
          <ul>
            <li>
              <a href="#partners">Partnyorlarımız</a>
            </li>
            <li>
              <a href="#vacancies">Vakansiyalar</a>
            </li>
            <li>
              <a href="#raports">Hesabatlar</a>
            </li>
            <li>
              <a href="#campaigns">Kampaniyalar</a>
            </li>
          </ul>
        </div>
        <div className="footer-column footer-nav-column">
          <h4>Xidmətlər</h4>
          <ul>
            <li>
              <a href="#microloan">Mikrokredit</a>
            </li>
            <li>
              <a href="#lombard">Lombard krediti</a>
            </li>
            <li>
              <a href="#customer-loans">İstehlak krediti</a>
            </li>
            <li>
              <a href="#factoring">Faktorinq krediti</a>
            </li>
            <li>
              <a href="#leasing">Lizinq krediti</a>
            </li>
            <li>
              <a href="#auto-loan">Avtokredit</a>
            </li>
          </ul>
        </div>
        <div className="footer-column footer-contacts-column">
          <h4>Əlaqə</h4>
          <ul>
            <li>
              <a href="#partners">
                Tel: <br /> +99412 310 57 00
              </a>
            </li>
            <li>
              <a href="#vacancies">
                E-mail: <br /> info@cityfinance.az
              </a>
            </li>
            <div className="socials">
              <img src={facebook} alt="facebook-icon" />
              <img src={twitter} alt="facebook-icon" />
              <img src={instagram} alt="facebook-icon" />
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
