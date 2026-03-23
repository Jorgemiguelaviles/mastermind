import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../enviroments/dev';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormGameService {

  private baseUrl = environment.apiUrl;
  private form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.initForm();
  }

  // 🔹 INICIALIZA FORM
  initForm(dificuldade?: string): void {
    this.form = this.fb.group({
      dificuldade: [dificuldade || null, Validators.required]
    });
  }

  // 🔹 SET DIFICULDADE
  setDificuldade(dificuldade: string): void {
    this.form.patchValue({ dificuldade });
  }

  // 🔹 GET FORM COMPLETO
  getForm(): FormGroup {
    return this.form;
  }

  // 🔹 GET VALORES
  getFormValue() {
    return this.form.value;
  }

  // 🔹 GET CAMPO ESPECÍFICO
  getField(field: string) {
    return this.form.get(field)?.value;
  }

  // 🔹 POST FORM
  postForm(formData: FormData) {
    return this.http.post(`${this.baseUrl}/novo_jogo`, formData);
  }
}