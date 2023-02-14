import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const port = process.env.port || 3000;

async function bootstrap() {
  module.exports = {
    entry: './../public/src/imports/common_imports.js',
    output: {
      path: path.resolve(__dirname, '../public'),
      filename: 'common_bundle.js',
    },
  };

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  await app.listen(port);
}

bootstrap();
