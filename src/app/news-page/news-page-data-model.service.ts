import { Injectable } from '@angular/core';
import {ENewsSection, INewsItems} from './TypeDefenition';


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

// TODO to make it lazyloading use new way from
//  https://medium.com/@tomastrajan/total-guide-to-angular-6-dependency-injection-providedin-vs-providers-85b7a347b59f
@Injectable()

export class NewsPageDataModelService {

  constructor() { }

  getNewDescriptions(): INewsItems[] {
    return testData;
  }

  getNewApiUrl() {
    return newsApiUrl;
  }

}
