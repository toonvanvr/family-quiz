import { Module } from '@nestjs/common';
import { TrpcRouter } from './routes/trpc.routes';
import { TrpcService } from './services/trpc.service';

@Module({
  imports: [],
  controllers: [],
  providers: [TrpcService, TrpcRouter],
})
export class TrpcModule {}
