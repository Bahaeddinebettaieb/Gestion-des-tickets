import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterlisteComponent } from './consulterliste.component';

describe('ConsulterlisteComponent', () => {
  let component: ConsulterlisteComponent;
  let fixture: ComponentFixture<ConsulterlisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterlisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
