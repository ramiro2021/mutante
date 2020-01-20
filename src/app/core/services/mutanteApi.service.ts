import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';
import {AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { MutantService } from './mutant.service';

@Injectable({
  providedIn: 'root'
})
export class MutanteApiService {
personaDoc: AngularFirestoreDocument <Persona> ;

personaCollection: AngularFirestoreCollection<Persona>;

personas: Observable<Persona[]>;

  constructor( private afs: AngularFirestore, private mutant: MutantService) {

    this.personaCollection = afs.collection<Persona>('persona');
    this.personas = this.personaCollection.snapshotChanges().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Persona;
      const id = a.payload.doc.id;
      return {id, ...data};
    }
      )));
  }

  listarMutantes() {
    return this.personas;
  }

  agregarMutante(nuevoMutante: Persona) {

    let adn: Array<string> = [nuevoMutante.adn.adn1, nuevoMutante.adn.adn2, nuevoMutante.adn.adn3,
      nuevoMutante.adn.adn4, nuevoMutante.adn.adn5, nuevoMutante.adn.adn6];

      // tslint:disable-next-line: align
      if (this.mutant.isMutant(adn)) {

        this.personaCollection.add(nuevoMutante);
      }else {
        console.log('adn incorrecto');
      }
    
  }

  eliminarMutante(persona: Persona){
    this.personaDoc = this.afs.doc(`persona/${persona.id}`);
    this.personaDoc.delete();
  }

  actualizarMutante(persona: Persona){
    this.personaDoc = this.afs.doc(`persona/${persona.id}`);
    this.personaDoc.update(persona);
  }
}
