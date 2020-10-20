import { Injectable } from '@angular/core';
import { pricelistItem } from '../shared/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  isOrderPopup = false
  isCallPopup = false
  orderSubject: pricelistItem

  isEditPriceItem = false
  isAddPriceItem = false

}
