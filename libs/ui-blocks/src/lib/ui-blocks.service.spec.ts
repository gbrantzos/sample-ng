import { TestBed } from '@angular/core/testing';

import { UiBlocksService } from './ui-blocks.service';

describe('UiBlocksService', () => {
  let service: UiBlocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiBlocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
