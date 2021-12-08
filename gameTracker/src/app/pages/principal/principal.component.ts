import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/games.service';
import { Games, Ofertas } from 'src/app/games.model';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  ofertas!: any[]
  ofertasMais!: any[]
  banner!: string
  soma = 12


  constructor(
    private service: GamesService
  ) { }

  ngOnInit(): void {
    this.service.getPrincipal().subscribe(res => {
      this.ofertas = res
      console.log(this.ofertas)
      }
    )  

    // this.service.carregarMais().subscribe(res => {
    //   this.ofertasMais = res
    //   console.log(this.ofertasMais)
    //   }
    // )  
  }

  desconto(pp: number, pn: number){
    let aux = Math.round((pp*100/pn)-100)
    return aux
  }

  botaoCarregarMais(){
    this.service.carregarMais(this.soma).subscribe(res => {
      this.ofertas = res
      this.soma += 12
      console.log(this.ofertas)
      }
    ) 
  }

}
