import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppMainPageComponent } from './components/app-main-page/app-main-page.component';


@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppMainPageComponent],
})
export class AppServerModule {}
