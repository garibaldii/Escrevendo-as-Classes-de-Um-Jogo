import { Heroi } from "../Model/Heroi";

export class ControladorHeroi{

    public chamarAtaque(heroi: Heroi):string {
        return heroi.getPersonagem().atacar();
    }
}