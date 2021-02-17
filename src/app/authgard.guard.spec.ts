import { TestBed } from '@angular/core/testing';

import { AuthgardGuard } from './authgard.guard';

describe('AuthgardGuard', () => {
  let guard: AuthgardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthgardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
