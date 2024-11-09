import { Personagem } from "./Personagem"

export class Mago extends Personagem{

    constructor(nome: string, ferramentaOfensiva: string) { 
        super(nome, ferramentaOfensiva)
    }

    atacar(): string {
       return `${this.getNome()} atacou usando o feitiço ${this.getFerramentaOfensiva} 🧙🎇` 
    }
    
    
}