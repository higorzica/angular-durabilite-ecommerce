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
    this.produtosService.getProdutos().subscribe((data) => {
      this.cardProdutos=data
    });
  }



}
