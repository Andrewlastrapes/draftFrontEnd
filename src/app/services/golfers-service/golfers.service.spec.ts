import { TestBed } from '@angular/core/testing';

import { GolfersService } from './golfers.service';

describe('GolfersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GolfersService = TestBed.get(GolfersService);
    expect(service).toBeTruthy();
  });
});
