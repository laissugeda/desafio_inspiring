import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossasOfertasComponent } from './nossas-ofertas.component';

describe('HomeComponent', () => {
  let component: NossasOfertasComponent;
  let fixture: ComponentFixture<NossasOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NossasOfertasComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NossasOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
