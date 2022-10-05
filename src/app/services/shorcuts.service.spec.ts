import { TestBed } from '@angular/core/testing';

import { ShorcutsService } from './shorcuts.service';

describe('ShorcutsService', () => {
  let service: ShorcutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShorcutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
