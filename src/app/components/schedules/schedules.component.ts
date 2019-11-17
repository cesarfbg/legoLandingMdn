import { Component } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent {

  stations1 = [
    // ['LEGO® Avengers', 'Estacion_Avengers.jpg', '¡Tenemos que detener a Thanos! Ayúdanos a conseguir las 6 gemas del infinito construyendo a tus personajes favoritos de Avengers. ¡Date prisa!', false, true],
    ['Construcción Monocromática', 'Estacion_ConstruccionMonocromatica.jpg', 'Ven y realiza fantásticas construcciones en violeta y complementa las de otros participantes si quieres. ¡Te sorprenderás con el resultado!', false, true],
    ['Crea tu País', 'Estacion_CreaPais.jpg', '¿Cómo crearías a Colombia si tuvieras la posibilidad de construirla con ladrillos LEGO®? Construye lo que piensas que representa a tu país y ubícalo en la región que desees dentro del mapa.', false, true],
    ['Galería de Arte', 'Estacion_GaleriaArte.jpg', 'Saca a relucir tu artista interior, utilizando una amplia gama de ladrillos de colores LEGO®, con los que podrás realizar las obras más creativas para luego exhibirlas dentro de nuestra galería.  Podrás contar con la ayuda de nuestro crítico de arte si lo deseas.', false, true],
    ['LEGO® Harry Potter™', 'Estacion_HarryPotter.jpg', 'Bienvenidos a Hogwarts. Disfrázate de tus personajes favoritos de Harry Potter™ y arma tu propia varita mágica. No olvides llevarte un lindo recuerdo con Harry y el Sombrero Seleccionador.', false, true],
    ['LEGO® DUPLO®', 'Estacion_LagoDuplo.jpg', 'En este gran lago de Duplo™, lo más pequeños podrán dejar volar su imaginación con los ladrillos de LEGO® diseñados especialmente para ellos.', false, true],
    ['LEGO® City', 'Estacion_LegoCity.jpg', 'Crea las más divertidas aventuras en esta ciudad, ayudándonos a resolver diferentes misiones.', false, true],
    ['LEGO® Friends', 'Estacion_LegoFriends.jpg', 'Da un gran concierto para tus amigos como un artista, con los accesorios que encontrarás en el camerino. Además, podrás construir con Andrea, Mia, Emma, Olivia y Stephanie nuevas aventuras dentro de Harley City.', false, true],
    ['Tienda LEGO®', 'Estacion_TiendaLego.jpg', 'Aquí encontrarás las mejores Minifiguras, ladrillos y ediciones especiales que LEGO® tiene para ti.', false, true]
  ];

  stations2 = [
    ['LEGO® Mike', 'Estacion_LegoMike.jpg', 'Diviértete y pon mucha atención a las indicaciones que te dará Mike dentro de esta estación. Construye la torre más alta, el puente más resistente, la mejor pizza o hamburguesa.', false, true],
    ['Mar LEGO®', 'Estacion_MarLego.jpg', 'Nada en medio de infinitos ladrillos de colores LEGO® y construye todo lo que puedas imaginar.', false, true],
    ['Modelos LEGO®', 'Estacion_ModeloLEGO.jpg', '¡Bienvenido a la alfombra roja! Tómate foto con las celebridades más importantes de Lego®.', false, true],
    ['NINJAGO®', 'Estacion_Ninjago.jpg', 'Piensa, muévete y construye como un NINJA de LEGO® NINJAGO™. Después deberás completar 2 retos contra reloj que desafiarán tus habilidades NINJA.', false, true],
    ['Rampas de Carreras', 'Estacion_Rampas.jpg', 'Construye el vehículo más veloz en la zona de PITS y pon a prueba su desempeño y resistencia en las increíbles rampas. Si quedas entre los tres primeros subirás a celebrar en el podio. En sus marcas, ¿listos? ¡Fuera!', false, true],
    // ['LEGO® Star Wars', 'Estacion_StarWars.jpg', 'Ayúdanos junto a tu equipo a construir una increíble nave a toda velocidad. ¡Deprisa! No cuentas con mucho tiempo, el comité galáctico te lo agradecerá.', false, true],
    ['Zona de Desafíos', 'Estacion_ZonadeDesafios.jpg', 'El tiempo corre y tienes pocos minutos para construir la creación de LEGO® que te indicará nuestro explorador. ', false, true],
    ['Building Happening', 'Estacion_BuildingHappening.jpg', 'Siguiendo las instrucciones del guía, vas a construir partes de este camión de bomberos, así entre todos vamos a hacer el camión más grande que haya existido.', false, true],
    ['Papás Perdidos', 'Estacion_PapasPerdidos.jpg', 'Este espacio está equipado para mantener a tus papás a salvo mientras los encuentras.', false, true]
  ];

  show( idx, arr ) {
    if ( arr === 1) {
      this.stations1[idx][3] = !this.stations1[idx][3];
      if (!this.stations1[idx][4]) {
        setTimeout(() => {
          this.stations1[idx][4] = !this.stations1[idx][4];
        }, 400);
      } else {
        this.stations1[idx][4] = !this.stations1[idx][4];
      }
    } else if (arr === 2) {
      this.stations2[idx][3] = !this.stations2[idx][3];
      if (!this.stations2[idx][4]) {
        setTimeout(() => {
          this.stations2[idx][4] = !this.stations2[idx][4];
        }, 400);
      } else {
        this.stations2[idx][4] = !this.stations2[idx][4];
      }
    }
  }

}
