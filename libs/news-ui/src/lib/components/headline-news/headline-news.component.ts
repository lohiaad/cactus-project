import { Component, Input, OnInit } from '@angular/core';
import { HeadlineNews } from '@cactus/shared';

@Component({
  selector: 'cactus-headline-news',
  templateUrl: './headline-news.component.html',
  styleUrls: ['./headline-news.component.scss']
})
export class HeadlineNewsComponent implements OnInit {

  @Input() news!: HeadlineNews;
  constructor() { }

  ngOnInit(): void {
  }

}
