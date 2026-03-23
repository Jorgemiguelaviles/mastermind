import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../enviroments/dev';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private baseUrl = environment.apiUrl;
private id_user: string | null = null;

  constructor(private http: HttpClient) {}

  register(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/cadastrar`, formData);
  }

  login(data: { username: string; senha: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    this.clearUserId();
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  setUserId(id: string): void {
  this.id_user = id;
  localStorage.setItem('user_id', id);
}

getUserId(): string | null {
  if (!this.id_user) {
    this.id_user = localStorage.getItem('user_id');
  }
  return this.id_user;
}

clearUserId(): void {
  this.id_user = null;
  localStorage.removeItem('user_id');
}
}