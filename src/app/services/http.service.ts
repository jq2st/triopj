import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pricelistItem } from '../shared/interfaces/interfaces';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  fb = environment.firebaseConfig

  dbLink = this.fb.databaseURL

  constructor(private http: HttpClient) { }

  getPriceTypes() {
    return this.http.get(this.dbLink + '/pricetypes.json')
  }
  

  getPriceItems(): Observable<pricelistItem[]> {
    return this.http.get<pricelistItem[]>(this.dbLink + '/pricelist.json')
      .pipe(map(resp => {
        return Object
          .keys(resp)
          .map(key => ({
            ...resp[key],
            id: key
          }))
      }))
  }

  addPriceItem(item): Observable<pricelistItem> {
    return this.http.post<pricelistItem>(this.dbLink + '/pricelist.json', item)
      .pipe(map(resp => {
        return ({
          ...item,
          id: resp.name
        })
      }))
  }

  editPriceItem(item) {
    return this.http.put(this.dbLink + '/pricelist/' + item.id + '.json', item)
  }

  deletePriceItem(id) {
    return this.http.delete(this.dbLink + '/pricelist/' + id + '.json')
  }

}
