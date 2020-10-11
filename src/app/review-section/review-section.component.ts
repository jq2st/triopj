import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-section',
  templateUrl: './review-section.component.html',
  styleUrls: ['./review-section.component.scss']
})
export class ReviewSectionComponent implements OnInit {

  slidesAmount = 2
  winWidth

  constructor() { }

  ngOnInit() {
    this.winWidth = document.documentElement.clientWidth
    if (this.winWidth < 550) {
      this.slidesAmount = 1
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth > 550) {
      this.slidesAmount = 2
    }
    else {
      this.slidesAmount = 1
    }
  }

}
