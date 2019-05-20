import { TestBed } from '@angular/core/testing';

import { SetUserService } from './set-user.service';

describe('SetUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetUserService = TestBed.get(SetUserService);
    expect(service).toBeTruthy();
  });
});
