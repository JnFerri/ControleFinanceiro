export class EarningList{
    constructor(){
        this._earningList = []
    }

    get earningList(){
        return this._earningList
    }

    addEarningList(objeto){
        this._earningList.push(objeto)
    }
}