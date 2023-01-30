export class EarningsList{
    constructor(){
        this._earningsList = []
    }

    get earningsList(){
        return this._earningsList
    }

    addEarningsList(objeto){
        this._earningsList.push(objeto)
    }
}