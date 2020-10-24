import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { News } from '@cactus/shared';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'cactus-news-main-page',
  templateUrl: './news-main-page.component.html',
  styleUrls: ['./news-main-page.component.scss'],
  providers: [NewsService]
})
export class NewsMainPageComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle('Cactus News');
    this.metaService.addTags([
      {name: 'keywords', content: 'News Interview projects'},
      {name: 'description', content: 'New portal project'},
      {name: 'robots', content: 'index, follow'}
    ])

  }

}
