import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'hbs';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import supertokens from 'supertokens-node';
import * as process from 'process';
import { SupertokensExceptionFilter } from './auth/auth/auth.filter';

const port = process.env.port || 3000;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: [process.env.DOMAIN],
    allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
    credentials: true,
  });

  app.useGlobalFilters(new SupertokensExceptionFilter());

  const config = new DocumentBuilder().build();
  const document = SwaggerModule.createDocument(app, config);

  hbs.registerPartials(join(__dirname, '..', 'views', 'partials'));
  hbs.registerHelper('if_equals', function (l, r, options) {
    return l == r ? options.fn(this) : options.inverse(this);
  });
  hbs.registerHelper('loading_time', function (start) {
    return new Date().getTime() - start;
  });
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}

bootstrap();
