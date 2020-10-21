import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { PopupService } from 'src/app/services/popup.service';
import { pricelistItem, PricelistTypeItem } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  editingPriceItem
  priceTypeList: PricelistTypeItem[] = []
  priceList: pricelistItem[] = []

  constructor(private httpService: HttpService, public popupService: PopupService) { }

  ngOnInit(): void {
    this.httpService.getPriceTypes()
      .subscribe(n => this.priceTypeList = n)
    this.httpService.getPriceItems()
      .subscribe(n => this.priceList = n)
  }

  addPriceType(item) {
    this.httpService.addPriceType(item)
      .subscribe(n => console.log(n))
  }

  deletePriceType() {

  }

  addItem(item) {
    this.httpService.addPriceItem(item)
    .subscribe(n => this.priceList.push(n))
  }

  editPriceItem(item) {
    this.editingPriceItem = item
    this.popupService.isEditPriceItem = true
  }

  deletePriceItem(id) {
    this.httpService.deletePriceItem(id)
      .subscribe(n => {
        this.priceList = this.priceList.filter(n => {
          return n.id != id
        })
      })
  }

}
