import Earning from "../models/Earning.js"
import Spending from "../models/Spending.js"
import { EarningList } from "../models/EarningList.js"
import { SpendList } from "../models/SpendList.js"
import { EarnView } from "../views/EarnView.js"
import { SpendView } from "../views/SpendView.js"

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
        this._spendView = new SpendView($('#spends'))

    }

    createEarning(evento){
        evento.preventDefault()
        this._earningList.addEarningList(new Earning(this._inputNameEarn.value , this._inputValueEarn.value))
        this.clearInput()
        this._earnView.update(this._earningList)
        
    }

    createSpend(evento){
        evento.preventDefault()
        this._spendList.addSpendList(new Spending(this._inputNameSpend.value, this._inputValueSpend.value))
        this.clearInput()
        this._spendView.update(this._spendList)
    }

 
    clearInput(){
        this._inputNameEarn.value = ''
        this._inputNameSpend.value = ''
        this._inputValueEarn.value = ''
        this._inputValueSpend.value = ''
        this._inputNameSpend.focus()
    }
}
