import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/games.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  ofertas!: any[]
  pageSize!: any[]
  soma = 12
  option = "% de Descontos"

  constructor(
    private service: GamesService
  ) { }

  ngOnInit(): void {
    console.log(document.getElementById("pesquisa")!)
    this.service.getPrincipal().subscribe(res => {
      this.ofertas = res
      this.ofertas.sort(function (a, b) {
        let a1 = 100 - (Math.round(a.salePrice*100/a.normalPrice))
        let b1 = 100 - (Math.round(b.salePrice*100/b.normalPrice))
        return (a1 < b1) ? 1 : ((b1 < a1) ? -1 : 0);
      })
      this.pageSize = this.ofertas.slice(0, this.soma)      
      console.log(this.pageSize)
      }
    )  
  }

  desconto(pp: number, pn: number){
    let aux = Math.round((pp*100/pn)-100)
    return aux
  }

  botaoCarregarMais(){
      this.soma += 12
      this.pageSize = this.ofertas.slice(0, this.soma)  
  }


  abreSelect(){
    if(document.getElementById("botaoSelect")!.style.display == "none"){
      document.getElementById("botaoSelect")!.style.display = "block"
      document.getElementById("select")!.style.display = "none"   
    }
    else{
      document.getElementById("botaoSelect")!.style.display = "none"
      document.getElementById("select")!.style.display = "block" 
    }
    console.log("funfgerg")
  }

  ordenaPor(filtro: string){
    switch(filtro){
      case "maior_preco":
        this.option = "Maior preço"
        this.ofertas.sort(function (a, b) {
          return a.salePrice - b.salePrice
        })
        this.ofertas.reverse()
        this.pageSize = this.ofertas.slice(0, this.soma)  
        this.abreSelect()
        break

      case "menor_preco":
        this.option = "Menor preço"
        this.ofertas.sort(function (a, b) {
          return a.salePrice - b.salePrice
        })
        this.pageSize = this.ofertas.slice(0, this.soma)  
        this.abreSelect()
        break

      case "titulo":
        this.option = "Título"
        this.ofertas.sort(function (a, b) {
          return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);
        })
        this.pageSize = this.ofertas.slice(0, this.soma)  
        this.abreSelect()
        break

      default:
        this.option = "% de Desconto"
        this.ofertas.sort(function (a, b) {
          let a1 = 100 - (Math.round(a.salePrice*100/a.normalPrice))
          let b1 = 100 - (Math.round(b.salePrice*100/b.normalPrice))
          return (a1 < b1) ? 1 : ((b1 < a1) ? -1 : 0);
        })
        this.pageSize = this.ofertas.slice(0, this.soma)  
        this.abreSelect()
    }
  }

}
