import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FormGameService } from '../../../../core/services/form-game/form-game.service';
import { AuthService } from '../../../../core/services/api-services/auth-service/auth.service';
import { ResultadoFeedback } from '../../../../core/interfaces/models/ResultadoFeedback';

@Component({
  selector: 'app-pinos-selecionados',
  standalone: false,
  templateUrl: './pinos-selecionados.html',
  styleUrl: './pinos-selecionados.css',
})
export class PinosSelecionadosComponent implements OnInit, OnChanges {
  // --- Propriedades de Estado ---
  quantidade: number = 4;
  cores: string[] = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
  slots: number[] = [];
  
  // --- Formulários ---
  form!: FormGroup; // Provindo do Service
  formGroupPrincipal!: FormGroup; // Gerencia os pinos localmente

  // --- Inputs e Outputs ---
  @Input() disabled: boolean = false;
  @Input() selecoesExternas: string[] = [];
  
  @Output() venceu_partida = new EventEmitter<boolean>();

  @Output() enviado = new EventEmitter<void>();
  @Output() onEnviar = new EventEmitter<string[]>();

  resultado: ResultadoFeedback = { cinzas: 0, brancos: 0 };

  

  constructor(
    private formGameService: FormGameService,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.initFormGroup();
  }

  // --- Getters ---
  get pinosArray() {
    return this.formGroupPrincipal.get('pinos') as FormArray;
  }

  // --- Lifecycle Hooks ---
  ngOnInit() {
    this.form = this.formGameService.getFormValue();
    this.quantidade = parseInt(this.formGameService.getNGaps());
    this.cores = this.formGameService.getListaCores();

    // Inicializa os slots após carregar os dados do serviço
    this.buildSlots();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['quantidade']) {
      this.buildSlots();
    }

    if (changes['selecoesExternas'] && this.pinosArray.length > 0) {
      this.selecoesExternas.forEach((cor, i) => {
        if (this.pinosArray.at(i)) {
          this.pinosArray.at(i).setValue(cor);
        }
      });
    }
  }

  // --- Métodos Privados ---
  private initFormGroup() {
    this.formGroupPrincipal = this.fb.group({
      pinos: this.fb.array([])
    });
  }

  private buildSlots() {
    // Limpa o array atual de forma eficiente
    while (this.pinosArray.length !== 0) {
      this.pinosArray.removeAt(0);
    }

    // Cria novos controles com base na quantidade
    for (let i = 0; i < this.quantidade; i++) {
      const valorInicial = this.selecoesExternas[i] || null;
      this.pinosArray.push(this.fb.control(valorInicial, Validators.required));
    }
  }

  // --- Métodos Públicos / Ações ---
  isCompleto(): boolean {
    return this.formGroupPrincipal.valid;
  }

  selecionarCor(index: number, cor: string) {
    if (this.disabled) return;
    this.pinosArray.at(index).setValue(cor);
  }

  enviar() {
    if (this.disabled || this.formGroupPrincipal.invalid) return;

    const tentativa = this.formGroupPrincipal.value.pinos;
    const id_usuario = this.authService.getUserId();
    const formData = new FormData();

    formData.append('tentativa', tentativa);
    formData.append('id_partida', this.formGameService.getIdPartida());

    this.formGameService.adicionarTentativa(formData, tentativa).subscribe({
      next: (res) => {
        console.log('Sucesso:', res);
        this.resultado = { cinzas: res.response.pinos_cinzas, brancos: res.response.pinos_branco };
        this.formGameService.setResultadoRodada(this.resultado)

        if(res.response.venceu_partida){
          this.venceu_partida.emit(res.response.venceu_partida)
        }
        this.enviado.emit();
        this.onEnviar.emit(tentativa);
      },
      error: (err) => {
        console.error('Erro:', err);
      }
    });

    
  }
}