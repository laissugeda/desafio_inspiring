import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Games, Ofertas } from './games.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class OfertasService {
  constructor(
    private http: HttpClient
  ) { }

  private url = "https://www.cheapshark.com/api/1.0/deals?pageNumber=0&pageSize=12&storeID=1&onSale=1&AAA=1"

  public getPrincipal(): Observable<Ofertas>{
    return this.http.get<Ofertas>(this.url)
  }

}
