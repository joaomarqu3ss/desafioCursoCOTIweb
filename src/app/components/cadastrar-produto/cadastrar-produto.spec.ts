import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarProduto } from './cadastrar-produto';

describe('CadastrarProduto', () => {
  let component: CadastrarProduto;
  let fixture: ComponentFixture<CadastrarProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarProduto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarProduto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
