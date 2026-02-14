import { Component } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { AmenitiesComponent } from './components/amenities/amenities';
import { FloorPlansComponent } from './components/floor-plans/floor-plans';
import { LocationComponent } from './components/location/location';
import { GalleryComponent } from './components/gallery/gallery';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { EnquiryPopupComponent } from './components/enquiry-popup/enquiry-popup';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    AmenitiesComponent,
    FloorPlansComponent,
    LocationComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
    EnquiryPopupComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  isPopupOpen = true;

  openPopup() {
    this.isPopupOpen = true;
  }

}
