import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="container   border">
      <form className="">
        <div className="row">
          <div className="col-3">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>London</h1>
        <ul>
          <li>Last updated: </li>
          <li>Sunny</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="clearfix weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
              className="float-left"
            />

            <strong>10 </strong>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>
        </div>
        <div className="col-6 ">
          <ul>
            <li>Humidity: %</li>
            <li>Wind: km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
