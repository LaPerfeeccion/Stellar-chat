import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(cookieParser());

  // ⬇️ ESTA ES LA CLAVE
  app.useStaticAssets(join(process.cwd(), 'uploads'), {
  prefix: '/uploads',
  setHeaders: (res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
  },
});

  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
