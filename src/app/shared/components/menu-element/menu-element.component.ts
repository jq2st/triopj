import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-menu-element',
  templateUrl: './menu-element.component.html',
  styleUrls: ['./menu-element.component.scss']
})
export class MenuElementComponent implements OnInit {

  isMobileMenu = false

  constructor(public popupService: PopupService) { }

  ngOnInit() {
  }

  goTo(link) {
    document.getElementById(link).scrollIntoView({behavior: 'smooth', block: 'center'})
  }

}
