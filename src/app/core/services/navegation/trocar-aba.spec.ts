import { TestBed } from '@angular/core/testing';

import { TrocarAbaService } from './trocar-aba.service';

describe('TrocarAbaService', () => {
  let service: TrocarAbaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrocarAbaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
