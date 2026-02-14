import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorPlans } from './floor-plans';

describe('FloorPlans', () => {
  let component: FloorPlans;
  let fixture: ComponentFixture<FloorPlans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloorPlans]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloorPlans);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
