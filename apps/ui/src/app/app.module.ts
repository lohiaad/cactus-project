import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppMainPageComponent } from './components/app-main-page/app-main-page.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


@NgModule({
  declarations: [AppMainPageComponent, WelcomeComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  bootstrap: [AppMainPageComponent],
})
export class AppModule { }
