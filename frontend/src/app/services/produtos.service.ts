import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddProdutos } from "../interfaces/AddProdutos";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ListProdutos } from '../interfaces/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.BASE_URL;
    this.myApiUrl = '/api/produtos'
  }

  addProdutos(produto: AddProdutos): Observable<AddProdutos> {

    const formData = new FormData();
    formData.append('nome', produto.nome);
    formData.append('preco', produto.preco);
    formData.append('categoria', produto.categoria);
    formData.append('cor', produto.cor);
    formData.append('descricao', produto.descricao);
    formData.append('imagem', produto.imagem);
    formData.append('status', produto.status);

    return this.http.post<AddProdutos>(`${this.myAppUrl}${this.myApiUrl}/addProduto`, formData);

  }

  getProdutos():Observable<AddProdutos[]> {
    return this.http.get<AddProdutos[]>(`${this.myAppUrl}${this.myApiUrl}/listProdutos`);
  }

  getProduto(id: number):Observable<ListProdutos> {
    return this.http.get<ListProdutos>(`${this.myAppUrl}${this.myApiUrl}/listProdutos/${id}`);
  }

  deleteProdutos(id: number | null | undefined) {
    return this.http.delete(`${this.myAppUrl}${this.myApiUrl}/listProdutos/${id}`);
  }

  filtrarProduto(id: string) {
    return this.http.get<ListProdutos>(`${this.myAppUrl}${this.myApiUrl}/listProdutos/${id}`);
  }

  editarProduto(id: number, data: AddProdutos) {
    return this.http.put<AddProdutos>(`${this.myAppUrl}${this.myApiUrl}/listProdutos/${id}`, data);
  }
  
  popularProdutos() {
    return this.http.get<AddProdutos[]>(`${this.myAppUrl}${this.myApiUrl}/listProdutos`);
  }
  
  cardProdutos() {
    return this.http.get<AddProdutos[]>(`${this.myAppUrl}${this.myApiUrl}?_limit=8`);
  }

  pesquisarProdutos(query:string) {
    return this.http.get<AddProdutos[]>(`${this.myAppUrl}${this.myApiUrl}?q=${query}`);
  }

}
