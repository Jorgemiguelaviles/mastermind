import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../enviroments/dev';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

verifica_dados_usuario(id_user: string | null): Observable<any> {
  let params: any = {};

  if (id_user) {
    params.id = id_user;
  }

  return this.http.get(`${this.baseUrl}/dados_basicos_usuario`, {
    params
  });
}


}