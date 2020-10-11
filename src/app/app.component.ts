import { Component } from '@angular/core';
import { PopupService } from './services/popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public popupService: PopupService) {}

  title = 'dez'
  isCallPopup = false
  isOrderPopup = false
}
