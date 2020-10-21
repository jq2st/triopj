import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { PopupService } from 'src/app/services/popup.service';
import { pricelistItem } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-admin-priceedit-popup',
  templateUrl: './admin-priceedit-popup.component.html',
  styleUrls: ['./admin-priceedit-popup.component.scss']
})
export class AdminPriceeditPopupComponent implements OnInit {

  form: FormGroup
  typeList
  
  @Input('editItem') editingItem: pricelistItem

  @Output() onEdit: EventEmitter<pricelistItem> = new EventEmitter<pricelistItem>()

  constructor(public popupService: PopupService, private http: HttpService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(this.editingItem.name, Validators.required),
      price: new FormControl(this.editingItem.price, Validators.required),
      type: new FormControl(this.editingItem.type, Validators.required)
    })

    this.http.getPriceTypes()
      .subscribe(n => this.typeList = n)
    
    console.log(this.editingItem)
  }

  closePopup() {
    this.popupService.isEditPriceItem = false
  }

  editItem() {
    this.onEdit.emit(this.form.value)
    this.closePopup()
  }

}
