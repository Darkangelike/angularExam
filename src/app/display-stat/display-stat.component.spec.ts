import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStatComponent } from './display-stat.component';

describe('DisplayStatComponent', () => {
  let component: DisplayStatComponent;
  let fixture: ComponentFixture<DisplayStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
