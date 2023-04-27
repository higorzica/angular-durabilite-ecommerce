import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs';
import { AddCategoria } from 'src/app/interfaces/AddCategorias';
import { AddProdutos } from "src/app/interfaces/AddProdutos";
import { ListProdutos } from 'src/app/interfaces/produtos';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-dashboard-editarproduto',
  templateUrl: './dashboard-editarproduto.component.html',
  styleUrls: ['./dashboard-editarproduto.component.scss']
})
export class DashboardEditarprodutoComponent implements OnInit {
  produtoData: undefined | AddProdutos
  produtoMensagem: undefined|string;
  id!: number;
  categoriasListas!: AddCategoria[];
  form!: FormGroup;
  category!: string;

  constructor(private activeRoute: ActivatedRoute,
    private produtosService: ProdutosService,
    private categoriaService: CategoriasService,
    private fb: FormBuilder ) {
      this.id = Number(activeRoute.snapshot.paramMap.get('id'));
      console.log(this.id);
    }

  ngOnInit(): void {
    this.initForm();
    this.getProduto(this.id);
    this.getCategoriaOptions();
    this.fillData();
  }

  initForm() {
    this.form = this.fb.group({
      nome: new FormControl ('' , Validators.required),
      preco:new FormControl ('' , Validators.required),
      categoria:new FormControl ('' , Validators.required),
      cor:new FormControl (null , Validators.required),
      descricao:new FormControl (null , Validators.required),
      imagem:new FormControl (null , Validators.required),
      status: [null],
    });
  }

  getProduto(id: number){
    this.produtosService.getProduto(id).subscribe((data:ListProdutos) => {
      this.produtoData = data;
      console.log(this.produtoData)
    })
  }

  getCategoriaOptions() {
    this.categoriaService.getCategorias().subscribe((res) => {
      this.categoriasListas = res;
    })
  }

  fillData(){
    if (this.categoriasListas) {
      this.form.patchValue({
        nome:  this.produtoData?.nome,
        preco:  this.produtoData?.preco,
        categoria:  this.produtoData?.categoria,
        cor: this.produtoData?.cor,
        descricao: this.produtoData?.descricao,
        imagem: this.produtoData?.imagem,
        status: this.produtoData?.status,
      })
    }
  }

  getValueControl(form: FormGroup, control: string) {
    return form.controls[control].value;
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
    const categoriaInput = this.getValueControl(this.form, 'categoria')
    if (!categoriaInput) {
      this.form.patchValue({
        categoria: this.produtoData?.categoria
      })
    }
    this.category = categoriaInput


    }


  
}
