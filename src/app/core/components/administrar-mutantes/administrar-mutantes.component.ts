import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { MutanteApiService } from '../../services/mutanteApi.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Persona } from '../../models/Persona';

@Component({
  selector: 'app-administrar-mutantes',
  templateUrl: './administrar-mutantes.component.html',
  styleUrls: ['./administrar-mutantes.component.css']
})
export class AdministrarMutantesComponent implements OnInit {
  personaLista: Persona[];

  mostrarEditar: boolean = false;

  MutanteEditado: Persona;

  constructor( private mservice: MutanteApiService) { }

  ngOnInit() {
    this.traerMutantes();

  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(): void {
    window.location.reload();
  }

  traerMutantes() {

    this.mservice.listarMutantes().subscribe(res => {
      this.personaLista = res;
});

  }

  editar(event, persona: Persona) {
    this.mservice.actualizarMutante(persona);

  }

  eliminar(persona) {
    this.mservice.eliminarMutante(persona);
  }
}
