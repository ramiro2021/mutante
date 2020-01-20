import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarMutantesComponent } from './administrar-mutantes.component';

describe('AdministrarMutantesComponent', () => {
  let component: AdministrarMutantesComponent;
  let fixture: ComponentFixture<AdministrarMutantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarMutantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarMutantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
