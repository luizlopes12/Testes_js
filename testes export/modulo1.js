export class opa{
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
        return this.idade
    }
    mostrar(){
        if(this.idade>17){
        alert(`Olá ${this.nome}, você é maior de idade`)
        }
        else{
            alert(`Olá ${this.nome}, você é menor de idade`) 
        }
    }
}
