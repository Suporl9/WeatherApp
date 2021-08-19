import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export const WeatherPage = () => {
  const [temperature, setTemperature] = useState(undefined);
  const [name, setName] = useState("");
  const apiKey = "f78b75404c25372c7e56267dcd619be7";
  const getData = async () => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=butwal&units=metric&appid=${apiKey}`
    );
    console.log("data", data);
    setTemperature(data);
    console.log("weatherstatuss", temperature);
  };
  useEffect(() => {
    getData();
    console.log(temperature);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("hello");
  };
  return (
    <Fragment>
      <div className="container">
        <div className="middlecard">
          <h2>Weather App</h2>
          <form onSubmit={submitHandler}>
            <div className="flexinpandbtn">
              <input
                className="inputforcity"
                placeholder="Enter country or city name."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button className="btn" type="submit">
                Go
              </button>
            </div>
          </form>
          <h3>{temperature.sys.country}</h3>
          <div className="details">
            <div className="detailsleft">
              <p>Status : {}</p>
              <p>Temperature : {}</p>
              <p>Humidity : {}</p>
              <p>Pressure : {}</p>
            </div>
            <div className="detailsright">
              <p>Latitude:</p>
              <p>Longitude:</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
