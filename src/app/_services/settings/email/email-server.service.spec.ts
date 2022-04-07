import { TestBed } from '@angular/core/testing';

import { EmailServerService } from './email-server.service';

describe('EmailServerService', () => {
  let service: EmailServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
