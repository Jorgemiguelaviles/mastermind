import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recuperar-acesso',
  templateUrl: './recuperar-acesso.html',
  styleUrl: './recuperar-acesso.css',
  standalone: false,
})
export class RecuperarAcessoComponent {
@Output() voltar = new EventEmitter<void>();
@Input() email: boolean = false;


voltarLogin() {
  this.voltar.emit();
}

enviarEmail() {

  this.email = true}

}
