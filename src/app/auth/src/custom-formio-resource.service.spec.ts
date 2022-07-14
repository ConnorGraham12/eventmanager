import { TestBed } from '@angular/core/testing';

import { CustomFormioResourceService } from './custom-formio-resource.service';

describe('CustomFormioResourceService', () => {
  let service: CustomFormioResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomFormioResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
