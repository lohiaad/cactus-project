import { Component, Input, OnInit } from '@angular/core';
import { News } from '@cactus/shared';

@Component({
  selector: 'cactus-normal-news',
  templateUrl: './normal-news.component.html',
  styleUrls: ['./normal-news.component.scss']
})
export class NormalNewsComponent implements OnInit {

  @Input() news!: News;
  constructor() { }

  ngOnInit(): void {
  }

}
