import {
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-enquiry-popup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './enquiry-popup.html',
  styleUrl: './enquiry-popup.css'
})
export class EnquiryPopupComponent implements OnChanges {

  @Input() isOpen = false;

  enquiryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.enquiryForm = this.fb.group({
      name: ['', Validators.required],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{10}$')
        ]
      ],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // Disable / enable background scroll
  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen']) {
      if (this.isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }

  close() {
    this.isOpen = false;
    document.body.style.overflow = 'auto';
  }

  submitForm() {
    if (this.enquiryForm.valid) {
      console.log(this.enquiryForm.value);

      alert('Enquiry Submitted Successfully!');

      this.enquiryForm.reset();
      this.close();
    }
  }
}
