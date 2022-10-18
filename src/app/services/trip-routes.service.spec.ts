import { TestBed } from '@angular/core/testing';

import { TripRoutesService } from './trip-routes.service';

describe('TripRoutesService', () => {
  let service: TripRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
