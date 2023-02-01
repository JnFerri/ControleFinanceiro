import Earning from "../models/Earning.js"
import Spending from "../models/Spending.js"
import { EarningList } from "../models/EarningList.js"
import { SpendList } from "../models/SpendList.js"
import { EarnView } from "../views/EarnView.js"

export class FinanceController{
    constructor(){
        let $ = document.querySelector.bind(document)
        this._inputNameEarn = $('#earnName')
        this._inputValueEarn = $('#earnValue')
        this._inputNameSpend = $('#spendName')
        this._inputValueSpend = $('#spendValue')
        this._earningList = new EarningList()
        this._spendList = new SpendList()
        this._earnView = new EarnView($('#earns'))

    }

    createEarning(evento){
        evento.preventDefault()
        this._earningList.addEarningList(new Earning(this._inputNameEarn.value , this._inputValueEarn.value))
        console.log(this._earningList.earningList)
        this.clearInput()
        this._earnView.layout(this._earningList.earningList)
        this._earnView.update()
    }

    createSpend(evento){
        evento.preventDefault()
        this._spendList.addSpendList(new Spending(this._inputNameSpend.value, this._inputValueSpend.value))
        console.log(this._spendList.spendList)
        this.clearInput()
    }

 
    clearInput(){
        this._inputNameEarn.value = ''
        this._inputNameSpend.value = ''
        this._inputValueEarn.value = ''
        this._inputValueSpend.value = ''
        this._inputNameSpend.focus()
    }
}
