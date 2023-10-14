#! /usr/bin/env node

import path from 'path';
import { program } from 'commander';
import express from 'express';
import dataGetter from '../src/dataGetter.js';

const PORT = process.env.PORT || 3001;

const frontendBuildPath = path.join('/frontend/build');
const processPath = path.join(process.cwd());

program
  .version('1.0.0', '-v, --version')
  .option('-s, --static <path>', 'path to static assets files', frontendBuildPath)
  .parse(process.argv);

const options = program.opts();

const start = () => {
  const app = express();

  app.use(express.static(path.join(processPath, options.static)));

  app.get('/', (request, response) => {
    response.sendFile(path.join(processPath, options.static, 'index.html'));
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
