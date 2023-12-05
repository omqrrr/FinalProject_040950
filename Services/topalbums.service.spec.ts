import { TestBed } from '@angular/core/testing';
import { TopalbumService } from './topalbums.service';

describe('TopalbumService', () => {
  let service: TopalbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopalbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
