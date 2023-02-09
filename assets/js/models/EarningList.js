export class EarningList{
    constructor(){
        this._earningList = []
        this.totalEarnings = 0
    }

    get earningList(){
        return this._earningList
    }

    addEarningList(objeto){
        this._earningList.push(objeto)
        console.log(this._earningList)
    }

    calculateTotalEarnings(){
        return this._earningList.reduce((total,item) => Number(total) + Number(item.value) , 0 )
    }
}