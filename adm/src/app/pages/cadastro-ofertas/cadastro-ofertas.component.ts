import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OfertasService } from 'src/app/shared/ofertas.service';

@Component({
  selector: 'app-cadastro-ofertas',
  templateUrl: './cadastro-ofertas.component.html',
  styleUrls: ['./cadastro-ofertas.component.scss']
})
export class CadastroOfertasComponent implements OnInit {

  form: FormGroup

  lojas = [
    { id: 1, nome: 'Epic', valor: 5 },
    { id: 2, nome: 'Origin', valor: 2 },
    { id: 3, nome: 'Steam', valor: 7 },
  ];

  constructor(
    private fb: FormBuilder, 
    private service: OfertasService
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      gameID: [null, [Validators.required]],
      normalPrice: [null, [Validators.required]],
      salePrice: [null, [Validators.required]],
      title: [null, [Validators.required]],
      storeID: [null, [Validators.required]]
    })
  }

  salvar(){
    console.log(this.form.value)
    if (this.form.valid){
      this.service.criar(this.form.value).subscribe(
        success => alert("Oferta criada com sucesso!"),
        error => alert(error)
      )
      console.log("salvarrrr")
    }
  }

}
