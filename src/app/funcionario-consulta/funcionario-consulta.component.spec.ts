import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioConsultaComponent } from './funcionario-consulta.component';

describe('FuncionarioConsultaComponent', () => {
  let component: FuncionarioConsultaComponent;
  let fixture: ComponentFixture<FuncionarioConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionarioConsultaComponent]
    });
    fixture = TestBed.createComponent(FuncionarioConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
