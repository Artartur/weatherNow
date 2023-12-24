import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import "../styles/temperature.scss"

interface IMaxMinTemperature {
  currentTemp: string;
  maxTemp: string;
  minTemp: string;
  weatherCondition: string;
}

export default function Temperature({
  currentTemp,
  maxTemp,
  minTemp,
  weatherCondition,
}: IMaxMinTemperature) {
  const weatherConditionCheck =
    weatherCondition === "snowy" ? "black" : "white";

  return (
    <div className="temperature__container">
      <div className="temperature__container-current-degree">
        <h1>{parseInt(currentTemp)}</h1>
      </div>
      <span className="temperature__container-current-maxMin">
        <p>°C</p>
        <span className="temperature__container-current-maxMin-info">
          <p>
            <FaLongArrowAltUp size={13} color={weatherConditionCheck} />
            {parseInt(maxTemp)}°
          </p>
          <p>
            <FaLongArrowAltDown size={13} color={weatherConditionCheck} />
            {parseInt(minTemp)}°
          </p>
        </span>
      </span>
    </div>
  );
}
