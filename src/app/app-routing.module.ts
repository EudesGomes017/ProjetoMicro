import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutoDetalheComponent } from './components/produtos/produto-detalhe/produto-detalhe.component';
import { ProdutosListComponent } from './components/produtos/produtos-list/produtos-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProdutoAtualizarComponent } from './components/produtos/produto-atualizar/produto-atualizar.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';

const routes: Routes = [

  //{ path: 'user/perfil', component: PerfilComponent },


  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
    ]
  },

  { path: 'produtos', redirectTo: 'produtos/lista' },

  {
   path: 'produtos', component: ProdutosComponent,
    children: [
      { path: 'atualizar/:id', component: ProdutoAtualizarComponent },
      { path: 'atualizar', component: ProdutoAtualizarComponent },
      { path: 'detalhe/:id', component: ProdutoDetalheComponent },
      { path: 'detalhe', component: ProdutoDetalheComponent },
      { path: 'lista', component: ProdutosListComponent },



    ],
  },

  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
