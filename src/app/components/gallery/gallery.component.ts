import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  bgStyle = 'background-image: url("../../../assets/images/gallery/Foto");';
  showSlide = false;
  slides = [
    ['assets/images/gallery/Foto1_Preview.jpg', false, 'assets/images/gallery/Foto1.jpg'],
    ['assets/images/gallery/Foto2_Preview.jpg', false, 'assets/images/gallery/Foto2.jpg'],
    ['assets/images/gallery/Foto3_Preview.jpg', false, 'assets/images/gallery/Foto3.jpg'],
    ['assets/images/gallery/Foto4_Preview.jpg', false, 'assets/images/gallery/Foto4.jpg'],
    ['assets/images/gallery/Foto5_Preview.jpg', false, 'assets/images/gallery/Foto5.jpg'],
    ['assets/images/gallery/Foto6_Preview.jpg', false, 'assets/images/gallery/Foto6.jpg'],
    ['assets/images/gallery/Foto7_Preview.jpg', false, 'assets/images/gallery/Foto7.jpg'],
    ['assets/images/gallery/Foto8_Preview.jpg', false, 'assets/images/gallery/Foto8.jpg'],
    ['assets/images/gallery/Foto9_Preview.jpg', false, 'assets/images/gallery/Foto9.jpg'],
    ['assets/images/gallery/Foto10_Preview.jpg', false, 'assets/images/gallery/Foto10.jpg'],
    ['assets/images/gallery/Foto11_Preview.jpg', false, 'assets/images/gallery/Foto11.jpg'],
    ['assets/images/gallery/Foto12_Preview.jpg', false, 'assets/images/gallery/Foto12.png'],
    ['assets/images/gallery/Foto13_Preview.jpg', false, 'assets/images/gallery/Foto13.jpg'],
    ['assets/images/gallery/Foto14_Preview.jpg', false, 'assets/images/gallery/Foto14.jpg'],
    ['assets/images/gallery/Foto15_Preview.jpg', false, 'assets/images/gallery/Foto15.jpg'],
    ['assets/images/gallery/Foto16_Preview.jpg', false, 'assets/images/gallery/Foto16.jpg'],
    ['assets/images/gallery/Foto17_Preview.jpg', false, 'assets/images/gallery/Foto17.jpg'],
    ['assets/images/gallery/Foto18_Preview.jpg', false, 'assets/images/gallery/Foto18.jpg'],
  ];

  onClick(idx) {
    this.slides[idx][1] = true;
    this.showSlide = true;
  }

  carouselExit() {
    this.slides.forEach( slide => {
      slide[1] = false;
    });
    this.showSlide = false;
  }

}
