import "./button.css";

const Button = ({ text, style }) => {
  return <button style={style}>{text}</button>;
};

export default Button;
