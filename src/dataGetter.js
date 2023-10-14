const dataGetter = async () => {
  const response = await fetch('https://api.weather.yandex.ru/v2/informers?lat=55.487308&lon=54.856422', {
    method: 'GET',
    headers: {
      'X-Yandex-API-Key': process.env.WEATHER_API_KEY,
    },
  });
  const result = await response.json();
  return result;
};

export default dataGetter;
