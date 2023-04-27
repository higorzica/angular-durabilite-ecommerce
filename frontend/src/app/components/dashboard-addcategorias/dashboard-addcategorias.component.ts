import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { AddCategoria } from 'src/app/interfaces/AddCategorias';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-dashboard-addcategorias',
  templateUrl: './dashboard-addcategorias.component.html',
  styleUrls: ['./dashboard-addcategorias.component.scss']
})
export class DashboardAddcategoriasComponent implements OnInit, OnDestroy {
  addCategoriaMensagem: string|undefined;
  formCategoria!: FormGroup;
  destroy$: Subject<boolean> = new Subject<boolean>()

  constructor(private categoriaService: CategoriasService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formCategoria = this.fb.group({
      nome:  ['' , Validators.required],
    });
  }

  isValidForm(): boolean {
    return this.formCategoria.valid;
  }

  submitCategoria(){
    console.log(this.formCategoria.value.nome)

    const categoria: AddCategoria = {
      nome: this.formCategoria.value.nome
    }

    this.categoriaService.addCategoria(categoria).subscribe({
          next: (val: void) => {
            this.toastr.success('Categoria cadastrada com sucesso!', 'Obrigado!');
            this.router.navigate(['dashboard-listcategorias'])
            console.log(val)
          },
          error: (err: any) => {
            console.log(console.error(err))
          },
        })

    // if (this.isValidForm()) {
    //   this.categoriaService.addCategoria(this.formCategoria.value)
    //     .subscribe({
    //       next: (val: AddCategoria) => {
    //         this.toastr.success('Categoria cadastrada com sucesso!', 'Obrigado!');
    //         console.log(val)
    //       },
    //       error: (err: any) => {
    //         console.log(console.error(err))
    //       },
    // })
    // }
  }

  refreshPage() {
    setTimeout(() => {
      location.reload();
    }, 3000)
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
