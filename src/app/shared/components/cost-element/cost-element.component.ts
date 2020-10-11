import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';
import { pricelistItem } from '../../interfaces/interfaces';

@Component({
  selector: 'app-cost-element',
  templateUrl: './cost-element.component.html',
  styleUrls: ['./cost-element.component.scss']
})
export class CostElementComponent implements OnInit {

  selectedType: number = 0
  pricelist: pricelistItem[] = []

  constructor(private popupService: PopupService) { }

  ngOnInit() {
    this.pricelist = [
      {name: "Комната", price: "800 руб", type: 0},
      {name: "Квартира", price: "1000 руб", type: 0},
      {name: "Комната", price: "1800 руб", type: 0},
      {name: "Квартира", price: "2000 руб", type: 0},
      {name: "Дом", price: "800 руб", type: 1},
      {name: "Дом 2", price: "1000 руб", type: 1},
      {name: "Дом 3", price: "1100 руб", type: 1},
      {name: "Дом 4", price: "11000 руб", type: 1},
      {name: "200 квм", price: "800 руб", type: 2},
      {name: "300 квм", price: "1000 руб", type: 2},
      {name: "200 квм", price: "8000 руб", type: 2},
      {name: "300 квм", price: "10000 руб", type: 2},
      {name: "300 квм", price: "10000 руб", type: 2}
    ]
  }

  openOrderPopup(item) {
    this.popupService.isOrderPopup = true
    this.popupService.orderSubject = item
  }

}
