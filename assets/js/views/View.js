export class View {
    constructor(elemento) {
        this._elemento = elemento
    }

    layout() {
        throw Error('o teplate deve ser definido pela view')
    }
    
    update(item) {
        this._elemento.innerHTML += this.layout(item)
    }

}