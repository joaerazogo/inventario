import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) {}

  getProduct(ean: string): Observable<any> {
    return this.http.get('https://inventario-eee16-default-rtdb.firebaseio.com/:ean', )
  }
}
