function animal() {
    this.nome = "tartaruga";
    this.cor = "verde";
    this.peso = 5;

    this.comer = function(kg){
        console.log("comeu");
        this.peso += (kg/2);
    }
}
var animal1 = new animal();
var animal2 = new animal();
animal2.cor = "Branco";
animal2.nome = "lobo";