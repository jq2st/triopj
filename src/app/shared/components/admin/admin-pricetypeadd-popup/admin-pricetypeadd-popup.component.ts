import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { PopupService } from 'src/app/services/popup.service';
import { pricelistItem, PricelistTypeItem } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-admin-pricetypeadd-popup',
  templateUrl: './admin-pricetypeadd-popup.component.html',
  styleUrls: ['./admin-pricetypeadd-popup.component.scss']
})
export class AdminPricetypeaddPopupComponent implements OnInit {

  form: FormGroup

  @Output() onAdd: EventEmitter<PricelistTypeItem> = new EventEmitter<PricelistTypeItem>()

  constructor(public popupService: PopupService, private http: HttpService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
    })
  }

  closePopup() {
    this.popupService.isAddPriceTypeItem = false
  }

  addItem() {
    this.onAdd.emit(this.form.value)
    this.closePopup()
  }

}
