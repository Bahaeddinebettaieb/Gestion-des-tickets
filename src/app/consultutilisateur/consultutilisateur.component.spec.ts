import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultutilisateurComponent } from './consultutilisateur.component';

describe('ConsultutilisateurComponent', () => {
  let component: ConsultutilisateurComponent;
  let fixture: ComponentFixture<ConsultutilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultutilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
