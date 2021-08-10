export let faltam = (idade) => {
    let maior = 18;
    if(idade < maior){
        alert(`Faltam ${maior-idade} anos para sua maioridade`)
    }
    else{
        alert("Você já é maior de idade")
    }
}
