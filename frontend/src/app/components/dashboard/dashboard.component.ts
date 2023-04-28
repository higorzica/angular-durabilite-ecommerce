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
  SomaProdutosAtivos: any;
  produtoAtivoReduceTotal!: any[];

  constructor(private router: Router,
    private produtosService: ProdutosService,
    private categoriaService: CategoriasService,
    private usuarioService: NovousuarioService ) {}

  ngOnInit(): void {
    this.TotalProdutosLista();
    // this.TotalPrecoProdutosCadastrados();
    this.TotalCategoriasLista();
    this.CategoriasLista();
    this.TotalUsuariosLista();
    this.TotalProdutosAtivos();
    this.TotalSomaProdutosAtivos();
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

  // TotalPrecoProdutosCadastrados(){
  //   // // PEGANDO TODOS OS PRODUTOS
  //   // this.produtosService.getProdutos().subscribe((res) => {
  //   //   this.produtosLista = res;
  //   //   // console.log(this.produtosLista)
  //   // })
  //   // // PEGANDO TODOS OS PRODUTOS MAS SOMENTO O CAMPO PREÇO
  //   // this.produtosService.getProdutos().subscribe((res) => {
  //   //   this.produtosLista = res;
  //   //   let total = this.produtosLista.map(total => Number(total.preco))
  //   //   this.totalPre = total;
  //   // // console.log(this.totalPre)
  //   // })
    // PEGANDO TODOS OS PRODUTOS E SOMANDO O PREÇO DE TODOS PARA TOTALIZAR NO CARD
  //   this.produtosService.getProdutos().subscribe((res) => {
  //     this.totalProdutosPreco = res.map(total =>  Number(total.preco))
  //     console.log(this.totalProdutosPreco)
  //     let totalPreco = this.totalProdutosPreco?.reduce((total:any, num:any) => total + num, 0)
  //     console.log(totalPreco)
  //     this.totalProdutosPreco = totalPreco;
  //   })

  // }

  TotalSomaProdutosAtivos() {
    //SE INSCREVE PARA BUSCAR REGISTROS DA API
    this.produtosService.getProdutos().subscribe((res) => {
      this.totalProdutosPreco = res;
      // USA METODO MAP PARA FILTRAR OS REGISTROS
      const totalReajuste = this.totalProdutosPreco.map((total:any )=>  {
        return {
          nome: total.nome,
          categoria: total.categoria,
          preco: total.preco,
          status: total.status

        }
      })
      console.log(totalReajuste)
      // USA METODO FILTER PARA TRAZER APENAS OS PRODUTOS COM STATUS DE ATIVO
      const final = totalReajuste.filter((obj:any) => {
        return obj.status === 'ativo'
      })
      console.log(final)
      // USA METODO MAP NOVAMENTE PARA TRANSFORMAR O ARRAY EM NUMERO E MAPEAR APENAS OS PRECOS
      const valorSeparado = final.map((total:any) =>  Number(total.preco))

      console.log(valorSeparado)
      // USA METODO REDUCE PARA PASSAR POR TODOS OS ITENS FILTRADOS ACIMA E SOMAR UM POR UM
      let totalPreco = valorSeparado.reduce((total:any, num:any) => total + num, 0)
      console.log(totalPreco)
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
  
  listUsuariosRota() {
    this.router.navigate(['/dashboard-listusuarios'])
  }
  
  listCategoriasRota() {
    this.router.navigate(['/dashboard-listcategorias'])
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

  addUsuariosRota() {
    this.router.navigate(['/dashboard-addusuarios'])
  }

}

