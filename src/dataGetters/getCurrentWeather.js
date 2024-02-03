import 'dotenv/config';
import axios from 'axios';
import state from '../state.js';
import loadingTime from '../helpers/loadingTime.js';
import getWeatherFor24Hours from '../dataNormalize/getWeatherFor24Hours.js';

const getCurrentWeather = async () => {
  const timeNow = new Date();

  const requestUrl = new URL('https://api.gismeteo.net/v2/weather/forecast/by_day_part/');
  const params = {
    latitude: '55.485290',
    longitude: '54.873472',
    lang: 'ru',
    days: '3',
  };
  const headers = {
    'X-Gismeteo-Token': process.env.WEATHER_API_KEY,
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*',
  };

  Object.entries(params).forEach(([key, value]) => requestUrl.searchParams.append(key, value));

  if (loadingTime(state.currentWeather.lastLoadingTime)) {
    try {
      const weatherData = await axios.get(requestUrl, { headers });
      const currentWeatherData = getWeatherFor24Hours(weatherData.data.response);
      state.error = null;
      state.currentWeather.data = currentWeatherData;
      state.currentWeather.lastLoadingTime = timeNow;
    } catch (e) {
      state.error = e;
    }
  }
};

export default getCurrentWeather;
