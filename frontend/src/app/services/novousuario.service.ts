import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CadNovosUsuarios } from '../interfaces/cadnovosusuarios';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router'
import { LoginUsuario } from '../interfaces/loginusuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NovousuarioService {
  private myAppUrl: string;
  private myApiUrl: string;
  isUsuarioLogado = new BehaviorSubject<boolean>(false)
  isLoginError = new EventEmitter<boolean>(false)

  constructor(private http: HttpClient,
    private router: Router) { 
      this.myAppUrl = environment.BASE_URL;
      this.myApiUrl = '/api/usuarios'
     }

  getUsuarios():Observable<CadNovosUsuarios[]> {
      return this.http.get<CadNovosUsuarios[]>(`${this.myAppUrl}${this.myApiUrl}/listUsuarios`);
  }

  userSignUp(data:CadNovosUsuarios): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}/novoUsuario`,data);
  }

  reloadNovoUsuario(){
    if (localStorage.getItem('usuario')) {
      this.isUsuarioLogado.next(true);
      this.router.navigate(['dashboard']);
    }
  }

  usuarioLogin(data:LoginUsuario): Observable<string> {
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/login`, data)
  }

}
