import { TestBed } from '@angular/core/testing';

import { FirebaseCodeService } from './firebase-code.service';

describe('FirebaseCodeService', () => {
  let service: FirebaseCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
