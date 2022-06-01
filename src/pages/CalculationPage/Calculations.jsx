import "./calculations.css";
import Button from "../../components/Button/Button";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const PrettoSlider = styled(Slider)({
  color: "#00A5B4",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 15,
    width: 15,
    backgroundColor: "#00A5B4",
    border: "3px solid #fff",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.08)",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  // "& .MuiSlider-valueLabel": {
  //   lineHeight: 1.2,
  //   fontSize: 12,
  //   background: "unset",
  //   padding: 0,
  //   // width: 32,
  //   // height: 32,
  //   borderRadius: "50% 50% 50% 0",
  //   backgroundColor: "#52af77",
  //   transformOrigin: "bottom left",
  //   transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
  //   "&:before": { display: "none" },
  //   "&.MuiSlider-valueLabelOpen": {
  //     transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
  //   },
  //   "& > *": {
  //     transform: "rotate(45deg)",
  //   },
  // },
});

const Calculations = () => {
  return (
    <section className="calculations">
      <div className="calculations-box container">
        <div className="calculations-left">
          <div className="amount-box subbox">
            <p>Məbləğ</p>
            <h6>
              <output id="rangevalue2">14.500.000</output>₼
            </h6>

            <div className="slider-container">
              <PrettoSlider
                // valueLabelDisplay="on"
                aria-label="pretto slider"
                defaultValue={14500000}
                min={1000000}
                max={20000000}
              />
              <div className="amounts">
                <span>1.000.000 ₼</span>
                <span>20.000.000 ₼</span>
              </div>
            </div>
          </div>
          <div className="period-box subbox">
            <p>Müddət (il)</p>
            <h6>
              <output id="rangevalue">1</output> il
            </h6>

            <div className="slider-container">
              <PrettoSlider
                // valueLabelDisplay="on"
                defaultValue={1}
                min={1}
                max={3}
              />
            </div>
          </div>
          <div className="payment-box">
            <h6>Aylıq ödəniş</h6>
            <h2>200 ₼</h2>
          </div>
        </div>
        <div className="calculations-right">
          <div className="input-row first-row">
            <input type="text" placeholder="Ad" />
            <input type="text" placeholder="Soyad" />
          </div>

          <div className="input-row second-row">
            <input type="text" placeholder="Aylıq əməkhaqqı" />
            <input type="text" placeholder="İş yeri" />
          </div>

          <div className="input-row third-row">
            <select>
              <option defaultValue="" disabled>
                Prefiks
              </option>
              <option defaultValue="050">050</option>
              <option defaultValue="055">055</option>
              <option defaultValue="070">070</option>
            </select>
            <input type="text" placeholder="Mobil nömrə" />
          </div>

          <div className="row fourth-row">
            <p>
              Biz müştərilərimizə asanlıqla əldə edə biləcəyiniz <br /> sərfəli
              kredit təklif edirik.
            </p>
            <Button text="Sifariş et" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculations;
