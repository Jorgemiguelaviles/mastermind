import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: false,
})
export class LoginComponent {

  isCadastro = false;
  isRecuperar = false;
  emailEnviado = false;

  abrirCadastro() {
  this.isCadastro = true;
  this.isRecuperar = false;
}

abrirRecuperar() {
  this.isRecuperar = true;
  this.isCadastro = false;
  this.emailEnviado = false;
}

voltarLogin() {
  this.isCadastro = false;
  this.isRecuperar = false;
  this.emailEnviado = false;
}

enviarEmail() {
  this.emailEnviado = true;
}

}
