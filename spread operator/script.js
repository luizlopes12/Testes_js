function dados(info){
    let user_datas = {
        //spread operator
        ...info,
        //dados inseridos
        sobrenome: 'Lopes'
    }
    return user_datas;
}
console.log(dados({nome:'Luiz'}));