/* eslint-disable no-param-reassign */
const addCurrentIds = (currentWeatherData) => {
  const indexAddition = 1;
  currentWeatherData.forEach((data, index) => {
    data.id = `current${index + indexAddition}`;
  });
};

export default addCurrentIds;
