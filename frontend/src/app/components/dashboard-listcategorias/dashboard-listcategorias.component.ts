import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import {faTrash, faPenToSquare  } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-dashboard-listcategorias',
  templateUrl: './dashboard-listcategorias.component.html',
  styleUrls: ['./dashboard-listcategorias.component.scss']
})
export class DashboardListcategoriasComponent implements OnInit {
  categoriasLista: any;
  produtoMensagem: undefined|string;
  iconDel = faTrash;
  iconEdit = faPenToSquare;

  constructor(private categoriaService: CategoriasService) {}

  ngOnInit(): void {
    this.ListaCategorias();
  }

  ListaCategorias(){
    this.categoriaService.getCategorias().subscribe((res) => {
      this.categoriasLista=res;
      console.warn(this.categoriasLista)
    })
  }

  apagarCategoria(id: number| null | undefined){
    console.warn("teste id apagar", id)
    this.categoriaService.deleteCategoria(id).subscribe((res) => {
      if (res) {
        this.produtoMensagem = "Produto Apagado com Sucesso!"
        this.ListaCategorias();
      }
    })
    setTimeout(() => {
      this.produtoMensagem=undefined
    },3000);
  }

}
