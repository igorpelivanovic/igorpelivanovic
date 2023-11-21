import { TestBed } from '@angular/core/testing';

import { InfoMessageService } from './info-message.service';

describe('InfoMessageService', () => {
  let service: InfoMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
