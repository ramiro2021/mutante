import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMutanteComponent } from './home-mutante.component';

describe('HomeMutanteComponent', () => {
  let component: HomeMutanteComponent;
  let fixture: ComponentFixture<HomeMutanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMutanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMutanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
