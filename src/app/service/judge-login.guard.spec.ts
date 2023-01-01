import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { JudgeLoginGuard } from './judge-login.guard';

describe('JudgeLoginGuard', () => {
  let guard: JudgeLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    guard = TestBed.inject(JudgeLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
