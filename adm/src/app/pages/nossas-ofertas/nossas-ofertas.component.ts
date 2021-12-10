import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/shared/ofertas.service';
import { Router } from '@angular/router'

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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getPrincipal().subscribe(res => {
      this.dataSource = res
    })
  }

  aEditar(id: number){
    this.router.navigate(['editarOferta/' + id])
  }
}
