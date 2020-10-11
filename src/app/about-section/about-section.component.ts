import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {

  aboutList = []

  constructor() { }

  ngOnInit() {
    this.aboutList = [
      {image: '', name: 'Приедем к вам 24/7', text: 'Выезд специалиста к Вам через 1 час после звонка или в удобное для вас время'},
      {image: '', name: 'Проверенные препараты', text: 'Мы используем проверенные импортные препараты, которые показывают максимальный эффект'},
      {image: '', name: 'Оплата по факту', text: 'Мы берем деньги только после факта уничтожения всех паразитов в вашей квартире, доме, офисе.'},
      {image: '', name: 'Приедем к вам 24/7', text: 'Выезд специалиста к Вам через 1 час после звонка или в удобное для вас время'},
      {image: '', name: 'Проверенные препараты', text: 'Мы используем проверенные импортные препараты, которые показывают максимальный эффект'},
      {image: '', name: 'Оплата по факту', text: 'Мы берем деньги только после факта уничтожения всех паразитов в вашей квартире, доме, офисе.'}
    ]
  }

}
