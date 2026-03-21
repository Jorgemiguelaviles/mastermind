import { EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.html',
  styleUrl: './logar.css',
  standalone: false,
})
export class LogarComponent {
@Output() Recuperar = new EventEmitter<void>();
@Output() Cadastro = new EventEmitter<void>();
form: FormGroup;
  saindo = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      usuario: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  logar(): void {

    console.log('valor do formulario',this.form.value);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const dados = this.form.value;
    console.log('Login:', dados);
  }

  abrirCadastro() {
  this.Cadastro.emit();}

}
