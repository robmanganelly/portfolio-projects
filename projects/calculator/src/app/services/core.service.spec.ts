import { TestBed } from '@angular/core/testing';

import { CoreService } from './core.service';

describe('CoreService', () => {
  let service: CoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('should test compose method', ()=>{
    expect(()=>service.compose('=')).toThrow(new Error('"=" is not yet implemented'));
  })

  it ('should test calculate method', ()=>{
    expect((service as any).calculate('12+5*2')).toEqual('22');
  })



});
