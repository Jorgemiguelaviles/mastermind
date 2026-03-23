import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pinos-selecionados',
  standalone: false,
  templateUrl: './pinos-selecionados.html',
  styleUrl: './pinos-selecionados.css',
})
export class PinosSelecionadosComponent {
@Input() quantidade: number = 4;

@Input() disabled: boolean = false;
@Input() selecoesExternas: string[] = [];


@Output() enviado = new EventEmitter<void>();

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

    ngOnChanges(changes: SimpleChanges) {

    if (changes['quantidade']) {
      this.initSlots();
    }

    if (changes['disabled']) {
      // só força detecção, lógica já está protegida
    }

    if (changes['selecoesExternas']) {
      this.selecoes = [...(this.selecoesExternas || [])];
    }
  }

    private initSlots() {
    this.slots = Array(this.quantidade).fill(0);
    this.selecoes = Array(this.quantidade).fill(null);
  }

  



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
    if (this.disabled) return;
    this.selecoes[index] = cor;
  }

  enviar() {
    if (this.disabled) return;
    this.enviado.emit();

    this.onEnviar.emit(this.selecoes as string[]);
  }
  
}
