export class FinalBalance{
    constructor(){
        this._finalBalance = 0
    }

    get finalBalance(){
        return this._finalBalance
    }

    calculateFinalBalance(earnings,spendings){
        return this._finalBalance = earnings - spendings
    }
}