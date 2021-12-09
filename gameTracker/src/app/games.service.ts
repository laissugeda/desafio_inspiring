import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class GamesService {
  constructor(
    private http: HttpClient
  ) { }

  private url = "https://www.cheapshark.com/api/1.0/deals?storeID=1"

  public getPrincipal(): Observable<any[]>{
    return this.http.get<any[]>(this.url)
  }

  public carregarMais(soma: number): Observable<any>{
    let nova_url = this.url + "&pageSize=" + soma
      return this.http.get<any[]>(nova_url)
  }
}
