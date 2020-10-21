import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { PopupService } from 'src/app/services/popup.service';
import { pricelistItem, PricelistTypeItem } from '../../interfaces/interfaces';

@Component({
  selector: 'app-cost-element',
  templateUrl: './cost-element.component.html',
  styleUrls: ['./cost-element.component.scss']
})
export class CostElementComponent implements OnInit {

  selectedType: string
  priceList: pricelistItem[] = []
  priceTypeList: PricelistTypeItem[]

  constructor(private popupService: PopupService, private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getPriceTypes()
      .subscribe(n =>  {
        this.selectedType = n[0].id
        this.priceTypeList = n
      })
    this.httpService.getPriceItems()
      .subscribe(n => this.priceList = n)
  }

  openOrderPopup(item) {
    this.popupService.isOrderPopup = true
    this.popupService.orderSubject = item
  }

}
