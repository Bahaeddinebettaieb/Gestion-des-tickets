import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterticketComponent } from './consulterticket.component';

describe('ConsulterticketComponent', () => {
  let component: ConsulterticketComponent;
  let fixture: ComponentFixture<ConsulterticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
