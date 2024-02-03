/* eslint-disable no-unused-expressions */
const addTimesOfDay = (weatherData) => {
  const times = {
    now: 'сейчас',
    night: {
      name: 'Ночью',
      start: 0,
      end: 6,
    },
    morning: {
      name: 'Утром',
      start: 6,
      end: 12,
    },
    day: {
      name: 'Днем',
      start: 12,
      end: 18,
    },
    evening: {
      name: 'Вечером',
      start: 18,
      end: 24,
    },
  };

  weatherData.forEach((weather, index) => {
    const weatherHour = new Date(weather.date.local)
      .getHours();
    const {
      now,
      night,
      morning,
      day,
      evening,
    } = times;
    const { date } = weather;
    if (index === 0) {
      (date.tod = now);
    } else {
      (night.start <= weatherHour && weatherHour < night.end) && (date.tod = night.name);
      (morning.start <= weatherHour && weatherHour < morning.end) && (date.tod = morning.name);
      (day.start <= weatherHour && weatherHour < day.end) && (date.tod = day.name);
      (evening.start <= weatherHour && weatherHour < evening.end) && (date.tod = evening.name);
    }
  });
};

export default addTimesOfDay;
