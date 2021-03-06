import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { PopupService } from 'src/app/services/popup.service';
import { pricelistItem, PricelistTypeItem } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-admin-priceadd-popup',
  templateUrl: './admin-priceadd-popup.component.html',
  styleUrls: ['./admin-priceadd-popup.component.scss']
})
export class AdminPriceaddPopupComponent implements OnInit {
  
  form: FormGroup
  typeList: PricelistTypeItem[]

  @Output() onAdd: EventEmitter<pricelistItem> = new EventEmitter<pricelistItem>()

  constructor(public popupService: PopupService, private http: HttpService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required)
    })

    this.http.getPriceTypes()
      .subscribe(n => this.typeList = n)
  }

  closePopup() {
    this.popupService.isAddPriceItem = false
  }

  addItem() {
    this.onAdd.emit(this.form.value)
    this.closePopup()
  }

}
