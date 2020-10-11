import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { PopupService } from '../services/popup.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [
    trigger('toggleHide', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in', style({opacity: 1}))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({opacity: 0}))
      ])
    ])
  ]
})
export class MainLayoutComponent {

  constructor(public popupService: PopupService) {}

  title = 'dez'
  isCallPopup = false
  isOrderPopup = false
}
