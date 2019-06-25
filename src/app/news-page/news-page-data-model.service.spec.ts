import { TestBed } from '@angular/core/testing';

import { NewsPageDataModelService } from './news-page-data-model.service';

describe('NewsPageDataModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsPageDataModelService = TestBed.get(NewsPageDataModelService);
    expect(service).toBeTruthy();
  });
});
