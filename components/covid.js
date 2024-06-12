import React, { useEffect , useState} from "react";
import './covid.css'

const Covid = () => {

    const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualdata = await res.json();
      console.log(actualdata.statewise[0]);
      setData(actualdata.statewise[0]);
    } catch (error) {
      alert("error");
    }
  };

  useEffect(() => {
      getCovidData();
  }, []);

  return (
    <>
    <section>
      <h1>🔴 LIVE </h1>
      <h2>COVID-19 CORONAVIRUS TRACKER </h2>

      <ul>
        <li className="card">
          <div className = "card__main">
            <div className = "card__inner">
                <p className = "card__name"> <span> Our </span> Country</p>
                <p className = "card__total card__small">INDIA</p>
            </div>
          </div>
        </li>

        <li className="card">
          <div className = "card__main">
            <div className = "card__inner">
                <p className = "card__name"> <span> Total </span>RECOVERED</p>
                <p className = "card__total card__small">{ data.recovered }</p>
            </div>
          </div>
        </li>

        <li className="card">
          <div className = "card__main">
            <div className = "card__inner">
                <p className = "card__name"> <span> Total </span>CONFIRMED</p>
                <p className = "card__total card__small"> {data.confirmed} </p>
            </div>
          </div>
        </li>

        <li className="card">
          <div className = "card__main">
            <div className = "card__inner">
                <p className = "card__name"> <span> Total </span>DEATH</p>
                <p className = "card__total card__small">{ data.deaths }</p>
            </div>
          </div>
        </li>

        <li className="card">
          <div className = "card__main">
            <div className = "card__inner">
                <p className = "card__name"> <span> Total </span>ACTIVE</p>
                <p className = "card__total card__small">{ data.active }</p>
            </div>
          </div>
        </li>

        <li className="card">
          <div className = "card__main">
            <div className = "card__inner">
                <p className = "card__name"> <span> Last </span>UPDATED</p>
                <p className = "card__total card__small">{ data.lastupdatedtime }</p>
            </div>
          </div>
        </li>
      </ul>
      </section>
    </>
  );
};

export default Covid;
