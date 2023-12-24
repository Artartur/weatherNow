import axios from "axios";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Temperature from "./Temperature";
import Title from "./Title";
import WeatherPeriod from "./WeatherPeriod";

import "../styles/card.scss";

interface IApiData {
  current: {
    condition: ICondition;
    humidity: number;
    temp_c: string;
    wind_kph: number;
  };
  forecast: { forecastday: IForecastDayData[] };
}
interface ICard {
  cityName: string;
}

enum WeatherCodition {
  SUNNY = "sunny",
  RAINY = "rainy",
  SNOWY = "snowy",
}

interface IWeatherInfos {
  afternoonIcon: string;
  afternoonTemp: string;
  currentConditionIcon: string;
  currentTemp: string;
  dawnIcon: string;
  dawnTemp: string;
  humidity: number;
  maxTemp: string;
  minTemp: string;
  morningIcon: string;
  morningTemp: string;
  nightIcon: string;
  nightTemp: string;
  sunrise: string;
  sunset: string;
  weatherCondition: string;
  windSpeed: number;
}

export default function Card({ cityName }: ICard) {
  const [weatherData, setWeatherData] = useState<IApiData>();
  const apiKey = import.meta.env?.VITE_REACT_APP_API_KEY;

  const weatherInfos: IWeatherInfos = {
    afternoonIcon:
      weatherData?.forecast.forecastday[0].hour[16].condition.icon || "",
    afternoonTemp: weatherData?.forecast.forecastday[0].hour[16].temp_c || "",
    currentConditionIcon: weatherData?.current.condition.icon || "",
    currentTemp: weatherData?.current.temp_c || "",
    dawnIcon: weatherData?.forecast.forecastday[0].hour[4].condition.icon || "",
    dawnTemp: weatherData?.forecast.forecastday[0].hour[4].temp_c || "",
    humidity: weatherData?.current.humidity || 0,
    maxTemp: weatherData?.forecast.forecastday[0].day.maxtemp_c || "",
    minTemp: weatherData?.forecast.forecastday[0].day.mintemp_c || "",
    morningIcon:
      weatherData?.forecast.forecastday[0].hour[10].condition.icon || "",
    morningTemp: weatherData?.forecast.forecastday[0].hour[10].temp_c || "",
    nightIcon:
      weatherData?.forecast.forecastday[0].hour[22].condition.icon || "",
    nightTemp: weatherData?.forecast.forecastday[0].hour[22].temp_c || "",
    sunrise: weatherData?.forecast.forecastday[0].astro.sunrise || "",
    sunset: weatherData?.forecast.forecastday[0].astro.sunset || "",
    weatherCondition: weatherData?.current.condition.text || "",
    windSpeed: weatherData?.current.wind_kph || 0,
  };

  const weatherRainyCondition = ["drizzle", "overcast", "mist", "rain"];
  const weatherSnowyCondition = [
    "blizzard",
    "fog",
    "freezing",
    "ice",
    "sleet",
    "snow",
  ];

  const checkWeatherCodition = () => {
    if (!weatherData) return "";
    const weather = weatherInfos.weatherCondition.toLowerCase();

    return isWeatherCondition(weather);
  };

  const isWeatherCondition = (weather: string): string => {
    const isRainy = weatherRainyCondition.some((condition) =>
      weather.includes(condition)
    );

    const isSnowy = weatherSnowyCondition.some((condition) =>
      weather.includes(condition)
    );

    return isRainy
      ? WeatherCodition.RAINY
      : isSnowy
      ? WeatherCodition.SNOWY
      : WeatherCodition.SUNNY;
  };

  const getWeatherData = () => {
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}`
      )
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName]);

  return (
    <div>
      {weatherData ? (
        <div className={classNames("card__container", checkWeatherCodition())}>
          <div className="card__container-content">
            <header>
              <Link to="/">
                <FaArrowLeft size={25} />
              </Link>
            </header>

            <Title
              cityName={cityName}
              condition={weatherInfos.weatherCondition}
            />

            <Temperature
              currentTemp={weatherInfos.currentTemp}
              maxTemp={weatherInfos.maxTemp}
              minTemp={weatherInfos.minTemp}
              weatherCondition={checkWeatherCodition()}
            />

            <div className="card__container-icon">
              <img alt="weather icon" src={weatherInfos.currentConditionIcon} />
            </div>

            <WeatherPeriod
              afternoonIcon={weatherInfos.afternoonIcon}
              afternoonTemp={weatherInfos.afternoonTemp}
              dawnIcon={weatherInfos.dawnIcon}
              dawnTemp={weatherInfos.dawnTemp}
              morningIcon={weatherInfos.morningIcon}
              morningTemp={weatherInfos.morningTemp}
              nightIcon={weatherInfos.nightIcon}
              nightTemp={weatherInfos.nightTemp}
            />

            <Footer
              humidity={weatherInfos.humidity}
              sunrise={weatherInfos.sunrise}
              sunset={weatherInfos.sunset}
              windSpeed={weatherInfos.windSpeed}
            />
          </div>
        </div>
      ) : (
        <span className="loading__container">
          <p>Wait a few seconds...</p>
          <p>we are loading the informations for you.</p>
        </span>
      )}
    </div>
  );
}
