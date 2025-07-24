import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-consultar-produto',
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './consultar-produto.html',
  styleUrl: './consultar-produto.css'
})
export class ConsultarProduto {

  http = inject(HttpClient);

  fb = inject(FormBuilder);

  produtos = signal<any[]>([]);

  ngOnInit(){
    
    this.http.get(environment.apiProduto)
    .subscribe((response: any) => {
      this.produtos.set(response)
    })
  }
}
