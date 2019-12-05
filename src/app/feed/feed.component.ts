import { Component, OnInit } from '@angular/core';
import { Article } from '../Article'

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.less']
})
export class FeedComponent implements OnInit {

  articles: Article[]

  constructor() { }

  ngOnInit() {
  }

  bookmark(article: Article) {

  }

  clap(article: Article) {

  }
}
