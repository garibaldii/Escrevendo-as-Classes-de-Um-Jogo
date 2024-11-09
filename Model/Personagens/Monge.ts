import { Personagem } from "./Personagem"

export class Monge extends Personagem{

    constructor(nome: string, ferramentaOfensiva: string) { 
        super(nome, ferramentaOfensiva)
    }

    atacar(): string {
       return `${this.getNome()} atacou usando ${this.getFerramentaOfensiva} de maneira sagrada 🔅🌟` 
    }
    
    
}