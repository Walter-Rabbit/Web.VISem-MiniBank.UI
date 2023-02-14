import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

const port = process.env.port || 3000;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { readdir } = require('fs').promises;

async function* getFiles(dir) {
  const dirs = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirs) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

const dirPath = '~/../public/src/blocks';
const jsFilePath = '~/../public/src/imports/common_imports.js';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('fs').writeFileSync(jsFilePath, '');

async function packJsFiles() {
  for await (const f of getFiles(dirPath)) {
    if (f.endsWith('.js')) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const data = require('fs').readFileSync(f);
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require('fs').appendFileSync(jsFilePath, data + '\n');
    }
  }
}

async function bootstrap() {
  await packJsFiles();

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  await app.listen(port);
}

bootstrap();
