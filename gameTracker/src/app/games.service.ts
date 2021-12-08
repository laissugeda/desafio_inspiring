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

  private url = "https://www.cheapshark.com/api/1.0/deals?pageNumber=0&pageSize=12&storeID=1&onSale=1&AAA=1"
  posicao = this.url.indexOf("12")

  public getPrincipal(): Observable<any[]>{
    return this.http.get<any[]>(this.url)
  }

  public carregarMais(soma: number): Observable<any>{
    let valor_original = this.url[this.posicao] + this.url[this.posicao+1]
    let novo_valor = parseInt(valor_original)
    novo_valor += soma
    let nova_url = this.url.replace(valor_original, novo_valor.toString())
      return this.http.get<any[]>(nova_url)
  }
}
