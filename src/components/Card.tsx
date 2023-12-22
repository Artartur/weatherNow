import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/card.scss";
import classNames from "classnames";

interface ICard {
  cityName: string;
}

enum WeatherCodition {
  SUNNY = "sunny",
  RAINY = "rainy",
  SNOWY = "snowy",
}

export default function Card({ cityName }: ICard) {
  const [weatherData, setWeatherData] = useState(null);

  const getData = async () => {
    await axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${cityName}`
      )
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((err) => console.error(err));
  };

  const checkWeatherCodition = () => {
    if (weatherData) {
      const weatherCodition =
        weatherData.forecast.forecastday[0].day.condition.text.toLowerCase();

      switch (weatherCodition) {
        case WeatherCodition.SUNNY:
          return "sunny";
        case WeatherCodition.RAINY:
          return "rainy";
        case WeatherCodition.SNOWY:
          return "snowy";
        default:
          return "other-condition";
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {weatherData ? (
        <div className={classNames("card__container", checkWeatherCodition())}>
          <header></header>
          <div className="card__container-title">
            <h1>{cityName}</h1>
            <p>{weatherData.forecast.forecastday[0].day.condition.text}</p>
          </div>
          <div className="card__container-degree">
            <div className="card__container-degree-current">
              <h1>{parseInt(weatherData.current.temp_c)}</h1>
            </div>
            <div className="card__container-degree-others">
              <p>°C</p>
              <p>
                {parseInt(weatherData.forecast.forecastday[0].day.maxtemp_c)}°
              </p>
              <p>
                {parseInt(weatherData.forecast.forecastday[0].day.mintemp_c)}°
              </p>
            </div>
          </div>
          <div className="card__container-icon">
            <img alt="weather icon" src={weatherData.current.condition.icon} />
          </div>
          <div className="card__container-weather-day">
            <ul>
              <li>
                <div>
                  <p>dawn</p>
                  <img
                    alt=""
                    src={
                      weatherData.forecast.forecastday[0].hour[4].condition.icon
                    }
                  />
                  <p>
                    {parseInt(
                      weatherData.forecast.forecastday[0].hour[4].temp_c
                    )}
                    °C
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p>morning</p>
                  <img
                    alt=""
                    src={
                      weatherData.forecast.forecastday[0].hour[10].condition
                        .icon
                    }
                  />
                  <p>
                    {parseInt(
                      weatherData.forecast.forecastday[0].hour[10].temp_c
                    )}
                    °C
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p>afternoon</p>
                  <img
                    alt=""
                    src={
                      weatherData.forecast.forecastday[0].hour[16].condition
                        .icon
                    }
                  />
                  <p>
                    {parseInt(
                      weatherData.forecast.forecastday[0].hour[16].temp_c
                    )}
                    °C
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p>night</p>
                  <img
                    alt=""
                    src={
                      weatherData.forecast.forecastday[0].hour[22].condition
                        .icon
                    }
                  />
                  <p>
                    {parseInt(
                      weatherData.forecast.forecastday[0].hour[22].temp_c
                    )}
                    °C
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <footer className="card__container-footer">
            <ul>
              <li>
                <span>
                  <p>wind speed</p>
                  <p>{weatherData.current.wind_kph} m/s</p>
                </span>
              </li>
              <li>
                <span>
                  <p>sunrise</p>
                  <p>{weatherData.forecast.forecastday[0].astro.sunrise}</p>
                </span>
              </li>
              <li>
                <span>
                  <p>sunset</p>
                  <p>{weatherData.forecast.forecastday[0].astro.sunset}</p>
                </span>
              </li>
              <li>
                <span>
                  <p>humidity</p>
                  <p>{weatherData.current.humidity}%</p>
                </span>
              </li>
            </ul>
          </footer>
        </div>
      ) : (
        <h1>Loading data...</h1>
      )}
    </div>
  );
}
