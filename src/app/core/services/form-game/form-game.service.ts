import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../enviroments/dev';
import { NovoJogoResponse } from '../../interfaces/DTO/novo-jogoDTO';
import { resultadoJogo } from '../../interfaces/DTO/resultado-jogoDTO';

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


  initForm(dificuldade?: string, lista_cores?: string[], n_gaps?: string, id_partida?: string, resultado_partida?: boolean,tempo_partida?: string, pontuacao?: string): void {
    this.form = this.fb.group({
      dificuldade: [dificuldade || null],
      lista_cores: [lista_cores || null],
      n_gaps: [n_gaps || null],
      cores_selecionadas: this.fb.array([]),
      pinos_cinzas_brancos: this.fb.array([]),
      id_partida: [id_partida || null],
      resultado_partida: [resultado_partida || null],
      tempo_partida: [tempo_partida || null],
      pontuacao: [pontuacao || null]
    });
  }

  // ==========================================
  // 🔹 SETTERS DO FORMULÁRIO
  // ==========================================

  setTempoPartida(tempo: number): void {
    // Armazenamos o tempo (geralmente em segundos) no formulário
    this.form.patchValue({ tempo_partida: tempo.toString() });
  }

  setPontuacao(pontuacao: number): void {
    this.form.patchValue({ pontuacao: pontuacao.toString() });
  }

  setResultadoPartida(venceu: boolean): void {
    this.form.patchValue({ resultado_partida: venceu });
  }

  setDificuldade(dificuldade: string): void {
    this.form.patchValue({ dificuldade });
  }

  setListaCores(lista_cores: string[]): void {
    this.form.patchValue({ lista_cores });
  }

  setNGaps(n_gaps: string): void {
    this.form.patchValue({ n_gaps });
  }

  setIdPartida(id_partida: string): void {
    this.form.patchValue({ id_partida });
  }

  setResultadoRodada(feedback: { cinzas: number, brancos: number }): void {
    const novoFeedback = this.fb.control(feedback);
    this.pinosFeedbackArray.push(novoFeedback);
  }

  

  

// ==========================================
  // 🔹 GERENCIAMENTO DE ESTADO (SESSION)
  // ==========================================

  get isSessionAtiva(): boolean {
    return sessionStorage.getItem('jogo_ativo') === 'true';
  }


  ativarSession(): void {
    sessionStorage.setItem('jogo_ativo', 'true');
  }


  finalizarSession(): void {
    sessionStorage.removeItem('jogo_ativo');
  }

  // ==========================================
  // 🔹 GETTERS DO FORMULÁRIO
  // ==========================================

  getForm(): FormGroup { return this.form; }

  getFormValue() { return this.form.value; }

  getDificuldade(): string { return this.form.get('dificuldade')?.value; }

  getListaCores(): string[] { return this.form.get('lista_cores')?.value; }

  getNGaps(): string { return this.form.get('n_gaps')?.value; }

  getIdPartida(): string { return this.form.get('id_partida')?.value; }

  get coresSelecionadasArray(): FormArray {
    return this.form.get('cores_selecionadas') as FormArray;
  }

  get pinosFeedbackArray(): FormArray {
    return this.form.get('pinos_cinzas_brancos') as FormArray;
  }

  getHistoricoFeedback(): any[] {
    return this.pinosFeedbackArray.value;
  }

  getHistoricoTentativas(): string[][] {
    return this.coresSelecionadasArray.value;
  }

  getTempoPartida(): string {
    return this.form.get('tempo_partida')?.value;
  }

  getPontuacao(): string {
    return this.form.get('pontuacao')?.value;
  }

  getResultadoPartida(): boolean {
    return this.form.get('resultado_partida')?.value;
  }

  // ==========================================
  // 🔹 LÓGICA DE TENTATIVAS E VALIDAÇÃO
  // ==========================================

  /**
   * Adiciona a tentativa ao histórico local e dispara a validação no backend.
   */
  adicionarTentativa(formData: FormData, tentativa:string): Observable<any> {
    const novoControl = this.fb.control(tentativa);
    this.coresSelecionadasArray.push(novoControl);

    return this.validarTentativa(formData);
  }

  limparHistorico(): void {
    while (this.coresSelecionadasArray.length !== 0) {
      this.coresSelecionadasArray.removeAt(0);
    }
  }

  // ==========================================
  // 🚀 CHAMADAS DE API (POSTS)
  // ==========================================

  createNovoJogo(formData: FormData): Observable<NovoJogoResponse> {
    return this.http.post<NovoJogoResponse>(`${this.baseUrl}/novo_jogo`, formData);
  }

  validarTentativa(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/validar_tentativa`, formData);
  }

 finalizarPartida(): Observable<any> {
    const formData = new FormData();
    const values = this.getFormValue();

    formData.append('id_partida', values.id_partida);
    formData.append('dificuldade', values.dificuldade);
    formData.append('tempo_partida', values.tempo_partida);
    formData.append('venceu', values.resultado_partida ? 'true' : 'false');
    
    // Histórico de Chutes
    formData.append('historico_tentativas', JSON.stringify(values.cores_selecionadas));
    
    // NOVO: Histórico de Pistas (Cinzas e Brancos de cada rodada)
    formData.append('historico_feedback', JSON.stringify(values.pinos_cinzas_brancos));

    const res = this.http.post(`${this.baseUrl}/resultado_partida`, formData);
    console.log('res', res)

    return res
  }




  // ==========================================
  // 🚀 Limpa todo o sistema
  // ==========================================

  limparEstadoESession(): void {
    // 1. Limpa os FormArrays (Tentativas e Feedbacks)
    while (this.coresSelecionadasArray.length !== 0) {
      this.coresSelecionadasArray.removeAt(0);
    }
    while (this.pinosFeedbackArray.length !== 0) {
      this.pinosFeedbackArray.removeAt(0);
    }

    // 2. Reseta o formulário para os valores nulos iniciais
    this.form.reset();

    
    console.log('Estado do jogo destruído com sucesso.');
  }
}