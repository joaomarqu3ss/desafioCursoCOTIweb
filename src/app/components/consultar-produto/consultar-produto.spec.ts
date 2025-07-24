import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProduto } from './consultar-produto';

describe('ConsultarProduto', () => {
  let component: ConsultarProduto;
  let fixture: ComponentFixture<ConsultarProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarProduto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarProduto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
