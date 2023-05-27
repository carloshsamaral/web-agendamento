import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioCadastroComponent } from './studio-cadastro.component';

describe('StudioCadastroComponent', () => {
  let component: StudioCadastroComponent;
  let fixture: ComponentFixture<StudioCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudioCadastroComponent]
    });
    fixture = TestBed.createComponent(StudioCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
