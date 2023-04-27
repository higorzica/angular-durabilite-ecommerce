import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ToastrService } from 'ngx-toastr';
import { ListProdutos } from 'src/app/interfaces/produtos';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.scss']
})
export class ProdutoDetalhesComponent implements OnInit {
  produtoItem!: ListProdutos;
  id!: number;
  titleEmpresa: string = 'Durabilite Brechó';

  constructor(private activeRoute: ActivatedRoute,
    private produtosService: ProdutosService,
    private toastr: ToastrService) {
      this.id = Number(activeRoute.snapshot.paramMap.get('id'));
      console.log(this.id);
    }

  ngOnInit(): void {
    this.getProduto(this.id);
  }

  getProduto(id: number){
    this.produtosService.getProduto(id).subscribe((data:ListProdutos) => {
      this.produtoItem = data;
      console.log(this.produtoItem)
    })
  }

}
