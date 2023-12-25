Weather Now

A platform for you to check the weather in your city.

---

To use this application you will need to do a few things:

1. run git clone `git@github.com:Artartur/weatherNow.git` in your terminal
2. run cd weatherNow
3. in weatherNow directory, run `npm install`
4. Go to [weatheapi](https://www.weatherapi.com/) website, register, obtain your own api key
5. Go to `src/components/Card.tsx` and add your api key on 54 line.
6. run `npm run dev`
7. The application will open at `http://localhost:5173/`

To run the unit tests:

1. run `npm run test` in your terminal

To run the docker container:

1. run docker pull artartur/weathernow:latest
2. run docker run -it artartur/weathrnow:latest
3. The application will open at `http://localhost:8080/` or `http://yourIp:8080/`
