import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DemoService } from './demo.service';

describe('DemoService', () => {
  beforeEach(() => TestBed.
    configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DemoService]
    }));

  it('should be created', () => {
    const service: DemoService = TestBed.get(DemoService);
    expect(service).toBeTruthy();
  });
});
