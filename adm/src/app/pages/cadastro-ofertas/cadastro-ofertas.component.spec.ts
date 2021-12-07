import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroOfertasComponent } from './cadastro-ofertas.component';

describe('CadastroOfertasComponent', () => {
  let component: CadastroOfertasComponent;
  let fixture: ComponentFixture<CadastroOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroOfertasComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
