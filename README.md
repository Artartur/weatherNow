Weather Now

A platform for you to check the weather in your city

---

Some remarks: In this application was developed using [weatheapi](https://www.weatherapi.com/) and to use this api, it was necessary to add a secret key that will expired on 04/01/2024.
If you're going to use this application after that date, register in [weatheapi](https://www.weatherapi.com/signup.aspx) website, obtain your own key and add it to `src/components/Card.tsx` on 54 line, 
you can remove the environment variable and add your key, then the application will work normally. 

---

To use this application you will need to do a few things:

1. run git clone `git@github.com:Artartur/weatherNow.git` in your terminal
2. run cd weatherNow
3. in weatherNow directory, run `npm install`
4. run `npm run dev`
5. The application will open at `http://localhost:5173/`

To run the unit tests:

1. run `npm run test` in your terminal
