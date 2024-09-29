import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './core/app.config';
import { AppComponent } from './core/components/app.component';

try {
  bootstrapApplication(AppComponent, appConfig);
} catch (error: unknown) {
  console.error(error);
}
