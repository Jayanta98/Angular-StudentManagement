import { TestBed } from '@angular/core/testing';

import { ExamcellService } from './examcell.service';

describe('ExamcellService', () => {
  let service: ExamcellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamcellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
