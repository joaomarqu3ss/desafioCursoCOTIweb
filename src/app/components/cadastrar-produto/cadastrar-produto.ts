import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cadastrar-produto',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './cadastrar-produto.html',
  styleUrl: './cadastrar-produto.css'
})
export class CadastrarProduto {

  mensagem = signal('');

  http = inject(HttpClient);

  fb = inject(FormBuilder);

  form = this.fb.group({
    nome: ['',[Validators.required]],
    preco: ['',[Validators.required]],
    quantidade: ['',[Validators.required]]
  })

  onSubmit() {
    this.http.post(environment.apiProduto, this.form.value)
    .subscribe({
        next: (response : any) => { 
          this.mensagem.set(`${response.nome} cadastrado(a)!`),
          this.form.reset();
        },
        error: (e) => { 
          alert(console.log(e.error.erro)); 
          
        }
      });
  }

}
