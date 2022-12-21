import "./styles.css";
import React, { useState } from "react";

var Citydb = {
  Hyderabad: [
    {
      name: "Ramoji Flim City",
      Desciption: "Biggest flim city in India",
      Avg_Cost: "2000"
    },
    {
      name: "Charminar",
      Desciption: "Heritage of Hyderabad",
      Avg_Cost: "300"
    },
    {
      name: "Golconda Fort",
      Desciption: "Built by Nizam",
      Avg_Cost: "1000"
    }
  ],
  Delhi: [
    {
      name: "India Gate",
      Desciption: "Heritage of India",
      Avg_Cost: "1500"
    },
    {
      name: "Akshardham Mandir",
      Desciption: "Temple of Swaminarayan",
      Avg_Cost: "2000"
    },
    {
      name: "Red Fort",
      Desciption: "Heritage of India",
      Avg_Cost: "500"
    }
  ],
  Jodhpur: [
    {
      name: "Mehrangarh Fort",
      Desciption: "Heritage of India",
      Avg_Cost: "500"
    },
    {
      name: "Umaid Bhavan Palace",
      Desciption: "Museum and Palace",
      Avg_Cost: "1000"
    }
  ]
};

var dbList = Object.keys(Citydb);
export default function App() {
  const [meaning, setMeaning] = useState("Hyderabad");

  function onClickHandler(city) {
    setMeaning(city);
  }
  return (
    <div className="container">
      <div className="city-container">
        <h1 className="heading">
          {" "}
          <span role="img" aria-label="">
            ✈️
          </span>{" "}
          Best Places to Visit in India{" "}
          <span role="img" aria-label="">
            ✈️
          </span>
        </h1>
        <p style={{ margin: "10px 0 10px 0" }}>
          {" "}
          Check out Citywise Best Places to visit...
        </p>
        <div className="btn-container">
          {dbList.map((city) => (
            <button className="btns" onClick={() => onClickHandler(city)}>
              {city}
            </button>
          ))}
        </div>
        <div className="city-container">
          <ul style={{ paddingInlineStart: "0" }}>
            {Citydb[meaning].map((cityList) => (
              <li key={cityList.name}>
                {" "}
                <div className="City-name"> {cityList.name} </div>
                <div className="Description">
                  {" "}
                  About: {cityList.Desciption}{" "}
                </div>
                <div className="avg-cost">
                  {" "}
                  Average Cost: {cityList.Avg_Cost}{" "}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
