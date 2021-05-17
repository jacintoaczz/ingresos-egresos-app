import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { IngresoEgresoComponent } from './features/ingreso-egreso/ingreso-egreso.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DetalleComponent } from './features/ingreso-egreso/detalle/detalle.component';
import { EstadisticaComponent } from './features/ingreso-egreso/estadistica/estadistica.component';

const components = [
  AppComponent,
  DashboardComponent,
  IngresoEgresoComponent,
  FooterComponent,
  NavbarComponent,
  SidebarComponent,
  DetalleComponent,
  EstadisticaComponent,
];

const modules = [
  AngularFireAuthModule,
  AngularFirestoreModule,
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
];
@NgModule({
  declarations: [...components],
  imports: [
    ...modules,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
