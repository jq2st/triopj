import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { PopupService } from './services/popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('toggleHide', [
      transition(':enter', [
        style({opacity: 0}),
        animate('2000ms ease-in', style({opacity: 1}))
      ]),
      transition(':leave', [
        animate('2000ms ease-in', style({opacity: 0}))
      ])
    ])
  ]
})
export class AppComponent {

  constructor(public popupService: PopupService) {}

  title = 'dez'
  isCallPopup = false
  isOrderPopup = false
}
