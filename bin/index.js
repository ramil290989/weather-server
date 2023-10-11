#! /usr/bin/env node

import express from 'express';
import dataGetter from '../src/dataGetter.js';

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`server starting on port ${PORT}`);
});

app.get('/api', async (request, response) => {
  const data = await dataGetter();
  response.json({ data });
});
