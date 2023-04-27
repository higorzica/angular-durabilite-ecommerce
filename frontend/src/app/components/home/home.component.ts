import { Component, OnInit } from '@angular/core';
import { AddProdutos } from "src/app/interfaces/AddProdutos";
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  popularProdutosCarrosel: undefined | AddProdutos[]

  constructor(private produtosService: ProdutosService)  {}

  ngOnInit(): void {
    this.todosProdutosCard();

  }

  todosProdutosCard() {
    this.produtosService.popularProdutos().subscribe((data) => {
      this.popularProdutosCarrosel=data;
    });
  }

  

}
