import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { PopupService } from 'src/app/services/popup.service';
import { PricelistTypeItem, pricelistItem } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-admin-methodadd-popup',
  templateUrl: './admin-methodadd-popup.component.html',
  styleUrls: ['./admin-methodadd-popup.component.scss']
})
export class AdminMethodaddPopupComponent implements OnInit {

  form: FormGroup
  typeList: PricelistTypeItem[]

  @Output() onAdd: EventEmitter<pricelistItem> = new EventEmitter<pricelistItem>()

  constructor(public popupService: PopupService, private http: HttpService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
  }

  closePopup() {
    this.popupService.isAddMethodItem = false
  }

  addItem() {
    this.onAdd.emit(this.form.value)
    this.closePopup()
  }

}
