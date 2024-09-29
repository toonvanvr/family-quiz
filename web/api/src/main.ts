import { NestFactory } from '@nestjs/core';
import { appConfig } from './core/constants/app.config';
import { CoreModule } from './core/modules/core.module';
import { TrpcRouter } from './trpc/routes/trpc.routes';

async function bootstrap() {
  const { port } = appConfig;

  const app = await NestFactory.create(CoreModule);
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
  });
  const trpc = app.get(TrpcRouter);
  trpc.applyMiddleware(app);
  await app.listen(port);
}
bootstrap();
