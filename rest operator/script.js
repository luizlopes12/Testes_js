//rest operator
function dados(...info){
    let user_datas = [
        //spread operator
        ...info
    ]
    return user_datas;
}
//dados inseridos
console.log(dados('Luiz', 17, 15));

