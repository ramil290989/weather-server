import path from 'path';
import express from 'express';
import dataGetter from './dataGetter.js';

const start = (staticPath) => {
  
  const PORT = process.env.PORT || 3001;
  const app = express();

  app.use(express.static(path.join(process.cwd(), staticPath)));

  app.get('/', (request, response) => {
    response.sendFile(path.join(process.cwd(), staticPath, 'index.html'));
  });

  app.get('/api', async (request, response) => {
    const data = await dataGetter();
    response.json({ data });
  });

  app.listen(PORT, () => {
    console.log(`server starting on port ${PORT}`);
  });
};

export default start;
