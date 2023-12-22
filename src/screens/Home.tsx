import "../styles/home.scss";
import globe from "../assets/globe.gif";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home__container">
      <div className="home__container-title">
        <h1>Weather</h1>
        <p>select a city</p>
      </div>
      <div className="home__container-globe">
        <img src={globe} />
      </div>
      <div className="home__container-cities">
        <ol>
          <li>
            <Link to="/Dallol">Dallol</Link>
          </li>
          <li>
          <Link to="/Fairbanks">Fairbanks</Link>
          </li>
          <li>
          <Link to="/London">London</Link>
          </li>
        </ol>
        <ol>
          <li>
          <Link to="/Recife">Recife</Link>
          </li>
          <li>
          <Link to="/Vancouver">Vancouver</Link>
          </li>
          <li>
          <Link to="/Yakutsk">Yakutsk</Link>
          </li>
        </ol>
      </div>
    </div>
  );
}
