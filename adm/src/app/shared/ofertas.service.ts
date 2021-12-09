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

  // private urlDeals = "https://www.cheapshark.com/api/1.0/deals?"
  // private urlGames = "https://www.cheapshark.com/api/1.0/games?"
  private url = "http://localhost:3000/ofertas/"

  public getPrincipal(): Observable<any[]>{
    return this.http.get<any[]>(this.url)
  }
  public getByID(id: number): Observable<any[]>{
    return this.http.get<any[]>(this.url + id)
  }

  update(id: number, data): Observable<any> {
    return this.http.put(this.url + id, data);
  }

  criar(oferta): Observable<any>{
    return this.http.post(this.url, oferta).pipe(take(1))
  }  


  // pesquisar(title: string): Observable<any> {
  //   return this.http.get(this.urlGames + "title=" + title);
  // }



}
