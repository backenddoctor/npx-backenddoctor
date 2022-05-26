#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import url from 'url';

process.stdout.write('\x1b[2J');
process.stdout.write('\x1b[0f');

console.log(
  fs.readFileSync(
    path.resolve(
      path.dirname(url.fileURLToPath(import.meta.url)),
      '..',
      'build',
      'card.out'
    ),
    'utf8'
  )
);
