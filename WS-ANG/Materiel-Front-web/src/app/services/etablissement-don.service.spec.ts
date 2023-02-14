import { TestBed } from '@angular/core/testing';

import { EtablissementDonService } from './etablissement-don.service';

describe('EtablissementDonService', () => {
  let service: EtablissementDonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtablissementDonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
