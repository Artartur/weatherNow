import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../screens/Home";
import { cityNames } from "../utils/constants";

const HomeTestComponent = () => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);

describe("Home", () => {
  describe("check home component", () => {

    it("renders Home component without crashing", () => {
      render(<HomeTestComponent />);
    });

    it("should render expected elements", () => {
      const { getByAltText, getByText } = render(<HomeTestComponent />);

      expect(getByText("Weather")).toBeTruthy();
      expect(getByText("select a city")).toBeTruthy();
      const globeImage = getByAltText("globe");
      expect(globeImage).toBeTruthy();

      cityNames.forEach((city) => {
        expect(getByText(`${city}`)).toBeTruthy();
      });
    });
  });

});
