import "./navbar.css";
import Button from "../Button/Button";
import Logo from "../../assets/logo.svg";
import SearchIcon from "../../assets/search.svg";

const menus = [
  { id: 1, name: "Haqqımızda" },
  { id: 2, name: "Xidmətlər" },
  { id: 3, name: "Kampaniyalar" },
  { id: 4, name: "Partnyorlarımız" },
];

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="#home">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <div className="navigations">
        <ul>
          {menus.map((menu) => (
            <li key={menu.id}>
              <a href={`#${menu.name}`}>{menu.name}</a>
            </li>
          ))}
        </ul>
        <a href="search">
          <img src={SearchIcon} alt="Search" />
        </a>
        <Button text="Kredit sifarişi" />
      </div>
      <div className="burger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
