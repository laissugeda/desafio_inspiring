import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/games.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDetalhesComponent } from 'src/app/dialog-detalhes/dialog-detalhes.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  ofertas!: any[]
  pageSize!: any[]
  soma = 12 //item por página
  option = "% de Descontos"
  elementoPesquisa!: string
  //resultado!: any[]

  constructor(
    private service: GamesService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.service.getPrincipal().subscribe(res => {
      this.ofertas = res
      //ordena por desconto e fecha select
      this.ofertas.sort(function (a, b) {
        let a1 = 100 - (Math.round(a.salePrice*100/a.normalPrice))
        let b1 = 100 - (Math.round(b.salePrice*100/b.normalPrice))
        return (a1 < b1) ? 1 : ((b1 < a1) ? -1 : 0);
      })
      this.pageSize = this.ofertas.slice(0, this.soma)  
      }
    )  
  }


  abreDetalhes(id: number){
    const dialogRef = this.dialog.open(DialogDetalhesComponent, {
      width: '400px',
      data: {id : id}
    });
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
  }

  pesquisa(event: Event) {
    this.elementoPesquisa = (event.target as HTMLInputElement).value //retorna valor do input
    let resultado = []
    for (let game of this.ofertas){
      // verifica se a palavra pesquisada (em letras minusulas e sem espaços) existe no titulo de algum jogo
      if (game.title.trim().toLowerCase().includes(this.elementoPesquisa)){
        resultado.push(game) // this.resultado recebe os jogos que contem o elemento no titulo
      }
      //mensagem de erro caso this.resultado seja vazio 
      if(this.elementoPesquisa.length > 2 && resultado.length == 0){
        this.snackBar.open("Jogo não encontrado!", " ", {duration: 3000})
      }
    }
    this.pageSize = resultado.slice(0, this.soma)
  }


// método de filtros
  ordenaPor(filtro: string){
    let conteudo
    //verifica o conteudo a ser filtrado (resultado de pesquisa, ou conteudo geral)
    if(this.elementoPesquisa){
      conteudo = this.pageSize
    }
    else{
      conteudo = this.ofertas
    }
    switch(filtro){
      case "maior_preco":
        this.option = "Maior preço"
        conteudo.sort(function (a, b) {
          return a.salePrice - b.salePrice //coloca em ordem crescente
        })
        conteudo.reverse() // inverte a ordem, deixando decrescente
        this.pageSize = conteudo.slice(0, this.soma)  // atualiza a ordem dos cards sem perder a quantidade por pagina
        this.abreSelect()
        break

      case "menor_preco":
        this.option = "Menor preço"
        conteudo.sort(function (a, b) {
          return a.salePrice - b.salePrice
        })
        this.pageSize = conteudo.slice(0, this.soma)  
        this.abreSelect()
        break

      case "titulo":
        this.option = "Título"
        conteudo.sort(function (a, b) {
          return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);
        })
        this.pageSize = conteudo.slice(0, this.soma)  
        this.abreSelect()
        break

      default:
        this.option = "% de Desconto"
        conteudo.sort(function (a, b) {
          let a1 = 100 - (Math.round(a.salePrice*100/a.normalPrice))
          let b1 = 100 - (Math.round(b.salePrice*100/b.normalPrice))
          return (a1 < b1) ? 1 : ((b1 < a1) ? -1 : 0);
        })
        this.pageSize = conteudo.slice(0, this.soma)  
        this.abreSelect()
    }
  }

}
