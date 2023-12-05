import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Box2ListComponent } from './box2-list.component';

describe('Box2ListComponent', () => {
  let component: Box2ListComponent;
  let fixture: ComponentFixture<Box2ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Box2ListComponent]
    });
    fixture = TestBed.createComponent(Box2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
