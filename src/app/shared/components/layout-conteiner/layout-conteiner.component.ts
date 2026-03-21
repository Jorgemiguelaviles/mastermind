import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout-conteiner',
   standalone: false,
  templateUrl: './layout-conteiner.html',
  styleUrl: './layout-conteiner.css',
})
export class LayoutConteinerComponent {
@Input() isSwitchingTab = false;
  @Input() isBooting = false;
}
