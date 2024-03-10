import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// If appConfig does not already have a providers array, you should add it like this:
if (!appConfig.providers) {
  appConfig.providers = [];
}
appConfig.providers.push(provideAnimations());

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
