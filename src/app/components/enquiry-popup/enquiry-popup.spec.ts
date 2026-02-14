import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryPopup } from './enquiry-popup';

describe('EnquiryPopup', () => {
  let component: EnquiryPopup;
  let fixture: ComponentFixture<EnquiryPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnquiryPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquiryPopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
