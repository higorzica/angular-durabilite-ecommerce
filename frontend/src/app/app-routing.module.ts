import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NossahistoriaComponent } from './components/nossahistoria/nossahistoria.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { CadUsuariosComponent } from './components/cad-usuarios/cad-usuarios.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { DashboardAddprodutosComponent } from './components/dashboard-addprodutos/dashboard-addprodutos.component';
import { DashboardListprodutosComponent } from './components/dashboard-listprodutos/dashboard-listprodutos.component';
import { DashboardEditarprodutoComponent } from './components/dashboard-editarproduto/dashboard-editarproduto.component';
import { PesquisarComponent } from './components/pesquisar/pesquisar.component';
import { ProdutoDetalhesComponent } from './components/produto-detalhes/produto-detalhes.component';
import { DashboardAddcategoriasComponent } from './components/dashboard-addcategorias/dashboard-addcategorias.component';
import { DashboardListcategoriasComponent } from './components/dashboard-listcategorias/dashboard-listcategorias.component';
import { DashboardListusuariosComponent } from './components/dashboard-listusuarios/dashboard-listusuarios.component';
import { DashboardAddusuariosComponent } from './components/dashboard-addusuarios/dashboard-addusuarios.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'nossahistoria',
    component: NossahistoriaComponent
  },
  {
    path:'produtos',
    component: ProdutosComponent
  },
  {
    path:'cad-usuarios',
    component: CadUsuariosComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'dashboard-addprodutos',
    component: DashboardAddprodutosComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'dashboard-listprodutos',
    component: DashboardListprodutosComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'dashboard-editarprodutos/:id',
    component: DashboardEditarprodutoComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'pesquisar/:query',
    component: PesquisarComponent
  },
  {
    path:'detalhesproduto/:id',
    component: ProdutoDetalhesComponent
  },
  {
    path:'dashboard-addcategorias',
    component: DashboardAddcategoriasComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'dashboard-listcategorias',
    component: DashboardListcategoriasComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'dashboard-listusuarios',
    component: DashboardListusuariosComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'dashboard-addusuarios',
    component: DashboardAddusuariosComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
