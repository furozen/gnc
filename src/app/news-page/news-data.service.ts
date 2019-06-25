import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {NewsPageDataModelService} from './news-page-data-model.service';
import {ENewsSection, INewsItems} from './TypeDefenition';


@Injectable()
export class NewsDataService {
  private data: Observable<INewsItems>;
  constructor(private httpClient: HttpClient, private translateService: TranslateService, private dataModel: NewsPageDataModelService) {
    this.data = from(this.dataModel.getNewDescriptions());
  }

  getMainTitleSectionsItems(): Observable<INewsItems> {
    return this.data.pipe(filter(item => item.section === ENewsSection.main));
  }

  getNews(route: string = 'news/main') {
    const item = this.dataModel.getNewDescriptions().filter(data => data.resourse.route === route)[0];
    // todo catch error
    const newsApiElement = item.resourse.newsApi.query[this.translateService.currentLang];
    console.log('item.resourse.newsApi:', item.resourse.newsApi);
    console.log(`item.resourse.newsApi[${this.translateService.currentLang}]:`, item.resourse.newsApi.query[this.translateService.currentLang]);
    let url = this.dataModel.getNewApiUrl().replace('{{query}}',
      newsApiElement ? newsApiElement : item.resourse.newsApi.query.en);
    url = url.replace('{{date}}', item.resourse.newsApi.date);
    return this.httpClient.get(url);
  }

}
