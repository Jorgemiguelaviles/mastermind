import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pinos-selecionados',
  standalone: false,
  templateUrl: './pinos-selecionados.html',
  styleUrl: './pinos-selecionados.css',
})
export class PinosSelecionadosComponent {
@Input() quantidade: number = 4;

  @Input() cores: string[] = [
    '#ff0000',
    '#00ff00',
    '#0000ff',
    '#ffff00',
    '#ff00ff',
    '#00ffff'
  ];

  @Output() onEnviar = new EventEmitter<string[]>();

  slots: number[] = [];
  selecoes: (string | null)[] = [];

  ngOnInit() {
    this.slots = Array(this.quantidade).fill(0);
    this.selecoes = Array(this.quantidade).fill(null);
  }

  isCompleto(): boolean {
  return this.slots?.length > 0 &&
         this.selecoes?.length === this.slots.length &&
         this.slots.every((_, i) => this.selecoes[i]);
}

  selecionarCor(index: number, cor: string) {
    this.selecoes[index] = cor;
  }

  enviar() {
    if (this.selecoes.includes(null)) {
      alert('Preencha todos os pinos!');
      return;
    }

    this.onEnviar.emit(this.selecoes as string[]);
  }
  
}
