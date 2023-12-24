import "../styles/weatherPeriod.scss";

interface IWeatherPeriod {
  afternoonIcon: string;
  afternoonTemp: string;
  dawnIcon: string;
  dawnTemp: string;
  morningIcon: string;
  morningTemp: string;
  nightIcon: string;
  nightTemp: string;
}

export default function WeatherPeriod({
  afternoonIcon,
  afternoonTemp,
  dawnIcon,
  dawnTemp,
  morningIcon,
  morningTemp,
  nightIcon,
  nightTemp,
}: IWeatherPeriod) {
  return (
    <div className="weather-period__container">
      <ul>
        <li>
          <div>
            <p>dawn</p>
            <img alt="dawn weather icon" src={dawnIcon} />
            <p>
              {parseInt(dawnTemp)}
              °C
            </p>
          </div>
        </li>
        <li>
          <div>
            <p>morning</p>
            <img alt="morning weather icon" src={morningIcon} />
            <p>
              {parseInt(morningTemp)}
              °C
            </p>
          </div>
        </li>
        <li>
          <div>
            <p>afternoon</p>
            <img alt="afternoon weather icon" src={afternoonIcon} />
            <p>
              {parseInt(afternoonTemp)}
              °C
            </p>
          </div>
        </li>
        <li>
          <div>
            <p>night</p>
            <img alt="night weather icon" src={nightIcon} />
            <p>
              {parseInt(nightTemp)}
              °C
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
