import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddCategoria } from '../interfaces/AddCategorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient,
    private router: Router) { 
    this.myAppUrl = environment.BASE_URL;
    this.myApiUrl = '/api/categorias'
  }

  
  addCategoria(categoria: AddCategoria): Observable<void> {

    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}/addCategoria`, categoria);

  }

  getCategorias():Observable<any[]> {
    return this.http.get<any[]>(`${this.myAppUrl}${this.myApiUrl}/listCategorias`);
  }

  getCategoria(id: number):Observable<any[]> {
    return this.http.get<any[]>(`${this.myAppUrl}${this.myApiUrl}/listCategorias/${id}`);
  }

  deleteCategoria(id: number | null | undefined) {
    return this.http.delete(`${this.myAppUrl}${this.myApiUrl}/listCategorias/${id}`);
  }

  editarCategoria(categoria: any) {
    return this.http.put<any>(`${this.myAppUrl}${this.myApiUrl}/listCategorias/${categoria.id}`, categoria);
  }


}
