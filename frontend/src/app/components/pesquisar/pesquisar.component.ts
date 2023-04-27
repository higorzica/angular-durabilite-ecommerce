import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddProdutos } from "src/app/interfaces/AddProdutos";
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.scss']
})
export class PesquisarComponent implements OnInit {
  pesquisarResultado: undefined| AddProdutos[];


  constructor(private activeRoute: ActivatedRoute,
    private produtosService: ProdutosService) {}

  ngOnInit(): void {
    let query= this.activeRoute.snapshot.paramMap.get('query');
    console.warn(query)
    query && this.produtosService.pesquisarProdutos(query).subscribe((res) => {
      this.pesquisarResultado= res;
    })
  }

}
