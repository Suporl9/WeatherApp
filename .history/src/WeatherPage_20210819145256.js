import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export const WeatherPage = () => {
  const [temperature, setTemperature] = useState(undefined);
  const [locationn, setLocationn] = useState("");
  const [name, setName] = useState("");
  const apiKey = "f78b75404c25372c7e56267dcd619be7";
  const getData = async () => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${locationn}&units=metric&appid=${apiKey}`
    );
    // console.log("data", data);
    setTemperature(data);
    // console.log("weatherstatuss", temperature);
  };
  useEffect(() => {
    getData();
    console.log(temperature);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationn]);
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("hello");
    getData();
    setLocationn(name);
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
              <button className="btn" type="submit" onClick={submitHandler}>
                Go
              </button>
            </div>
          </form>
          <h3>{temperature && temperature.name}</h3>
          <div className="details">
            <div className="detailsleft">
              <p className="pstyle">
                Status : {temperature && temperature.weather[0].description}
              </p>
              <p className="pstyle">
                Temperature : {temperature && temperature.main.temp} 'C
              </p>
              <p className="pstyle">
                Humidity : {temperature && temperature.main.humidity}
              </p>
              <p className="pstyle">
                Pressure : {temperature && temperature.main.pressure} Pa
              </p>
            </div>
            <div className="detailsright">
              <p>Latitude:{temperature && temperature.coord.lat.toFixed(2)}</p>
              <p>Longitude:{temperature && temperature.coord.lon.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
