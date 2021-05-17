//declarando o objeto e seus componentes
function animal() {
    //propriedades
    this.nome = "tartaruga";
    this.cor = "verde";
    this.peso = 5;
    //metodos
    this.comer = function(kg){
        //repetindo a função auxiliar
        for(i = 0; i < kg; i++){
            this.mastigar();
        }
        console.log("comeu");
        this.peso += (kg/2);
    }
    //declarando função auxiliar
    this.mastigar = function(){
        console.log("mastigando...")
    }
}
//inserindo o objeto dentro de uma variavel
var animal1 = new animal();
var animal2 = new animal();
//mudando as propriedades da variavel2 com base no mesmo objeto da variavel 1
animal2.cor = "Branco";
animal2.nome = "lobo";