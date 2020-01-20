import { Component, OnInit } from '@angular/core';
import { MutanteApiService } from '../../services/mutanteApi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../../models/Persona';

@Component({
  selector: 'app-agregar-mutante',
  templateUrl: './agregar-mutante.component.html',
  styleUrls: ['./agregar-mutante.component.css']
})
export class AgregarMutanteComponent implements OnInit {
  nuevoMutante: Persona;
  formulario: FormGroup;
  constructor(public mService: MutanteApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formulario = this.fb.group({
      nombre : ['', Validators.required],
      apellido : ['' , Validators.required],
      edad: [0, Validators.required],
      adn: this.fb.group({
        // tslint:disable-next-line: max-line-length
        adn1: ['', Validators.compose([Validators.required, Validators.maxLength(6), Validators.minLength(6)])],
        // tslint:disable-next-line: max-line-length
        adn2: ['', Validators.compose([Validators.required, Validators.maxLength(6), Validators.minLength(6)])],
        // tslint:disable-next-line: max-line-length
        adn3: ['', Validators.compose([Validators.required, Validators.maxLength(6), Validators.minLength(6)])],
        // tslint:disable-next-line: max-line-length
        adn4: ['', Validators.compose([Validators.required, Validators.maxLength(6), Validators.minLength(6)])],
        // tslint:disable-next-line: max-line-length
        adn5: ['', Validators.compose([Validators.required, Validators.maxLength(6), Validators.minLength(6)])],
        // tslint:disable-next-line: max-line-length
        adn6: ['', Validators.compose([Validators.required, Validators.maxLength(6), Validators.minLength(6)])],
      })
    });
  }

  agregar(formulario) {

    this.mService.agregarMutante(this.formulario.value);
    console.log(formulario.value);
  }
}
