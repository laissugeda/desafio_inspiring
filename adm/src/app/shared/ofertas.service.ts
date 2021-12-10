import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class OfertasService {
  constructor(
    private http: HttpClient
  ) { }

  private url = "http://localhost:3000/ofertas/"

  getPrincipal(): Observable<any[]>{
    return this.http.get<any[]>(this.url)
  }
  getByID(id: number): Observable<any[]>{
    return this.http.get<any[]>(this.url + id).pipe(take(1))
  }

  update(id: number, data): Observable<any> {
    return this.http.put(this.url + id, data);
  }

  create(oferta): Observable<any>{
    return this.http.post(this.url, oferta).pipe(take(1))
  }  


}
