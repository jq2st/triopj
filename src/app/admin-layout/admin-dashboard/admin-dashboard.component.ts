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
  editingMethodItem
  priceTypeList: PricelistTypeItem[] = []
  priceList: pricelistItem[] = []
  methodList = []

  constructor(private httpService: HttpService, public popupService: PopupService) { }

  ngOnInit(): void {
    // this.httpService.getPriceTypes()
    //   .subscribe(n => {
    //     this.priceTypeList = n
    //     this.httpService.getPriceItems()
    //       .subscribe(i => {
    //         this.priceList = i.map(x => {
    //           let q = n.find(qur => qur.id = x.type)
    //           return ({
    //             ...x,
    //             type: q.name
    //           })
    //         })
    //       })
    //   })
    this.httpService.getPriceTypes()
      .subscribe(n => this.priceTypeList = n)
    
    this.httpService.getPriceItems()
      .subscribe(n => this.priceList = n)

    this.httpService.getMethods()
      .subscribe(n => this.methodList = n)

  }

  addPriceType(item) {
    this.httpService.addPriceType(item)
      .subscribe(n => this.priceTypeList.push(n))
  }

  deletePriceType(id) {
    this.httpService.deletePriceType(id)
      .subscribe(n => {
        this.priceTypeList = this.priceTypeList.filter(n => {
          return n.id != id
        })
      })
  }


  addItem(item) {
    this.httpService.addPriceItem(item)
    .subscribe(n => this.priceList.push(n))
  }

  editPriceItem(item) {
    this.editingPriceItem = item
    this.popupService.isEditPriceItem = true
  }

  editItem(item) {
    this.httpService.editPriceItem(item)
      .subscribe(n => {
        this.priceList.forEach((x, i) => {
          if (x.id == n.id) {
            this.priceList[i] = n
          }
        })
      })
  }

  deletePriceItem(id) {
    this.httpService.deletePriceItem(id)
      .subscribe(n => {
        this.priceList = this.priceList.filter(n => {
          return n.id != id
        })
      })
  }


  editMethod(item) {
    this.httpService.editMethod(item)
      .subscribe(n => {
        this.methodList.forEach((x, i) => {
          if (x.id == n.id) {
            this.methodList[i] = n
          }
        })
      })
  }

  editMethodItem(item) {
    this.editingMethodItem = item
    this.popupService.isEditMethodItem = true
  }

  addMethod(item) {
    this.httpService.addMethod(item)
      .subscribe(n => this.methodList.push(n))
  }

  deleteMethod(id) {
    this.httpService.deleteMethod(id)
      .subscribe(n => {
        this.methodList = this.methodList.filter(n => {
          return n.id != id
        })
      })
  }

}
