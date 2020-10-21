import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { PopupService } from 'src/app/services/popup.service';
import { PricelistTypeItem, pricelistItem, MethodItem } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-admin-methodedit-popup',
  templateUrl: './admin-methodedit-popup.component.html',
  styleUrls: ['./admin-methodedit-popup.component.scss']
})
export class AdminMethodeditPopupComponent implements OnInit {

  form: FormGroup
  typeList: PricelistTypeItem[]

  @Input('editItem') editingItem: MethodItem

  @Output() onEdit: EventEmitter<pricelistItem> = new EventEmitter<pricelistItem>()

  constructor(public popupService: PopupService, private http: HttpService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(this.editingItem.name, Validators.required),
      description: new FormControl(this.editingItem.description, Validators.required)
    })
  }

  closePopup() {
    this.popupService.isEditMethodItem = false
  }

  editItem() {
    let item = {...this.form.value, id: this.editingItem.id}
    this.onEdit.emit(item)
    this.closePopup()
  }

}
