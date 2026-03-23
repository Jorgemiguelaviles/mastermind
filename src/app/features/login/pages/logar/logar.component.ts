import { EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/api-services/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.html',
  styleUrl: './logar.css',
  standalone: false,
})
export class LogarComponent {
@Output() Recuperar = new EventEmitter<void>();
@Output() Cadastro = new EventEmitter<void>();
errorMessage: string | null = null;
successMessage: string | null = null;


form: FormGroup;
  saindo = false;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.form = this.fb.group({
  usuario: ['', [Validators.required]],
  senha: ['', [Validators.required]]
});
  }

logar(): void {

  this.errorMessage = null;
  this.successMessage = null;

  const dados = this.form.value;

  

  this.authService.login({
    username: dados.usuario,
    senha: dados.senha
  }).subscribe({
    next: (res: any) => {

      this.authService.setUserId(res?.response?.id_usuario)

      const token = res?.response?.token || res?.token;

      if (token) {
        this.authService.setToken(token);
      }

      this.successMessage =
        res?.message || 'Login realizado com sucesso';

      setTimeout(() => {
        this.router.navigate(['/main']);
      }, 1000);
    },

    error: (err: any) => {
      console.error(err);

      this.errorMessage =
        err?.error?.detail ||
        'Erro inesperado ao logar';
    }
  });
}

  abrirCadastro() {
  this.Cadastro.emit();}

}
