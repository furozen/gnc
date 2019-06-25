import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {NewsDataService} from './news-data.service';
import {TranslateService} from '@ngx-translate/core';
import {INewsItems} from './TypeDefenition';
import {NewsPageDataModelService} from './news-page-data-model.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
  providers: [NewsPageDataModelService, NewsDataService]
})
export class NewsPageComponent implements OnInit {
  mobileQuery: MediaQueryList;
  navSideContent: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},

  ];

  newsContent = Array.from({length: 50}, () =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private mobileQueryListener: () => void;
  constructor(private newsDataService: NewsDataService, private translateService: TranslateService,
              changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
    this.translateService.onLangChange.subscribe(() => {
      this.refeshDataSources();
    });
  }
  mainSection: INewsItems[] = [];

  getMainSection() {
    this.newsDataService.getMainTitleSectionsItems().subscribe((item: INewsItems) => {
      console.log('getMainSection:', item);
      this.mainSection.push(item);
    } );
  }

  getNewsContent() {
    this.newsDataService.getNews().subscribe((item) => {
      this.newsContent = (item as any).articles;
    });
  }

  getFormattedNew(ob) {
    return JSON.stringify(ob);
  }

  ngOnInit() {
    this.refeshDataSources();

  }

  private refeshDataSources() {
    this.getMainSection();
    this.getNewsContent();
  }
}
