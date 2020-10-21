import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { MethodItem } from '../shared/interfaces/interfaces';

@Component({
  selector: 'app-methods-section',
  templateUrl: './methods-section.component.html',
  styleUrls: ['./methods-section.component.scss']
})
export class MethodsSectionComponent implements OnInit {

  methodsList: MethodItem[] = []

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getMethods()
      .subscribe(n => this.methodsList = n)
  }

}
