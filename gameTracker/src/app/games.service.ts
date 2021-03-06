import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators'

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
  public getByID(gameID: number){
    return this.http.get('https://www.cheapshark.com/api/1.0/games?id=' + gameID).pipe(take(1))
  }
}
