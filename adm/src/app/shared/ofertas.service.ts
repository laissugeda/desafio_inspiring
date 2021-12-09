import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Games, Ofertas } from './games.model';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class OfertasService {
  constructor(
    private http: HttpClient
  ) { }

  private urlDeals = "https://www.cheapshark.com/api/1.0/deals?"
  private urlGames = "https://www.cheapshark.com/api/1.0/games?"

  public getPrincipal(): Observable<any[]>{
    return this.http.get<any[]>(this.urlDeals + "storeID=1")
  }
  public getByID(id: number){
    return this.http.get<any[]>(this.urlGames + "id=" + id)
  }

  update(id: number, data): Observable<any> {
    return this.http.put(this.urlGames + "id=" + id, data);
  }

  pesquisar(title: string): Observable<any> {
    return this.http.get(this.urlGames + "title=" + title);
  }

  criar(oferta){
    return this.http.post(this.urlDeals, oferta).pipe(take(1))
  }

}
