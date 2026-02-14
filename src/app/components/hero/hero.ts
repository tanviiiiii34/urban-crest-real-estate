import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {

  @Output() enquireClick = new EventEmitter<void>();

  openPopup() {
    this.enquireClick.emit();
  }

}
