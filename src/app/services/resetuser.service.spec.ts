import { TestBed, inject } from '@angular/core/testing';

import { ResetuserService } from './resetuser.service';

describe('ResetuserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResetuserService]
    });
  });

  it('should be created', inject([ResetuserService], (service: ResetuserService) => {
    expect(service).toBeTruthy();
  }));
});
