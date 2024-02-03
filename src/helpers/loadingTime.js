const loadingTime = (lastLoadingTime) => {
  const mmSeconds = 1000;
  const seconds = 60;
  const loadingEveryMinutes = 180;
  const timeNow = Date.now();
  const timeDiff = Math.floor((timeNow - lastLoadingTime) / mmSeconds / seconds);
  return loadingEveryMinutes < timeDiff;
};

export default loadingTime;
