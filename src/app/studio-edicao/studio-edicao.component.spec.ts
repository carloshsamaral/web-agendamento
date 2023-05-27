import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioEdicaoComponent } from './studio-edicao.component';

describe('StudioEdicaoComponent', () => {
  let component: StudioEdicaoComponent;
  let fixture: ComponentFixture<StudioEdicaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudioEdicaoComponent]
    });
    fixture = TestBed.createComponent(StudioEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
