import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMutanteComponent } from './agregar-mutante.component';

describe('AgregarMutanteComponent', () => {
  let component: AgregarMutanteComponent;
  let fixture: ComponentFixture<AgregarMutanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarMutanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMutanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
