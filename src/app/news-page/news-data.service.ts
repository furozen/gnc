import { Injectable } from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';

export enum ENewsSection {
  main = 'main',
  common = 'common'
}


export interface INewsItems {
  icon: string;
  section: string|ENewsSection;
  title: string;
  resourse: {
    path?: string,
    route: string,
    newsApi?: {
      query?: {[lang: string]: string},
      date: string,
    }
  };
}
const today = new Date();
const newsApiUrl = 'https://newsapi.org/v2/everything?q={{query}}&from={{date}}&sortBy=publishedAt&apiKey=55316696fe264d498866af7ba652cf65';
const testData: INewsItems[] = [
  {
    icon: 'dvr',
    title: 'NP.Sections.MainMenu',
    section: ENewsSection.main,
    resourse: {
      newsApi: {
        date: today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate(),
        query: {
          ru: 'главные',
          en: 'breaking news'
        }
      },
      route: 'news/main'
    }
  },
  {
    icon: 'person',
    title: 'NP.Sections.ForYou',
    section: ENewsSection.main,
    resourse: {
      path: 'lenta.ru',
      route: 'news/personalise'
    }
  },
  {
    icon: 'star_border',
    title: 'NP.Sections.Favorite',
    section: ENewsSection.main,
    resourse: {
      path: 'lenta.ru',
      route: 'news/favorite'
    }
  },

  {
    icon: 'search',
    title: 'NP.Sections.Saved',
    section: ENewsSection.main,
    resourse: {
      path: 'lenta.ru',
      route: 'news/saved'
    }
  }

];


@Injectable({
  providedIn: 'root'
})
export class NewsDataService {
  private data: Observable<INewsItems>;
  constructor(private httpClient: HttpClient, private translateService: TranslateService) {
    this.data = from(testData);
  }

  getMainTitleSectionsItems(): Observable<INewsItems> {
    return this.data.pipe(filter(item => item.section === ENewsSection.main));
  }

  getNews(route: string = 'news/main') {
    const item = testData[0];
    const newsApiElement = item.resourse.newsApi.query[this.translateService.currentLang];
    console.log('item.resourse.newsApi:', item.resourse.newsApi)
    console.log(`item.resourse.newsApi[${this.translateService.currentLang}]:`, item.resourse.newsApi.query[this.translateService.currentLang])
    let url = newsApiUrl.replace('{{query}}',
      newsApiElement ? newsApiElement : item.resourse.newsApi.query['en']);
    url = url.replace('{{date}}', item.resourse.newsApi.date);
    return this.httpClient.get(url);
  }

}
