import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { strongPasswordValidator } from '../../../../shared/validators/senha.service';
import { AuthService } from '../../../../core/services/api-services/auth-service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
  standalone: false,
})
export class CadastroComponent {

  @Output() voltar = new EventEmitter<void>();

  form: FormGroup;
  loadingGoogle = false;
  saindo = false;
  preview: string | ArrayBuffer | null = null;

  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, strongPasswordValidator()]],
      avatar: [null]
    });
  }

  voltarLogin() {
    this.voltar.emit();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      this.form.patchValue({ avatar: file });

      const reader = new FileReader();
      reader.onload = () => {
        this.preview = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }

  criarConta() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.errorMessage = null;
    this.successMessage = null;

    const formData = new FormData();

    formData.append('username', this.form.value.username);
    formData.append('email', this.form.value.email);
    formData.append('senha', this.form.value.senha);

    if (this.form.value.avatar) {
      formData.append('avatar', this.form.value.avatar);
    }

    this.authService.register(formData).subscribe({
      next: (res: any) => {
        console.log('res', res.response)

        this.successMessage = res.response?.message || 'Cadastro realizado com sucesso';
        this.authService.setUserId(res?.response?.id_usuario)

        if (res.response.token) {
          this.authService.setToken(res.response.token);
        }

        // espera 5 segundos e navega
        setTimeout(() => {
          this.router.navigate(['/main']);
        }, 5000);
      },

      error: (err: any) => {
        console.error(err);

        this.errorMessage =
          err?.error?.detail ||
          'Erro inesperado ao criar conta';
      }
    });
  }
}