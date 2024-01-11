import express from 'express';
import state from './state.js';
import getCurrentWeather from './getCurrentWeather.js';
import getWeather10Days from './getWeather10days.js';

const start = () => {  
  const PORT = process.env.PORT || 3001;
  const app = express();

  getCurrentWeather();
  getWeather10Days();

  setTimeout(() => {
    const current = JSON.stringify(state.currentWeather, null, ' ');
    const weather10Days = JSON.stringify(state.weather10Days, null, ' ');
    console.log(current);
    console.log(weather10Days);
  }, 1000);

  app.listen(PORT, () => {
    console.log(`server starting on port ${PORT}`);
  });
};

export default start;
