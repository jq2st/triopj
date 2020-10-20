import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { PopupService } from 'src/app/services/popup.service';
import { pricelistItem } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  priceList: pricelistItem[] = []

  constructor(private httpService: HttpService, public popupService: PopupService) { }

  ngOnInit(): void {
    this.httpService.getPriceItems()
      .subscribe(n => this.priceList = n)
  }

  addItem(item) {
    this.httpService.addPriceItem(item)
    .subscribe(n => this.priceList.push(n))
  }

  editPriceItem(item) {
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
