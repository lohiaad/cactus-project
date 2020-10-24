import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsMainPageComponent } from './components/news-main-page/news-main-page.component';
import { HeadlineNewsComponent } from './components/headline-news/headline-news.component';
import { NormalNewsComponent } from './components/normal-news/normal-news.component';
import { NewsCardComponent } from './components/news-card/news-card.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: NewsMainPageComponent}
    ]),
  ],
  declarations: [NewsMainPageComponent, HeadlineNewsComponent, NormalNewsComponent, NewsCardComponent],
})
export class NewsUiModule {}
