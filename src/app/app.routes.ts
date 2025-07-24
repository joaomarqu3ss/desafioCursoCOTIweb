import { Routes } from '@angular/router';
import { CadastrarProduto } from './components/cadastrar-produto/cadastrar-produto';
import { ConsultarProduto } from './components/consultar-produto/consultar-produto';

export const routes: Routes = [

{
    path:'cadastrar',
    component:CadastrarProduto
},
{
    path:'consulta',
    component:ConsultarProduto
},


];
