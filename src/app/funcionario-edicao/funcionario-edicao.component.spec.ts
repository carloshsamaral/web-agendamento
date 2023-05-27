import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioEdicaoComponent } from './funcionario-edicao.component';

describe('FuncionarioEdicaoComponent', () => {
  let component: FuncionarioEdicaoComponent;
  let fixture: ComponentFixture<FuncionarioEdicaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionarioEdicaoComponent]
    });
    fixture = TestBed.createComponent(FuncionarioEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
