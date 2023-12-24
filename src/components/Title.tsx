import '../styles/title.scss';

interface ITitle {
  cityName: string;
  condition: string;
}

export default function Title({ cityName, condition }: ITitle) {
  return (
    <div className="title__container">
      <h1>{cityName}</h1>
      <p>{condition}</p>
    </div>
  );
}
