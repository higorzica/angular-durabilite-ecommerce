import { Component, OnInit } from '@angular/core';
import { NovousuarioService } from 'src/app/services/novousuario.service';
import { Router } from '@angular/router';
import { CadNovosUsuarios } from 'src/app/interfaces/cadnovosusuarios';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cad-usuarios',
  templateUrl: './cad-usuarios.component.html',
  styleUrls: ['./cad-usuarios.component.scss']
})
export class CadUsuariosComponent implements OnInit {
  nome: string = '';
  email: string = '';
  senha: string = '';
  active= 1;
  authError:string= '';

  constructor(private novoUsuario: NovousuarioService,
    private router: Router,
    private toastr: ToastrService) {}

    ngOnInit():void{
      this.novoUsuario.reloadNovoUsuario()
    }

  signUp(data:CadNovosUsuarios): void{
    if (this.nome == '' || this.email == '' || this.senha == '') {
      this.toastr.error('Favor preencher todos os campos do formulário', 'Atenção!');
      return;
    }

      this.novoUsuario.userSignUp(data).subscribe({
        next: (v) => {
          this.toastr.success('Usuário criado com sucesso!', 'Bem-vindo!');
          localStorage.setItem('usuario', JSON.stringify(v))
          this.router.navigate(['dashboard']);
        },
        error: (e: HttpErrorResponse) => {
          if (e.error.msg) {
            this.toastr.error(`${e.error.msg} `, 'Atenção!');
          }
        }
    })

  }

  login(data:any): void {

    if (this.email == '' || this.senha == '') {
      this.toastr.error('Favor preencher todos os campos do formulário', 'Atenção!');
      return;
    }

    this.novoUsuario.usuarioLogin(data).subscribe({
      next: (token) => {
        this.toastr.success('Login feito com sucesso!', 'Bem-vindo!');
        localStorage.setItem('token', JSON.stringify(token))
        localStorage.setItem('usuario', JSON.stringify(data))
        this.router.navigate(['dashboard']);
      },
      error: (e: HttpErrorResponse) => {
        if (e.error.msg) {
          this.toastr.error(`${e.error.msg} `, 'Atenção!');
        }
      }
    })

  }

}
