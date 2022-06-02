import "./navbar.css";
import Button from "../Button/Button";
import Logo from "../../assets/logo.svg";
import SearchIcon from "../../assets/search.svg";
import { useState } from "react";

const menus = [
  { id: 1, name: "Haqqımızda" },
  { id: 2, name: "Xidmətlər" },
  { id: 3, name: "Kampaniyalar" },
  { id: 4, name: "Partnyorlarımız" },
];

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleBurger = e => {
    // e.stopPropogation();
    setIsActive(prev => !prev);
  }

  return (
    <nav>
      <div className="navigations-box container">
        <a href="#home">
          <img src={Logo} alt="Logo" />
        </a>
        <div className={isActive ? "overlay" : null} onClick={toggleBurger}>
          <div className={isActive ? "navigations hamburger-active" : "navigations"}>
            <ul>
              {menus.map((menu) => (
                <li className="nav-link-ltr" key={menu.id}>
                  <a href={`#${menu.name}`}>{menu.name}</a>
                </li>
              ))}
            </ul>
            <a href="search">
              <img src={SearchIcon} alt="Search" />
            </a>
            <Button text="Kredit sifarişi" />
          </div>
        </div>
        {
          window.innerWidth <= 992 && (
            <div className={isActive ? "hamburger is-active" : "hamburger"} onClick={toggleBurger}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;
