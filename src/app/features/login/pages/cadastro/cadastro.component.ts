import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
  standalone: false,
})
export class CadastroComponent {
  @Output() voltar = new EventEmitter<void>();

  constructor(private router: Router) {}
  loadingGoogle = false;
  saindo = false;

  voltarLogin() {
    this.voltar.emit();
  }

  preview: string | ArrayBuffer | null = null;

onFileSelected(event: any) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = () => {
      this.preview = reader.result;
    };

    reader.readAsDataURL(file);
  }
}

loginGoogle() {
  this.loadingGoogle = true;

  setTimeout(() => {

    const sucesso = true;

    if (sucesso) {
      this.loadingGoogle = false;

      // 1. ativa animação de saída
      this.saindo = true;

      // 2. espera animação terminar ANTES de navegar
      setTimeout(() => {
        this.router.navigate(['/main']);
      }, 900); // igual ou levemente maior que CSS (0.8s)

    } else {
      this.loadingGoogle = false;
    }

  }, 2000);
}
}
