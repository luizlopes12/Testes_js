//simplificado com apenas uma operação
/*
let somar = (...nums) => {
    let calc = nums.reduce((x, y) => x+y)
    return calc;
}*/
//simplificado porem com parametros e variaveis
let somar = (...nums) =>{
    let calc = nums.reduce((x, y) => {
        //retorna o resultado anterior vezes o proximo numero
        let total = x*y;
        return total;
    });
    return calc; 
}
//input
console.log(somar(1,2,3,4,5,6,7));

