export class SpendList{
    constructor(){
        this._spendList = []
    }

    get spendList(){
        return this._spendList
    }

    addSpendList(objeto){
        this._spendList.push(objeto)
    }
}