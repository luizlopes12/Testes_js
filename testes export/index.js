import {opa} from './modulo1.js';
import {faltam} from "./modulo2.js";

let calc = new opa(prompt("Qual seu nome?"), parseInt(prompt("Qual sua idade?")))
calc.mostrar()
faltam(calc.idade)