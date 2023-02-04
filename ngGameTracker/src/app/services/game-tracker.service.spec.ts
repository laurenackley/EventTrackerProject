import { TestBed } from '@angular/core/testing';

import { GameTrackerService } from './game-tracker.service';

describe('GameTrackerService', () => {
  let service: GameTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
