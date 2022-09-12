class Negociacao{
    constructor(ganho, nome, gasto){
        this._ganho = ganho
        this.nome = nome
        this.gasto = gasto
    }

    get ganho(){
        return this._ganho
    }
    get nome(){
        return this._nome
    }
    get gasto(){
        return this._gasto
    }
}

