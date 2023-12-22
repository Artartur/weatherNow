interface IAstro {
  sunrise: string;
  sunset: string;
}

interface ICondition {
  code: number;
  icon: string;
  text: string;
}

interface IDay {
  condition: ICondition;
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
