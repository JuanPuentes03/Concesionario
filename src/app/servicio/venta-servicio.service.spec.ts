import { TestBed } from '@angular/core/testing';

import { VentaServicioService } from './venta-servicio.service';

describe('VentaServicioService', () => {
  let service: VentaServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentaServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
