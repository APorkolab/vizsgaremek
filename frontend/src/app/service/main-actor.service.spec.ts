import { TestBed } from '@angular/core/testing';

import { MainActorService } from './main-actor.service';

describe('MainActorService', () => {
  let service: MainActorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainActorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
