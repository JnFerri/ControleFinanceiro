import Earning from "../models/Earning.js"
import Spending from "../models/Spending.js"
import { EarningList } from "../models/EarningList.js"
import { SpendList } from "../models/SpendList.js"
import { EarnView } from "../views/EarnView.js"
import { SpendView } from "../views/SpendView.js"
import { FinalBalanceView } from "../views/FinalBalanceView.js"
import { FinalBalance } from "../models/FinalBalance.js"
import { Draws } from "../commons/Draws.js"

export class FinanceController{
    constructor(){
        let $ = document.querySelector.bind(document)
        this._inputNameEarn = $('#earnName')
        this._inputValueEarn = $('#earnValue')
        this._inputNameSpend = $('#spendName')
        this._inputValueSpend =$('#spendValue')
        this._itemEarns = $('#earns')
        this._itemSpends = $('#spends')
        this._graficoEarns = $('#graficoPizzaEarns')
        this._graficoSpends = $('#graficoPizzaSpends')
        this._finalBalancePost = $('#finalBalance')
        this._earningList = new EarningList()
        this._spendList = new SpendList()
        this._earnView = new EarnView(this._itemEarns)
        this._spendView = new SpendView(this._itemSpends)
        this._finalBalance = new FinalBalance()
        this._finalBalanceView = new FinalBalanceView(this._finalBalancePost)
        this._draws = new Draws()
        this._clearAllButton = $('#limparTudo')

    }

    showFinanceLocalStorage(){
        this._earnView.update(this._earningList)
        this._spendView.update(this._spendList)
        if(this._earningList._earningList.length > 0 || this._spendList._spendList.length > 0){

        this.showItens()
    
        }
        this._draws.clearDrawEarns()
        this._draws.drawChartEarn(this._earningList._earningList, this._graficoEarns)
        google.charts.setOnLoadCallback(this._draws._drawEarns)
        this._draws.clearDrawSpends()
        this._draws.drawChartSpend(this._spendList._spendList, this._graficoSpends)
        google.charts.setOnLoadCallback(this._draws._drawSpends)
        this._finalBalanceView.update(this._finalBalance.calculateFinalBalance(this._earningList.calculateTotalEarnings() , this._spendList.calculateTotalSpendings()))
        this.clearInput()
        
    }

    createEarning(evento){
        evento.preventDefault()
        this._earningList.addEarningList(new Earning(this._inputNameEarn.value , parseFloat(this._inputValueEarn.value.replace(',', '.')) ))
        localStorage.setItem('earnList', JSON.stringify(this._earningList._earningList))
        location.reload()
        this.showFinanceLocalStorage()
        
    }

    createSpend(evento){
        evento.preventDefault()
        this._spendList.addSpendList(new Spending(this._inputNameSpend.value, parseFloat(this._inputValueSpend.value.replace(',', '.'))))
        localStorage.setItem('spendList', JSON.stringify(this._spendList._spendList))
        location.reload()
        this.showFinanceLocalStorage()
        
    }

 
    clearInput(){
        this._inputNameEarn.value = ''
        this._inputNameSpend.value = ''
        this._inputValueEarn.value = ''
        this._inputValueSpend.value = ''
        this._inputNameSpend.focus()
    }
    
    showItens(){
        this._itemEarns.style.visibility = 'visible'
            this._graficoEarns.style.visibility = 'visible'
            this._finalBalancePost.style.visibility = 'visible'
            this._itemSpends.style.visibility = 'visible'
            this._graficoSpends.style.visibility = 'visible'
            this._finalBalancePost.style.visibility = 'visible'
            this._clearAllButton.style.visibility = 'visible'
    }
    
    itemRemoveEarn(index){
        this._earningList._earningList.splice(index,1)
        localStorage.setItem('earnList', JSON.stringify(this._earningList._earningList))
        this._earnView.update(this._earningList)
        this.showFinanceLocalStorage()
        location.reload()
    }

    itemRemoveSpend(index){
        this._spendList._spendList.splice(index,1)
        localStorage.setItem('spendList', JSON.stringify(this._spendList._spendList))
        this._spendView.update(this._spendList)
        this.showFinanceLocalStorage()
        location.reload()
    }

    clearAll(){
        localStorage.clear()
        location.reload()
        

    }
    
    
}
