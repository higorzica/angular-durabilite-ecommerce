import { Component, OnInit } from '@angular/core';
import { AddProdutos } from "src/app/interfaces/AddProdutos";
import { ProdutosService } from 'src/app/services/produtos.service';
import {faTrash, faPenToSquare  } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-dashboard-listprodutos',
  templateUrl: './dashboard-listprodutos.component.html',
  styleUrls: ['./dashboard-listprodutos.component.scss']
})
export class DashboardListprodutosComponent implements OnInit {
  produtosLista: undefined | AddProdutos[]
  produtoMensagem: undefined|string;
  iconDel = faTrash;
  iconEdit = faPenToSquare;

  constructor(private produtosService: ProdutosService ) {}

  ngOnInit(): void {
    this.AtualizarLista();
  }

  apagarProduto(id: number| null | undefined){
    console.warn("teste id apagar", id)
    this.produtosService.deleteProdutos(id).subscribe((res) => {
      if (res) {
        this.produtoMensagem = "Produto Apagado com Sucesso!"
        this.AtualizarLista();
      }
    })
    setTimeout(() => {
      this.produtoMensagem=undefined
    },3000);
  }

  AtualizarLista(){
    this.produtosService.getProdutos().subscribe((res) => {
      this.produtosLista=res;
      console.warn(this.produtosLista)
    })
  }

}
