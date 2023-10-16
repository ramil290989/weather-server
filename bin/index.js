#! /usr/bin/env node

import { program } from 'commander';
import start from '../src/start.js';

const frontendBuildPath = './frontend/build/';

program
  .version('1.0.0', '-v, --version')
  .option('-s, --staticPath <path>', 'path to static assets files', frontendBuildPath)
  .parse(process.argv);

const { staticPath } = program.opts();

start(staticPath);
