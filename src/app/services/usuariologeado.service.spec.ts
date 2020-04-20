import { TestBed } from '@angular/core/testing';

import { UsuariologeadoService } from './usuariologeado.service';

describe('UsuariologeadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuariologeadoService = TestBed.get(UsuariologeadoService);
    expect(service).toBeTruthy();
  });
});
