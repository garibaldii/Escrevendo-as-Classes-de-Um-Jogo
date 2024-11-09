import { Personagem } from "./Personagens/Personagem";



export class Heroi {
    private nome: string;
    private idade: number;
    private personagem: Personagem;

    constructor(nome: string, idade: number, personagem: Personagem) {
        this.nome = nome;
        this.idade = idade;
        this.personagem = personagem;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setIdade(idade: number): void {
        this.idade = idade;
    }

    public getPersonagem(): Personagem {
        return this.personagem;
    }

    public setPersonagem(personagem: Personagem): void {
        this.personagem = personagem
    }
}


