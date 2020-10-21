import { TestBed } from '@angular/core/testing';

import { WastreamerService } from './wastreamer.service';

describe('WastreamerService', () => {
  let service: WastreamerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WastreamerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
