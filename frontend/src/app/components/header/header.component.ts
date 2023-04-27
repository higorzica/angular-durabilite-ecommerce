import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProdutos } from "src/app/interfaces/AddProdutos";
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuType: String = 'default';
  usuarioName: string = '';
  pesquisaResultado: undefined | AddProdutos[];

  constructor(private router: Router,
    private produtosService: ProdutosService  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((val:any) => {
      if (val.url) {
        // console.warn(val.url)
        if (localStorage.getItem('usuario') && val.url.includes('dashboard')) {
          // console.warn('dentro do dash')
          this.menuType='usuario'
          if (localStorage.getItem('usuario')) {
            let usuarioStore= JSON.parse(localStorage.getItem('usuario') || "")
            // console.log(usuarioStore)
            this.usuarioName = usuarioStore.email;
            // let usuarioData = usuarioStore && JSON.parse(usuarioStore)[0];
            // console.warn(usuarioData)
            // this.usuarioName= usuarioData;
          }
        }else {
          // console.warn('fora do dash')
          this.menuType='default'
        }
      }
    })
  }

  logout() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/'])
  }

  pesquisarProduto(query: KeyboardEvent){
    if (query) {
      const element = query.target as HTMLInputElement;
      this.produtosService.pesquisarProdutos(element.value).subscribe((res) => {
        if (res.length>4) {
          res.length=4;
        }
        this.pesquisaResultado = res;
      })
    }
  }

  hidePesquisar() {
    this.pesquisaResultado=undefined;
  }

  redirecionaProdDetalhes(id: number| null | undefined){
    this.router.navigate(['/detalhesproduto/'+id])
  }

  submitPesquisar(val:string){
    this.router.navigate([`pesquisar/${val}`])
  }

}
