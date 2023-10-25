import express from 'express';
import loadingTime from './loadingTime.js';
import dataGetter from './dataGetter.js';

const start = () => {  
  const PORT = process.env.PORT || 3001;
  const app = express();

  const state = {
    weatherData: {},
    errors: '',
  };

  app.get('/api', async (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Content-Type', 'text/plain');
    const timestampLast = state.weatherData.now;
    const isLoading = timestampLast ? loadingTime(timestampLast) : true;
    if (isLoading) {
      state.weatherData = await dataGetter();
    }
    response.send(JSON.stringify(state.weatherData));
  });

  app.listen(PORT, () => {
    console.log(`server starting on port ${PORT}`);
  });
};

export default start;
