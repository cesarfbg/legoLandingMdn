import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  // Textos banner izquierda
  leftBannerText1 = 'UNICENTRO - BOGOTÁ';
  leftBannerText2 = '24 DE OCTUBRE AL 11 DE NOVIEMBRE';

  // Textos banner derecha
  rightBannerText1 = 'VIVA ENVIGADO - MEDELLÍN';
  rightBannerText2 = '28 DE NOVIEMBRE AL 15 DE DICIEMBRE';

}
