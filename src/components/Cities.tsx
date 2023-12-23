import { Link } from "react-router-dom";
import '../styles/cities.scss';
export default function Cities() {
  return (
    <div className="cities__container">
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
  );
}
