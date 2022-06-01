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
  const [isActive, setIsActive] = useState(true);
  
  return (
    <nav>
      <div className="navigations-box container">
        <a href="#home">
          <img src={Logo} alt="Logo" />
        </a>
        <div className="navigations">
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
        <div class={isActive ? "hamburger is-active" : "hamburger"} onClick={() => setIsActive(prev => !prev)}>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
