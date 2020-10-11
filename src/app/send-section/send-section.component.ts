import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PopupService } from '../services/popup.service';
import { pricelistItem } from '../shared/interfaces/interfaces';

@Component({
  selector: 'app-send-section',
  templateUrl: './send-section.component.html',
  styleUrls: ['./send-section.component.scss']
})
export class SendSectionComponent implements OnInit {

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

  backCall(orderName, orderPrice) {
    let message = 'Новая заявка с сайта. %0AПользователь: ' + this.form.value.name + ' %0AНомер телефона: ' + this.form.value.phone + ' %0AЗаказал обратный звонок.'
    this.http.post(`https://api.telegram.org/bot1388219777:AAEmHbmYYMA-eMIGDFFKge0UD5bb9cjOq3M/sendMessage?chat_id=-329072915&parse_mode=html&text=${message}`, 'text')
      .subscribe(n => console.log(n))
  }
  
}
