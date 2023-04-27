import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NossahistoriaComponent } from './components/nossahistoria/nossahistoria.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadUsuariosComponent } from './components/cad-usuarios/cad-usuarios.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardAddprodutosComponent } from './components/dashboard-addprodutos/dashboard-addprodutos.component';
import { DashboardListprodutosComponent } from './components/dashboard-listprodutos/dashboard-listprodutos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardEditarprodutoComponent } from './components/dashboard-editarproduto/dashboard-editarproduto.component';
import { PesquisarComponent } from './components/pesquisar/pesquisar.component';
import { ProdutoDetalhesComponent } from './components/produto-detalhes/produto-detalhes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DashboardAddcategoriasComponent } from './components/dashboard-addcategorias/dashboard-addcategorias.component';
import { DashboardListcategoriasComponent } from './components/dashboard-listcategorias/dashboard-listcategorias.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NossahistoriaComponent,
    ProdutosComponent,
    CadUsuariosComponent,
    DashboardComponent,
    DashboardAddprodutosComponent,
    DashboardListprodutosComponent,
    DashboardEditarprodutoComponent,
    PesquisarComponent,
    ProdutoDetalhesComponent,
    DashboardAddcategoriasComponent,
    DashboardListcategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
