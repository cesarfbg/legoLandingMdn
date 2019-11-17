import { Component } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {

  ticketText1 = '¿Aún no decides qué día ir?';
  ticketText2 = 'Asegura tu visita el día que quieras con el pase Free Day';

  items = [
    ['Niño (Lun a Jue)', '$ 12.000'],
    ['Adulto (Lun a Jue)', '$ 14.000'],
    ['Niño (V-S-D-Fest)', '$ 22.000'],
    ['Adulto (V-S-D-Fest)', '$ 25.000'],
    ['Free Day Niño', '$ 25.000'],
    ['Free Day Adulto', '$ 28.000'],
    ['Niños menos de 3 años', '¡Gratis!']
  ];

}
