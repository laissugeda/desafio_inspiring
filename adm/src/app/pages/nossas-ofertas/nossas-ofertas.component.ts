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
  ofertas!: any[]
  game: any = {}

  constructor(
    private service: OfertasService,
  ) { }

  ngOnInit(): void {
    console.log(this.editar(112330))
    //this.dataSource = JSON.parse(window.localStorage.getItem("ofertas-game-tracker"));
    this.service.getPrincipal().subscribe(res => {
      this.dataSource = res
      console.log(this.dataSource)
    })
  }

  editar(id: number){
    this.service.getByID(id).subscribe(res =>{
      this.game = res
    })
  }
}
