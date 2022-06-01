import "./usefulInfoPage.css";
import usd from "../../assets/usd.svg";
import eur from "../../assets/euro.svg";
import up from "../../assets/curr-arrow-up.svg";
import down from "../../assets/curr-arrow-down.svg";

const UsefulInfoPage = () => {
  return (
    <section className="useful-info">
      <div className="container">
        <h2>Sizin üçün faydalı</h2>
        <div className="useful-boxes">
          <div className="useful-left">
            <div className="heading-row">
              <h4>Valyuta məzənnələri</h4>
              <p>
                <span>Yeniləndi:</span> 14.03.2022
              </p>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Valyuta</th>
                  <th>Alış</th>
                  <th>Valyuta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={usd} alt="" />
                    <p>USD</p>
                  </td>
                  <td>1.7000</td>
                  <td>1.7000</td>
                  <td>
                    <img src={up} alt="" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={eur} alt="" />
                    <p>EUR</p>
                  </td>
                  <td>1.7025</td>
                  <td>1.9000</td>
                  <td>
                    <img src={down} alt="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="useful-right">
            <h4>Valyuta kalkulyatoru</h4>
            <div className="select-box sell">
              <input type="text" placeholder="Satıram" />
              <select name="" id="">
                <option defaultValue="azn">&#8380;</option>
                <option value="usd">&#x24;</option>
                <option value="eur">&#8364;</option>
              </select>
            </div>
            <div className="select-box buy">
              <input type="text" placeholder="Alıram" />
              <select name="" id="">
                <option defaultValue="usd">&#x24;</option>
                <option value="azn">&#8380;</option>
                <option value="eur">&#8364;</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsefulInfoPage;
