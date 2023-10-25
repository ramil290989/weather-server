import 'dotenv/config';

const dataGetter = async () => {
  
  const result = {};
  try {
    const response = await fetch('https://api.weather.yandex.ru/v2/informers?lat=55.487308&lon=54.856422', {
      method: 'GET',
      headers: {
        'X-Yandex-API-Key': process.env.WEATHER_API_KEY,
      },
    });
    const responseData = await response.json();
    if (response.status === 403) {
      result.error = responseData.message;
      result.data = null;
    } else {
      result.data = responseData;
      result.error = null;
    }
  }
  catch (error) {
    result.error = error.message;
    result.data = null;
  }  
  return result;
};

export default dataGetter;
