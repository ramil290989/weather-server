/* eslint-disable no-return-assign, no-console */
import 'dotenv/config';
import axios from 'axios';
import state from '../state.js';
import loadingTime from '../helpers/loadingTime.js';

const getForecastWeather = async () => {
  const timeNow = new Date();

  const requestUrl = new URL('https://api.gismeteo.net/v2/weather/forecast/aggregate/');
  const params = {
    latitude: '55.485290',
    longitude: '54.873472',
    lang: 'ru',
    days: '10',
  };
  const headers = {
    'X-Gismeteo-Token': process.env.WEATHER_API_KEY,
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*',
  };

  Object.entries(params).forEach(([key, value]) => requestUrl.searchParams.append(key, value));

  if (loadingTime(state.forecast.lastLoadingTime)) {
    try {
      console.log('START GET forecast');
      const weatherData = await axios.get(requestUrl, { headers });
      state.error = null;
      state.forecast.data = weatherData;
      state.forecast.lastLoadingTime = timeNow;
    } catch (e) {
      console.log('ERROR GET forecast');
      state.error = e;
    } finally {
      console.log('END GET forecast');
    }
  }
};

export default getForecastWeather;
