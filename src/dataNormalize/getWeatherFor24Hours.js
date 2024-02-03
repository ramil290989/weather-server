import addTimesOfDay from './addTimesOfDay.js';

const getWeatherFor24Hours = (weatherData) => {
  const milliseconds = 1000;
  const seconds = 60;
  const minutes = 60;
  const time = {
    start: -6,
    end: 24,
  };

  const dateNow = new Date() / milliseconds;
  // фильтрация по промежутку времени "сейчас" + 24 часа
  const weatherFor24Hours = weatherData.filter((data) => {
    const weatherTime = (Math.ceil((data.date.unix - dateNow) / seconds / minutes));
    return (time.start <= weatherTime && weatherTime <= time.end) && data;
  });
  // добавление названий времени суток в отфильтрованный массив
  addTimesOfDay(weatherFor24Hours);
  return weatherFor24Hours;
};

export default getWeatherFor24Hours;
