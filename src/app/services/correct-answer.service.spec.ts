import { TestBed } from '@angular/core/testing';

import { CorrectAnswerService } from './correct-answer.service';

describe('CorrectAnswerService', () => {
  let service: CorrectAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorrectAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
