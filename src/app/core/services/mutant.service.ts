import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MutantService {

  constructor() { }

    // inicializacin del adn
    adn = new Array<string>();
    // variable para almacenar cantidad de mutantes
    adnMutante: number = 0;
    // cantidad de caracteres repetidos de manera horizontal en el adn
    cantHorizontal: number = 0;
    // cantidad de caracteres repetidos de manera vertical en el adn
    cantvertical: number = 0;
    // cantidad de caracteres repetidos de manera diagonal en el adn
    cantDiagonal: number = 0;

    // variable creada para mostrar por interpolacion
    mutanteMuestra: string;

    ngOnInit() { }


    isMutant(adn): boolean {


        if (this.esMutanteHorizontal(adn)) {
            this.mutanteMuestra = 'es mutante';
            return true;
        } else if (this.esMutanteVertical(adn)) {
            this.mutanteMuestra = 'es mutante';
            return true;
        } else if (this.esMutanteDiagonales(adn)) {
            this.mutanteMuestra = 'es mutante';
            return true;
        }
        else {

            this.mutanteMuestra = 'No es mutante';
            return false;
        }
    }

    esMutanteHorizontal(adn) {
        // Verificar si es mutante de manera horizontal
        for (var i = 0; i < adn.length; i++) {
            this.cantHorizontal = 0;
            for (var j = 0; j < adn.length; j++) {

                if (adn[i].charAt(j) == adn[i].charAt(j + 1)) {
                    this.cantHorizontal = this.cantHorizontal + 1;
                    if (this.cantHorizontal == 3) {

                        this.adnMutante++;

                        this.cantHorizontal = 0;
                        if (this.adnMutante == 3) {
                            return true;
                        }
                    }
                }
            }

        }
        return false;

    }

    esMutanteVertical(adn) {
        //  Recorrer la matriz de manera vertical
        for (var i = 0; i < adn.length; i++) {
            this.cantvertical = 0;
            for (var j = 0; j < adn.length - 1; j++) {

                if (adn[j].charAt(i) == adn[j + 1].charAt(i)) {
                    this.cantvertical = this.cantvertical + 1;
                    if (this.cantvertical == 3) {

                        this.adnMutante++;

                        this.cantvertical = 0;
                        if (this.adnMutante == 3) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }

    esMutanteDiagonales(adn) {
        // recorrer diagonales de la matriz
        // diagonales de izquierda a derecha 

        // parte superior
        for ( var i = 0; i < adn.length - 3; i++) {
            this.cantDiagonal = 0;
            for ( var j = 0; j < adn.length - i - 1; j++) {

                if (adn[j].charAt(i + j) == adn[j + 1].charAt(i + j + 1)) {
                    this.cantDiagonal = this.cantDiagonal + 1;
                    if (this.cantDiagonal == 3) {
                        this.adnMutante++;
                        this.cantDiagonal = 0;
                        if (this.adnMutante == 3) {

                            return true;
                        }
                    }
                } else {
                    this.cantDiagonal = 0;
                }
            }

        }
        // parte inferior
        for ( var i = 1; i < adn.length - 3; i++) {
            this.cantDiagonal = 0;

            for ( var j = 0; j < adn.length - i - 1; j++) {

                if (adn[i + j].charAt(j) == adn[i + j + 1].charAt(j + 1)) {
                    this.cantDiagonal++;
                    if (this.cantDiagonal == 3) {
                        this.adnMutante++;
                        this.cantDiagonal = 0;
                        if (this.adnMutante == 3) {
                            return true;
                        }
                    }
                } else {
                    this.cantDiagonal = 0;
                }
            }

        }
        // diagonales de derecha a izquierda 
        // parte superior
        for (var i = 3; i < adn.length; i++) {
            this.cantDiagonal = 0;
            for (var j = 0; j <= i - 1; j++) {


                if (adn[j].charAt(i - j) == adn[j + 1].charAt(i - j - 1)) {
                    this.cantDiagonal = this.cantDiagonal + 1;

                    if (this.cantDiagonal == 3) {
                        this.adnMutante++;
                        this.cantDiagonal = 0;
                        if (this.adnMutante == 3) {
                            return true;
                        }
                    }
                } else {
                    this.cantDiagonal = 0;
                }
            }

        }

        // parte inferior
        for (var i = 1; i < adn.length - 3; i++) {
            this.cantDiagonal = 0;
            for (var j = adn.length - 1, l = i; l < adn.length - 1; j-- , l++) {
                if (adn[l].charAt(j) == adn[l + 1].charAt(j - 1)) {
                    this.cantDiagonal = this.cantDiagonal + 1;
                    if (this.cantDiagonal == 3) {
                        this.adnMutante++;
                        this.cantDiagonal = 0;
                        if (this.adnMutante == 3) {
                            return true;
                        }
                    }
                } else {
                    this.cantDiagonal = 0;
                }
            }
        }
        return false;
    }

}
