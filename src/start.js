/* eslint-disable no-console */
import express from 'express';
import state from './state.js';
import getCurrentWeather from './dataGetters/getCurrentWeather.js';
import getForecastWeather from './dataGetters/getForecastWeather.js';
// import current from './currentData.js';

const start = () => {
  const PORT = process.env.PORT || 3001;
  const app = express();

  app.get('/api/current', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    getCurrentWeather()
      .then(() => {
        console.log('SEND current');
        res.send(state.currentWeather.data);
      });
  });

  app.get('/api/forecast', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    getForecastWeather()
      .then(() => {
        console.log('SEND forecast');
        res.send(state.forecast.data);
      });
  });

  app.listen(PORT, () => {
    console.log(`server starting on port ${PORT}`);
  });
};

export default start;
