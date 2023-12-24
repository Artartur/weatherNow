interface IAstro {
  sunrise: string;
  sunset: string;
}

interface ICondition {
  icon: string;
  text: string;
}

interface IDay {
  maxtemp_c: string;
  mintemp_c: string;
}

interface IForecastDayData {
  astro: IAstro;
  day: IDay;
  hour: IHourData[];
}

interface IHourData {
  condition: ICondition;
  temp_c: string;
}
