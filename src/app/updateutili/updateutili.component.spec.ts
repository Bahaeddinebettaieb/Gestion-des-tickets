import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateutiliComponent } from './updateutili.component';

describe('UpdateutiliComponent', () => {
  let component: UpdateutiliComponent;
  let fixture: ComponentFixture<UpdateutiliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateutiliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateutiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
