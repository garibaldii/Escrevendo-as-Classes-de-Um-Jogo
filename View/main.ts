import { Heroi } from "../Model/Heroi";
import { ControladorHeroi } from "../Controller/ControladorHeroi";
import { Guerreiro } from "../Model/Personagens/Guerreiro";
import { Mago } from "../Model/Personagens/Mago";
import {Monge} from "../Model/Personagens/Monge"
import {Ninja} from "../Model/Personagens/Ninja"


let guerreiro = new Guerreiro("Paladino", "Lança Pontuda")
let mago = new Mago("Gandalf", "Black Spell of Destruction")
let monge = new Monge("Monge peregrino", "Pergaminho da Sabedoria")
let ninja = new Ninja("Scorpion", "Cobrinha 🐍")

let matheus = new Heroi("Matheus", 22, guerreiro)
let garibaldi = new Heroi("Garibaldi", 22, mago)
let estagiario = new Heroi("Estagiário", 22, monge)
let gft = new Heroi("Na GFT", 22, ninja)

let controlador = new ControladorHeroi()


console.log(controlador.chamarAtaque(matheus))
console.log(controlador.chamarAtaque(garibaldi))
console.log(controlador.chamarAtaque(estagiario))
console.log(controlador.chamarAtaque(gft))

