require('dotenv').config();
const { OpenWeatherMap } = require('./OpenWeatherMap.js');
const ow = new OpenWeatherMap(process.env.API_KEY, 'metric');

ow.getWeather('Yakutsk').then(data => {
    console.log('Temp :', data.main.temp);
}).catch(err => {
    console.log('Error while retrieving API data ')
});