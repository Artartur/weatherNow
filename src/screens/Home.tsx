import Cities from "../components/Cities";

import "../styles/home.scss";

export default function Home() {
  return (
    <div className="home__container">
      <div className="home__container-title">
        <h1>Weather</h1>
        <p>select a city</p>
      </div>
      <div className="home__container-globe">
        <img
          alt="globe"
          src={
            "https://cdn.dribbble.com/users/2433051/screenshots/4872252/spinning-globe-white.gif"
          }
        />
      </div>
      <div className="home__container-cities">
        <Cities />
      </div>
    </div>
  );
}
