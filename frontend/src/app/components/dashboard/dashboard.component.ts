import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddCategoria } from 'src/app/interfaces/AddCategorias';
import { AddProdutos } from "src/app/interfaces/AddProdutos";
import { CadNovosUsuarios } from 'src/app/interfaces/cadnovosusuarios';
import { CategoriasService } from 'src/app/services/categorias.service';
import { NovousuarioService } from 'src/app/services/novousuario.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  produtosLista: undefined | AddProdutos[]
  CategoriaLista: undefined | AddCategoria[]
  UsuariosLista: undefined | CadNovosUsuarios[]
  totalUsuarios!: number;
  totalProdutos!: number;
  totalProdutosAtivos!: any[];
  totalCategorias!: number;
  totalProdutosPreco: any;
  totalPre: any;
  totalPreco: any;
  produtosAtivos!: number;

  constructor(private router: Router,
    private produtosService: ProdutosService,
    private categoriaService: CategoriasService,
    private usuarioService: NovousuarioService ) {}

  ngOnInit(): void {
    this.TotalProdutosLista();
    this.TotalPrecoProdutosCadastrados();
    this.TotalCategoriasLista();
    this.CategoriasLista();
    this.TotalUsuariosLista();
    this.TotalProdutosAtivos();
  }

  TotalUsuariosLista(){
    this.usuarioService.getUsuarios().subscribe((res) => {
      this.totalUsuarios = res.length;
    })
  }

  TotalProdutosLista(){
    this.produtosService.getProdutos().subscribe((res) => {
      this.totalProdutos = res.length;
    })
  }

  TotalCategoriasLista(){
    this.categoriaService.getCategorias().subscribe((res) => {
      this.totalCategorias = res.length;
    })
  }

  CategoriasLista(){
    this.categoriaService.getCategorias().subscribe((res) => {
      this.CategoriaLista = res;
    })
  }

  TotalPrecoProdutosCadastrados(){
    // // PEGANDO TODOS OS PRODUTOS
    // this.produtosService.getProdutos().subscribe((res) => {
    //   this.produtosLista = res;
    //   // console.log(this.produtosLista)
    // })
    // // PEGANDO TODOS OS PRODUTOS MAS SOMENTO O CAMPO PREÇO
    // this.produtosService.getProdutos().subscribe((res) => {
    //   this.produtosLista = res;
    //   let total = this.produtosLista.map(total => Number(total.preco))
    //   this.totalPre = total;
    // // console.log(this.totalPre)
    // })
    // PEGANDO TODOS OS PRODUTOS E SOMANDO O PREÇO DE TODOS PARA TOTALIZAR NO CARD
    this.produtosService.getProdutos().subscribe((res) => {
      this.totalProdutosPreco = res.map(total => Number(total.preco))
      let totalPreco = this.totalProdutosPreco?.reduce((total:any, num:any) => total + num, 0)
      // console.log(totalPreco)
      this.totalProdutosPreco = totalPreco;
    })

  }

  TotalProdutosAtivos() {
    this.produtosService.getProdutos().subscribe((result) => {
      this.totalProdutosAtivos = result.filter(function(ativo) {
        return ativo.status === 'ativo';
      })
      this.produtosAtivos =  this.totalProdutosAtivos.length;
      
    })
  }
  
  listProdutosRota() {
    this.router.navigate(['/dashboard-listprodutos'])
  }

  addProdutosRota() {
    this.router.navigate(['/dashboard-addprodutos'])
  }

  addCategoriasRota() {
    this.router.navigate(['/dashboard-addcategorias'])
  }
    
  listCategoriasRota() {
    this.router.navigate(['/dashboard-listcategorias'])
  }

}

