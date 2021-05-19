function end(dados){
    const endereco = {
        cidade: dados.cidade, 
        estado: dados.estado, 
        pais:'Brasil'
    };
    let {cidade, estado, pais} = endereco;
    console.log(`Endereço: ${cidade} - ${estado}, ${pais}`)
}
