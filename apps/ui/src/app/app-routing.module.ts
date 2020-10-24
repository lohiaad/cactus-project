import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@cactus/news-ui').then(m => m.NewsUiModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
