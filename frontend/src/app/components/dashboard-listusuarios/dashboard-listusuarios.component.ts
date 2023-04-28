import { Component, OnInit } from '@angular/core';
import {faTrash, faPenToSquare  } from '@fortawesome/free-solid-svg-icons'
import { NovousuarioService } from 'src/app/services/novousuario.service';

@Component({
  selector: 'app-dashboard-listusuarios',
  templateUrl: './dashboard-listusuarios.component.html',
  styleUrls: ['./dashboard-listusuarios.component.scss']
})
export class DashboardListusuariosComponent implements OnInit {
  UsuariosLista: any;
  usuarioMensagem: undefined|string;
  iconDel = faTrash;
  iconEdit = faPenToSquare;

  constructor(private usuarioService: NovousuarioService) {}

  ngOnInit(): void {
    this.ListaUsuarios();
  }

  ListaUsuarios(){
    this.usuarioService.getUsuarios().subscribe((res) => {
      this.UsuariosLista=res;
      console.warn(this.UsuariosLista)
    })
  }

  apagarCategoria(id: number| null | undefined){
    console.warn("teste id apagar", id)
    this.usuarioService.deleteUsuario(id).subscribe((res) => {
      if (res) {
        this.usuarioMensagem = "Usuário Apagado com Sucesso!"
        this.ListaUsuarios();
      }
    })
    setTimeout(() => {
      this.usuarioMensagem=undefined
    },3000);
  }

}
