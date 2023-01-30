import Earning from "../models/Earnings.js"
import Spending from "../models/Spending.js"
import { EarningsList } from "../models/EarningsList.js"

export class FinanceController{
    constructor(){
        let $ = document.querySelector.bind(document)
        this._inputNameEarn = $('#earnName')
        this._inputValueEarn = $('#earnValue')
        this._earningsList = new EarningsList()
    }

    createEarnings(evento){
        evento.preventDefault()
        this._earningsList.addEarningsList(new Earning(this._inputNameEarn.value , this._inputValueEarn.value))
        console.log(this._earningsList.earningsList)
    }

    get(){
        return this._inputNameEarn
    }
}
