import { TestBed } from '@angular/core/testing';

import { NavigationListenerService } from './navigation-listener.service';

describe('RouterListenerService', () => {
  let service: NavigationListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationListenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
