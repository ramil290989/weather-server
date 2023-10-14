#! /usr/bin/env node

import path from 'path';
import { program } from 'commander';
import express from 'express';
import dataGetter from '../src/dataGetter.js';

const PORT = process.env.PORT || 3001;

const frontendBuildPath = path.join(process.cwd(), '/frontend/build');

program
  .version('1.0.0', '-v, --version')
  .option('-s, --static <path>', 'path to static assets files', frontendBuildPath)
  .parse(process.argv);

const options = program.opts();

const start = () => {
  const app = express();

  app.use(express.static(path.join(options.static)));

  app.get('/', (request, response) => {
    response.sendFile(path.join(process.cwd(), options.static, 'index.html'));
  });

  app.get('/api', async (request, response) => {
    const data = await dataGetter();
    response.json({ data });
  });

  app.listen(PORT, () => {
    console.log(`server starting on port ${PORT}`);
  });
};

start();
