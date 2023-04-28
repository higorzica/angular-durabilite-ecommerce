import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CadNovosUsuarios } from 'src/app/interfaces/cadnovosusuarios';
import { NovousuarioService } from 'src/app/services/novousuario.service';

@Component({
  selector: 'app-dashboard-addusuarios',
  templateUrl: './dashboard-addusuarios.component.html',
  styleUrls: ['./dashboard-addusuarios.component.scss']
})
export class DashboardAddusuariosComponent implements OnInit {
  nome: string = '';
  email: string = '';
  senha: string = '';
  addUsuarioMensagem!: string;
  form!: FormGroup;

  constructor(private usuarioService: NovousuarioService,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      nome:  ['' , Validators.required],
      email:  ['' , Validators.required],
      senha:  ['' , Validators.required],
    });
  }

  submitUsuario() {
    console.log(this.form.value.nome)

    const usuario: CadNovosUsuarios = {
      nome: this.form.value.nome,
      email: this.form.value.email,
      senha: this.form.value.senha
    }

    this.usuarioService.createUsuario(usuario).subscribe({
          next: (val: void) => {
            this.toastr.success('Usuário cadastrado com sucesso!', 'Obrigado!');
            this.router.navigate(['dashboard-listusuarios'])
            console.log(val)
          },
          error: (err: any) => {
            console.log(console.error(err))
          },
        })
  }

}
