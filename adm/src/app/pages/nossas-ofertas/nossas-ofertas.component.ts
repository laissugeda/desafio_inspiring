import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/shared/ofertas.service';
import { Games, Ofertas } from 'src/app/shared/games.model';

@Component({
  selector: 'app-nossas-ofertas',
  templateUrl: './nossas-ofertas.component.html',
  styleUrls: ['./nossas-ofertas.component.scss']
})

export class NossasOfertasComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'preco', 'precoDesconto'];
  dataSource;
  ofertas: Ofertas
  games: Games[]

  constructor(
    private service: OfertasService,
  ) { }

  ngOnInit(): void {
    this.dataSource = JSON.parse(window.localStorage.getItem("ofertas-game-tracker"));
    this.service.getPrincipal().subscribe(res => {
      this.ofertas = res
      console.log(this.ofertas)
    })
  }
}
