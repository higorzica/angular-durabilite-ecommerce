import { Component, OnInit } from '@angular/core';
import { AddProdutos } from "src/app/interfaces/AddProdutos";
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  cardProdutos: undefined | AddProdutos[]

  constructor(private produtosService: ProdutosService)  {}

  ngOnInit(): void {
    this.TodosProdutosAtivos();
  }

  TodosProdutosAtivos() {
    this.produtosService.popularProdutos().subscribe((data) => {
      this.cardProdutos=data;
      const filtroCarroselAtivos = this.cardProdutos.filter((obj:any) => {
        return obj.status === 'ativo'
      })
      console.log(filtroCarroselAtivos)
      this.cardProdutos = filtroCarroselAtivos;
    });
  }



}
