import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OfertasService } from 'src/app/shared/ofertas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-cadastro-ofertas',
  templateUrl: './cadastro-ofertas.component.html',
  styleUrls: ['./cadastro-ofertas.component.scss']
})
export class CadastroOfertasComponent implements OnInit {

  form: FormGroup
  urlAtual: string
  metodo = "salvar"
  id: number
  elemento

  lojas = [
    { id: 1, nome: 'Epic', valor: 5 },
    { id: 2, nome: 'Origin', valor: 2 },
    { id: 3, nome: 'Steam', valor: 7 },
  ];

  constructor(
    private fb: FormBuilder, 
    private service: OfertasService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  this.urlAtual = this.route.toString()
    if(this.urlAtual.includes('editar')){
      this.metodo = "editar"
      this.route.params.subscribe(
        (params: any) => {
          this.id = params['id']
          console.log(this.id)
          this.elemento = this.service.getByID(this.id)
          this.elemento.subscribe(curso => {
            this.atualizarForm(curso)
          })
        }
      )      
    }


    this.form = this.fb.group({
      id: [null, [Validators.required]],
      normalPrice: [null, [Validators.required]],
      salePrice: [null, [Validators.required]],
      title: [null, [Validators.required]],
      loja: [null, [Validators.required]]
    })

  }

  setaMetodo(){
    if (this.metodo == "editar"){
      this.editar(this.id, this.elemento)
    }
    else{
      this.salvar()
    }
  }

  salvar(){
    console.log(this.form.value)
    if (this.form.valid){
      this.service.criar(this.form.value).subscribe(
        success => this.snackBar.open("Oferta salva com sucesso!", "X"),
        error => this.snackBar.open(error, "X")
      )
      this.router.navigate(['/nossasofertas'])
    }
  }

  editar(id, data){
    if(this.form.valid){
      this.service.update(id, data).subscribe(
        success => this.snackBar.open("Oferta editada com sucesso!", "X"),
        error => this.snackBar.open(error, "X")
      )
      this.router.navigate(['/nossasofertas'])
    }
  }

  atualizarForm(elemento){
    this.form.patchValue({
      id: elemento.id,
      normalPrice: elemento.normalPrice,
      salePrice: elemento.salePrice,
      title: elemento.title,
      loja: elemento.loja
    })
  }

}
