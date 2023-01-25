import Earning from "../models/Earnings.js"
import Spending from "../models/Spending.js"

class FinanceController{
    constructor(){
        let $ = document.querySelector.bind(document)
        this._inputNameEarn = $('#nameEarn')
        this._inputValueEarn = $('#valueEarn')
    }

    teste(event){
        event.preventDefault()
        console.log(this._inputNameEarn, this._inputValueEarn)
    }
}

