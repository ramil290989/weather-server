/* eslint-disable no-console */
import express from 'express';
import state from './state.js';
import getCurrentWeather from './dataGetters/getCurrentWeather.js';
// import getWeather10Days from './dataGetters/getWeather10days.js';
// import current from './currentData.js';

const start = () => {
  const PORT = process.env.PORT || 3001;
  const app = express();

  app.get('/api/current', (req, res) => {
    console.log('getting current');
    getCurrentWeather()
      .then(() => res.send(state.currentWeather.data));
  });

  app.listen(PORT, () => {
    console.log(`server starting on port ${PORT}`);
  });
};

export default start;
