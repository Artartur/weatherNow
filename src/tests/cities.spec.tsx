import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Cities from "../components/Cities";
import { cityNames } from "../utils/constants";

const CitiesTestComponent = () => (
  <BrowserRouter>
    <Cities />
  </BrowserRouter>
);

describe("Cities", () => {
  describe("check cities component", () => {
    it("should render correctly", () => {
      const { getByText } = render(<CitiesTestComponent />);

      cityNames.forEach((city) => {
        expect(getByText(`${city}`)).toBeTruthy();
      });
    });
  });

  it("should navigate correctly", () => {
    const { getByText } = render(<CitiesTestComponent />);

    cityNames.forEach((city) => {
      fireEvent.click(getByText(city));
      expect(window.location.pathname).toBe(`/${city}`);
    });
  });
});
