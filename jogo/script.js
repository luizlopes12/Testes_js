function tempo(){
setInterval(addBola, 1000)
}
function addBola(){
    var bola = document.createElement("div");
    bola.setAttribute("class","bola");
    //math floor transforma um numero decimal em inteiro arredondando pra baixo
    var p1 =  Math.floor(Math.random() * 1300);
    var p2 =  Math.floor(Math.random() * 600);
    bola.setAttribute("style", `left: ${p1}px; top: ${p2}px;`);
    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);

}
function estourar(objeto){
    document.body.removeChild(objeto);
}