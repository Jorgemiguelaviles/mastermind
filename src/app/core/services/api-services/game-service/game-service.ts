import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importe o HttpClient real
import { Observable } from 'rxjs';
import { NovoJogoResponse } from '../../../interfaces/DTO/novo-jogoDTO';
import { environment } from '../../../../../enviroments/dev';
import { FormGameService } from '../../form-game/form-game.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  
  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient, // Injetando o HttpClient
    private formService: FormGameService // 👈 Injetando seu service de formulário
  ) {}

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
    
    // 💡 Agora usamos o formService injetado para pegar os valores atuais!
    const values = this.formService.getFormValue();

    formData.append('id_partida', values.id_partida);
    formData.append('dificuldade', values.dificuldade);
    formData.append('tempo_partida', values.tempo_partida);
    formData.append('venceu', values.resultado_partida ? 'true' : 'false');
    
    // Histórico de Chutes
    formData.append('historico_tentativas', JSON.stringify(values.cores_selecionadas));
    
    // Histórico de Pistas
    formData.append('historico_feedback', JSON.stringify(values.pinos_cinzas_brancos));

    return this.http.post(`${this.baseUrl}/resultado_partida`, formData);
  }
}