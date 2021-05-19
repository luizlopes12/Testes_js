
export function calc(x=0,operador = '', y=0){
    if(operador == '+'){
        return x+y;
    }
    else if(operador == '-'){
        return x-y;
    }
    else if(operador == '*'){
        return x*y;
    }
    else if(operador == '/'){
        return x/y;
    }
    else{
        console.log("Algo deu errado\n digite os numeros na sequencia numero,'operador',numero");
    }
}