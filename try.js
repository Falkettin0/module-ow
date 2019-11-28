let { OpenWeatherMap } = require('../Module-OW/index.js');
let ow = new OpenWeatherMap('123', 'metric');

ow.getWeather('Yakutsk ').then(data => {
    console.log('Temp :', data.main.temp);
}).catch(err => {
    console.log('Error while retrieving API data ')
});