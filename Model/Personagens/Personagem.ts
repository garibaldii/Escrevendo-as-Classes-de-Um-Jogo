export abstract class Personagem{
    private nome: string;
    private ferramentaOfensiva: string;
    abstract atacar():string
    

    constructor(nome: string, ferramentaOfensiva: string){
        this.nome = nome;
        this.ferramentaOfensiva = ferramentaOfensiva;
    }


    public getNome():string{
        return this.nome;
    }

    public getFerramentaOfensiva():string{
        return this.ferramentaOfensiva;
    }
}