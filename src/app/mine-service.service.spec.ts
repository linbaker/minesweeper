import { TestBed, inject } from '@angular/core/testing';

import { MineServiceService } from './mine-service.service';

describe('MineServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MineServiceService]
    });
  });

  it('should be created', inject([MineServiceService], (service: MineServiceService) => {
    expect(service).toBeTruthy();
  }));
});
