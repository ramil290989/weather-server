/* eslint-disable no-return-assign */
import 'dotenv/config';
import state from '../state.js';

const getWeather10Days = () => {
  const requestUrl = new URL('https://api.gismeteo.net/v2/weather/forecast/aggregate/');
  const params = {
    latitude: '55.485290',
    longitude: '54.873472',
    lang: 'ru',
    days: '10',
  };

  Object.entries(params).forEach(([key, value]) => requestUrl.searchParams.append(key, value));

  fetch(requestUrl, {
    method: 'GET',
    headers: {
      'X-Gismeteo-Token': process.env.WEATHER_API_KEY,
    },
  })
    .then((response) => response.json())
    .then(({ response }) => state.weather10Days = response)
    .catch((e) => state.error = e);
};

export default getWeather10Days;
