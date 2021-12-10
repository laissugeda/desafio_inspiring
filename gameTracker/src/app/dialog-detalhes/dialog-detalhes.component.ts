import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-dialog-detalhes',
  templateUrl: './dialog-detalhes.component.html',
  styleUrls: ['./dialog-detalhes.component.css']
})
export class DialogDetalhesComponent implements OnInit {

  itemDetalhe!: any
  jogo = {}

  constructor(    
    @Inject (MAT_DIALOG_DATA)
    public data: {id: number},
    public service: GamesService
    ) {}

  ngOnInit(): void {
    this.service.getByID(this.data.id).subscribe(res => {
      this.itemDetalhe = res
    })
  }

  dados(detalhe: any){
    this.jogo = {
      title: detalhe.title,
      normalPrice: detalhe.retailPrice,
      salePrice: detalhe.price
    }
  }

}
