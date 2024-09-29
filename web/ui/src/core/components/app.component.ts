import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiModule } from '../../api/modules/api.module';
import { ApiService } from '../../api/services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, RouterOutlet, ApiModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public readonly greeting;

  constructor(private readonly apiService: ApiService) {
    this.greeting = this.apiService.trpcClient.hello.query({
      name: 'Toon',
    });
  }

  title = 'app';
}
