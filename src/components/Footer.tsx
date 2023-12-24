import "../styles/footer.scss";

interface IFooter {
  humidity: number;
  sunrise: string;
  sunset: string;
  windSpeed: number;
}

export default function Footer({
  humidity,
  sunrise,
  sunset,
  windSpeed,
}: IFooter) {
  return (
    <footer className="footer__container">
      <ul>
        <li>
          <span>
            <p>wind speed</p>
            <p>{windSpeed} m/s</p>
          </span>
        </li>
        <li>
          <span>
            <p>sunrise</p>
            <p>{sunrise}</p>
          </span>
        </li>
        <li>
          <span>
            <p>sunset</p>
            <p>{sunset}</p>
          </span>
        </li>
        <li>
          <span>
            <p>humidity</p>
            <p>{humidity}%</p>
          </span>
        </li>
      </ul>
    </footer>
  );
}
