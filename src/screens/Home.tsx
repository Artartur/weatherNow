import "../styles/home.scss";
import globe from "../assets/globe.gif";
import Cities from "../components/Cities";
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
        <Cities/>
      </div>
    </div>
  );
}
