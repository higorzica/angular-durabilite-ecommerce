import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddProdutos } from "src/app/interfaces/AddProdutos";
import { ProdutosService } from 'src/app/services/produtos.service';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { CategoriasService } from 'src/app/services/categorias.service';
import { AddCategoria } from 'src/app/interfaces/AddCategorias';

@Component({
  selector: 'app-dashboard-addprodutos',
  templateUrl: './dashboard-addprodutos.component.html',
  styleUrls: ['./dashboard-addprodutos.component.scss']
})
export class DashboardAddprodutosComponent implements OnInit, OnDestroy {
  addProdutoMensagem: string|undefined;
  form!: FormGroup;
  preview!: any;
  isDefault= true;
  isDefaultImagem = '../../../assets/imagens/default.png';
  destroy$: Subject<boolean> = new Subject<boolean>()
  categoriasListas!: AddCategoria[];

  status: Array<any> = [
    {nome: 'Ativo', valor: 'ativo'},
    {nome: 'Inativo', valor: 'inativo'}
];

  constructor(private produtosService: ProdutosService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private categoriaService: CategoriasService) {
    }

  ngOnInit(): void {
    this.initForm();
    this.getCategoriaOptions();
  }

  initForm() {
    this.form = this.fb.group({
      nome:  ['' , Validators.required],
      preco:  ['' , Validators.required],
      categoria:  ['' , Validators.required],
      cor: [null , Validators.required],
      descricao: [null , Validators.required],
      imagem: [null , Validators.required],
      status: this.fb.array([], [Validators.required])
    });
  }

    onChange(event: any) {
  
      if (event.target.files && event.target.files.length > 0) {
        this.isDefault = false;
        const arquivoSelecionado = event.srcElement.files[0];
  
        const reader = new FileReader();
        reader.onload = (e) => (this.preview = reader.result)
  
        reader.readAsDataURL(arquivoSelecionado)
  
        this.form.patchValue({
          imagem: arquivoSelecionado
        })

        console.log(arquivoSelecionado);
      }
    }

    onCheckboxChange(e: any){
      const status: FormArray = this.form.get('status') as FormArray;
      if (e.target.checked) {
        status.push(new FormControl(e.target.value));
        console.log(status)
      } 
    }
    
    getValueControl(form: FormGroup, control: string) {
      return form.controls[control].value;
    }

    getCategoriaOptions() {
      this.categoriaService.getCategorias().subscribe((res) => {
        this.categoriasListas = res;
      })
    }

    createPayload(
      nome= this.getValueControl(this.form, 'nome'),
      preco= this.getValueControl(this.form, 'preco'),
      categoria= this.getValueControl(this.form, 'categoria'),
      cor= this.getValueControl(this.form, 'cor'),
      descricao= this.getValueControl(this.form, 'descricao'),
      imagem= this.getValueControl(this.form, 'imagem'),
      status= this.getValueControl(this.form, 'status')) 
      {
        const payload = {
          nome,
          preco,
          categoria,
          cor,
          descricao,
          imagem,
          status
        }

        return payload;
    }

    isValidForm(): boolean {
      return this.form.valid;
    }

    submitProduto(){
      console.log(this.isValidForm())
      if (this.isValidForm()) {
        this.produtosService.addProdutos(this.createPayload())
        .pipe(
          takeUntil(this.destroy$)
        ).subscribe((res: AddProdutos) => {
          this.toastr.success('Produto cadastrado com sucesso!', 'Obrigado!');
          console.log(res)
          this.refreshPage();
        })
      }

    }

    refreshPage() {
      setTimeout(() => {
        location.reload();
      }, 3000)
    }

    ngOnDestroy() {
      this.destroy$.next(true);
      this.destroy$.unsubscribe();
    }

}
