import React from "react";

import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="weather-build">
      <div className="review">
        <h1>London</h1>
        <ul>
          <li>Sunday 20:00</li>
          <li>Clouds</li>
        </ul>
      </div>
      <div className="row">
        <div className="col">
          <div className="clearfix weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt=""
              className="float-left"
            />
            <div className="float-left ">
              <strong>20 </strong>
              <span className="units">
                <a href="#" class="active">
                  °C
                </a>{" "}
                |<a href="#"> F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:70 %</li>
            <li>Wind:15 m/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
