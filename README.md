# Weather-Journal App Project



## Getting Setup

## introduction 
This application is for Udacity frontend project. It was meant for creating an asynchronous web app that uses openWeatherMap Api and dynamically update UI

- It sets Node environment with express
- Has a server GET and POST routes
- Dynamically Update UI

### Installing Dependencies

#### Installing Node and NPM

This project depends on Nodejs and Node Package Manager (NPM). you must download and install Node (the download includes NPM) from [https://nodejs.com/en/download](https://nodejs.org/en/download/).

#### Installing express

Express tool for HTTP servers for making single page applications [Express documentation](https://www.npmjs.com/package/express).

#### Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the `root` directory of this repository. After cloning, open your terminal and locate to the project directory and run:

```bash
npm install
```

## Project structure 



```

.
├── commentsOnlyJS
├── website                 # Website files (index.html, app.js, static files)
│   ├── app.js              # containing the functions for api requests get and post
│   ├── index.html          # main html page
│   └── style.css           # stylesheet
└── ...
```

### OpenWeatherMap API
  You can get your own api keys, but for testing the project I have provided mine. You can get api key by going to [Open Weather API](https://openweathermap.org/api) and register and choose to subscribe to current weather data
  
### Run the project
After installing the dependencies in your terminal run 
```bash
npm start
```



