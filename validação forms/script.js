function validar(){
    num = document.querySelector("#numero").value;
    texto = document.querySelector("#confirmar");
    if(num.length < 1 || num.length > 1){
        texto.innerHTML = 'Você digitou um numero inválido';
        return false;
    }
    else{
        return true;
    }
}