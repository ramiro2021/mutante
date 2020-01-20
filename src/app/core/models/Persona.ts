import { Adn } from './Adn';

export interface Persona {
    id?: string;
    nombre?: string;
    apellido?: string;
    edad?: number;
    adn?: Adn;
}
