import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-admin-priceadd-popup',
  templateUrl: './admin-priceadd-popup.component.html',
  styleUrls: ['./admin-priceadd-popup.component.scss']
})
export class AdminPriceaddPopupComponent implements OnInit {
  
  form: FormGroup
  typeList

  constructor(public popupService: PopupService, private http: HttpService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      type: new FormControl('')
    })

    this.http.getPriceTypes()
      .subscribe(n => this.typeList = n)
  }

  closePopup() {
    this.popupService.isAddPriceItem = false
  }

  addItem() {
    this.http.addPriceItem(this.form.value)
      .subscribe()
    this.closePopup()
  }

}
