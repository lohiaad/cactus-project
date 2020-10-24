import { Component, Input, OnInit } from '@angular/core';
import {  Observable, of } from 'rxjs';
import { NewsService } from '../../services/news.service';
import { News } from '@cactus/shared';
@Component({
  selector: 'cactus-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Input() category = 'top';
  @Input() showBreakingNews = false;
  public news$: Observable<News[]> = of([]);
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.news$ = this.newsService.getNews$(this.category);
  }

}
