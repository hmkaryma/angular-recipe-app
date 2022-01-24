import { TestBed } from '@angular/core/testing';

import { GardeadminGuard } from './gardeadmin.guard';

describe('GardeadminGuard', () => {
  let guard: GardeadminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GardeadminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
