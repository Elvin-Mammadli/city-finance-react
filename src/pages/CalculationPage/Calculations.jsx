import "./calculations.css";
import Button from "../../components/Button/Button";

const Calculations = () => {
  return (
    <div className="calculations">
      <div className="calculations-left">
        <div className="amount-box subbox">
          <p>Məbləğ</p>
          <h6>
            <output id="rangevalue2">14.500.000</output>₼
          </h6>

          <div class="slider-container">
            <input
              type="range"
              min="1"
              max="20000000"
              value="14500000"
              className="slider"
              id="myRange"
              // onInput={rangevalue2.value=value}
            />
            <div class="amounts">
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

          <div class="slider-container">
            <input
              type="range"
              min="1"
              max="3"
              class="slider"
              value="1"
              id="myRange"
              onInput="rangevalue.value=value"
            />
            <div class="amounts">
              <span>1 il</span>
              <span>3 il</span>
            </div>
          </div>
        </div>
        <div className="payment-box">
          <h6>Aylıq ödəniş</h6>
          <h2>200 ₼</h2>
        </div>
      </div>
      <div className="calculations-right">
        <div class="input-row first-row">
          <input type="text" placeholder="Ad" />
          <input type="text" placeholder="Soyad" />
        </div>

        <div class="input-row second-row">
          <input type="text" placeholder="Aylıq əməkhaqqı" />
          <input type="text" placeholder="İş yeri" />
        </div>

        <div class="input-row third-row">
          <select name="" id="">
            <option value="" disabled selected>
              Prefiks
            </option>
            <option value="050">050</option>
            <option value="055">055</option>
            <option value="070">070</option>
          </select>
          <input type="text" placeholder="Mobil nömrə" />
        </div>

        <div class="row fourth-row">
          <p>
            Biz müştərilərimizə asanlıqla əldə edə biləcəyiniz <br /> sərfəli kredit
            təklif edirik.
          </p>
          <Button text="Sifariş et" />
        </div>
      </div>
    </div>
  );
};

export default Calculations;
