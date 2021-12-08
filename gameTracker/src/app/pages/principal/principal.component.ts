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
  banner!: string
  constructor(
    private service: GamesService
  ) { }

  ngOnInit(): void {
    this.service.getPrincipal().subscribe(res => {
      this.ofertas = res
      console.log(this.ofertas)
      }
    )  
  }

  desconto(pp: number, pn: number){
    let aux = Math.round((pp*100/pn)-100)
    return aux
  }

}
