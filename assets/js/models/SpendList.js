export class SpendList{
    constructor(){
        this._spendList = []
    }

    get spendList(){
        return this._spendList
    }

    addSpendList(objeto){
        this._spendList.push(objeto)
        this._spendList.sort(function (a,b) {
            if(a._value < b._value) {
                return -1
            }else if (a._value > b._value) {
                return 1
            }else {
                return 0
            }
        })
    }
    calculateTotalSpendings(){
        return this._spendList.reduce((total,item) => Number(total) + Number(item.value) , 0 )
    }
}