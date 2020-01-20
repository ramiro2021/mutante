import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarMutanteComponent } from './core/components/agregar-mutante/agregar-mutante.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { AdministrarMutantesComponent } from './core/components/administrar-mutantes/administrar-mutantes.component';
import { HomeMutanteComponent } from './core/components/home-mutante/home-mutante.component';
import { MutanteApiService } from './core/services/mutanteApi.service';
import { environment } from 'src/environments/environment';

import { ErrorComponent } from './core/components/error/error.component';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from '@angular/fire';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    AgregarMutanteComponent,
    HeaderComponent,
    FooterComponent,
    AdministrarMutantesComponent,
    HomeMutanteComponent,
    ErrorComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [MutanteApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
