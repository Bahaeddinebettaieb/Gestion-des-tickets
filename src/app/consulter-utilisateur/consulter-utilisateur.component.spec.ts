import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterUtilisateurComponent } from './consulter-utilisateur.component';

describe('ConsulterUtilisateurComponent', () => {
  let component: ConsulterUtilisateurComponent;
  let fixture: ComponentFixture<ConsulterUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterUtilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
