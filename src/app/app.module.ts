import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { BuyTicketButtonComponent } from './components/buy-ticket-button/buy-ticket-button.component';
import { MapComponent } from './components/map/map.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    BuyTicketButtonComponent,
    MapComponent,
    TicketsComponent,
    SchedulesComponent,
    GalleryComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
