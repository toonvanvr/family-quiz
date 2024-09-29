import { Injectable } from '@angular/core';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { AppRouter } from '../../../../api/src/trpc/routes/trpc.routes';
import { ConfigService } from '../../core/services/config.service';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public readonly trpcClient;

  constructor(private readonly configService: ConfigService) {
    this.trpcClient = createTRPCProxyClient<AppRouter>({
      links: [
        httpBatchLink({
          url: this.configService.apiUrl,
        }),
      ],
    });
  }
}
