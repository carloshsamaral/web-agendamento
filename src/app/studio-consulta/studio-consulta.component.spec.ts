import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioConsultaComponent } from './studio-consulta.component';

describe('StudioConsultaComponent', () => {
  let component: StudioConsultaComponent;
  let fixture: ComponentFixture<StudioConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudioConsultaComponent]
    });
    fixture = TestBed.createComponent(StudioConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
