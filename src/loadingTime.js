// функция loadingTime принимает timestamp последнего запроса,
// возвращает true, если с момента последнего запроса прошло более 180 минут
const loadingTime = (timestampLast) => {
  const mmSeconds = 1000;
  const seconds = 60;
  const loadingEveryMinutes = 180;
  const timestampNow = Date.now() / mmSeconds;
  const timeDiff = Math.floor((timestampNow - timestampLast) / seconds);
  return loadingEveryMinutes < timeDiff;
};

export default loadingTime;
