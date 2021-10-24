import { TestBed } from '@angular/core/testing';

import { PostTaskService } from './post-task.service';

describe('PostTaskService', () => {
  let service: PostTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
