export class EarningList{
    constructor(){
        this._earningList = JSON.parse(localStorage.getItem('earnList')) || []
    }

    get earningList(){
        return this._earningList
    }

    addEarningList(objeto){
        this._earningList.push(objeto)
        this._earningList.sort(function (a,b) {
            if(a._value < b._value) {
                return -1
            }else if (a._value > b._value) {
                return 1
            }else {
                return 0
            }
        })
    }

    calculateTotalEarnings(){
        return this._earningList.reduce((total,item) => Number(total) + Number(item._value) , 0 )
    }
}