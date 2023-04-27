import { TestBed } from '@angular/core/testing';

import { NovousuarioService } from './novousuario.service';

describe('NovousuarioService', () => {
  let service: NovousuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovousuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
