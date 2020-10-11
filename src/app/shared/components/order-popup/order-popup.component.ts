import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PopupService } from 'src/app/services/popup.service';
import { pricelistItem } from '../../interfaces/interfaces';

@Component({
  selector: 'app-order-popup',
  templateUrl: './order-popup.component.html',
  styleUrls: ['./order-popup.component.scss']
})
export class OrderPopupComponent implements OnInit {

  orderSubject: pricelistItem
  form: FormGroup

  constructor(public popupService: PopupService, private http: HttpClient) { }

  ngOnInit() {
    this.orderSubject = this.popupService.orderSubject
    this.form = new FormGroup({
      name: new FormControl(''),
      phone: new FormControl('')
    })
  }

  closePopup() {
    this.popupService.isOrderPopup = false
  }

  order(orderName, orderPrice) {
    let message = 'Новая заявка с сайта. %0AПользователь: ' + this.form.value.name + ' %0AНомер телефона: ' + this.form.value.phone + ' %0AЗаказал услугу ' + orderName + ' ('+ orderPrice + ')'
    this.http.post(`https://api.telegram.org/bot1388219777:AAEmHbmYYMA-eMIGDFFKge0UD5bb9cjOq3M/sendMessage?chat_id=-329072915&parse_mode=html&text=${message}`, 'text')
      .subscribe(n => console.log(n))
  }

}
