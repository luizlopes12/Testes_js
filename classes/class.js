export class animal{
    constructor(tipo, pernas)
    {
        this.tipo = tipo;
        this.pernas = pernas;
    }

    barulho(som = 'Som qualquer'){
        return som;
    }

}