import { TestBed } from '@angular/core/testing';

import { ConcesionarioServicioService } from './concesionario-servicio.service';

describe('ConcesionarioServicioService', () => {
  let service: ConcesionarioServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcesionarioServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
