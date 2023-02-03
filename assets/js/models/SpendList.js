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
    calculateTotalSpendings(){
        return this._spendList.reduce((total,item) => Number(total) + Number(item.value) , 0 )
    }
}