import axios from "axios";
import { useEffect, useState } from "react";
import classNames from "classnames";
import {
  FaArrowLeft,
  FaLongArrowAltUp,
  FaLongArrowAltDown,
} from "react-icons/fa";
import "../styles/card.scss";
import { Link } from "react-router-dom";

interface ICard {
  cityName: string;
}

enum WeatherCodition {
  SUNNY = "sunny",
  RAINY = "rainy",
  SNOWY = "snowy",
}

interface IApiData {
  current: {
    condition: ICondition;
    humidity: number;
    temp_c: string;
    wind_kph: number;
  };
  forecast: { forecastday: IForecastDayData[] };
}

export default function Card({ cityName }: ICard) {
  const [weatherData, setWeatherData] = useState<IApiData>();

  const getData = () => {
    axios
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

      return isWeatherCondition(weatherCodition);
    }
    return "";
  };

  const isWeatherCondition = (weather: string) => {
    if (
      weather.includes("rain") ||
      weather.includes("overcast") ||
      weather.includes("mist") ||
      weather.includes("drizzle")
    ) {
      return WeatherCodition.RAINY;
    } else if (
      weather.includes("snow") ||
      weather.includes("blizzard") ||
      weather.includes("sleet") ||
      weather.includes("freezing") ||
      weather.includes("fog") ||
      weather.includes("ice")
    ) {
      return WeatherCodition.SNOWY;
    } else {
      return WeatherCodition.SUNNY;
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {weatherData ? (
        <div className={classNames("card__container", checkWeatherCodition())}>
          <div className="card__container-content">
            <header>
              <Link to="/">
                <FaArrowLeft size={30} />
              </Link>
            </header>
            <div className="card__container-title">
              <h1>{cityName}</h1>
              <p>{weatherData.forecast.forecastday[0].day.condition.text}</p>
            </div>
            <div className="card__container-degree">
              <div className="card__container-degree-current">
                <h1>{parseInt(weatherData.current.temp_c)}</h1>
              </div>
              <span className="card__container-degree-others">
                <p>°C</p>
                <span className="card__container-degree-others-maxMin">
                  <p>
                    <FaLongArrowAltUp
                      size={13}
                      color={
                        checkWeatherCodition() === "snowy" ? "black" : "white"
                      }
                    />
                    {parseInt(
                      weatherData.forecast.forecastday[0].day.maxtemp_c
                    )}
                    °
                  </p>
                  <p>
                    <FaLongArrowAltDown
                      size={13}
                      color={
                        checkWeatherCodition() === "snowy" ? "black" : "white"
                      }
                    />
                    {parseInt(
                      weatherData.forecast.forecastday[0].day.mintemp_c
                    )}
                    °
                  </p>
                </span>
              </span>
            </div>
            <div className="card__container-icon">
              <img
                alt="weather icon"
                src={weatherData.current.condition.icon}
              />
            </div>
            <div className="card__container-weather-period">
              <ul>
                <li>
                  <div>
                    <p>dawn</p>
                    <img
                      alt="dawn weather icon"
                      src={
                        weatherData.forecast.forecastday[0].hour[4].condition
                          .icon
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
                      alt="morning weather icon"
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
                      alt="afternoon weather icon"
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
                      alt="night weather icon"
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
        </div>
      ) : (
        <h1>Loading data...</h1>
      )}
    </div>
  );
}
