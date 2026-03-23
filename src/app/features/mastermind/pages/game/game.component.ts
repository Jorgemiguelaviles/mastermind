import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: false,
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class GameComponent {
    isBooting = true;
  isSwitchingTab = false;
  currentRound = 0;
totalRounds = 10;

advanceRound() {
  if (this.currentRound < this.totalRounds - 1) {
    this.currentRound++;
  }
}

}
