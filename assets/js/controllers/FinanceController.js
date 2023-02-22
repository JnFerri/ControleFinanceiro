import Earning from "../models/Earning.js"
import Spending from "../models/Spending.js"
import { EarningList } from "../models/EarningList.js"
import { SpendList } from "../models/SpendList.js"
import { EarnView } from "../views/EarnView.js"
import { SpendView } from "../views/SpendView.js"
import { tranformNumberInMonetary } from "../helpers/tranformNumberInMonetary.js"
import { FinalBalanceView } from "../views/FinalBalanceView.js"
import { FinalBalance } from "../models/FinalBalance.js"

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
        this._localStorageEarns = JSON.parse(localStorage.getItem('earnList'))

    }

    createEarning(evento){
        evento.preventDefault()
        this._earningList.addEarningList(new Earning(this._inputNameEarn.value , Number(this._inputValueEarn.value) ))
        this.clearInput()
        localStorage.setItem('earnList', JSON.stringify(this._earningList._earningList))
        this._earnView.update(this._earningList)
        this.drawChartEarn()
        google.charts.setOnLoadCallback(this.drawChartEarn)
        this._finalBalanceView.update(this._finalBalance.calculateFinalBalance(this._earningList.calculateTotalEarnings() , this._spendList.calculateTotalSpendings()))
        this._itemEarns.style.visibility = 'visible'
        this._graficoEarns.style.visibility = 'visible'
        this._finalBalancePost.style.visibility = 'visible'
    }

    createSpend(evento){
        evento.preventDefault()
        this._spendList.addSpendList(new Spending(this._inputNameSpend.value, Number(this._inputValueSpend.value)))
        this.clearInput()
        this._spendView.update(this._spendList);
        this.drawChartSpend()
        google.charts.setOnLoadCallback(this.drawChartSpend)
        this._finalBalanceView.update(this._finalBalance.calculateFinalBalance(this._earningList.calculateTotalEarnings() , this._spendList.calculateTotalSpendings()))
        this._itemSpends.style.visibility = 'visible'
        this._graficoSpends.style.visibility = 'visible'
        this._finalBalancePost.style.visibility = 'visible'
    }

 
    clearInput(){
        this._inputNameEarn.value = ''
        this._inputNameSpend.value = ''
        this._inputValueEarn.value = ''
        this._inputValueSpend.value = ''
        this._inputNameSpend.focus()
    }
    
    drawChartEarn(){
        const tabela = new google.visualization.DataTable()
        tabela.addColumn('string','Nome');
        tabela.addColumn('number','valor');
        let arrayEarnValues = this._earningList._earningList.map(earn => new Array(earn._name, earn._value))
        tabela.addRows(arrayEarnValues);
        var grafico = new google.visualization.PieChart(this._graficoEarns);
        grafico.draw(tabela,{width: 400,
            height: 240,
            title: 'Ganhos',
            colors: ['#3CB371', '#228B22', '#00FF00', '#8FBC8F', '#00FA9A'],
            is3D: true});
    }
    drawChartSpend(){
        const tabela = new google.visualization.DataTable()
        tabela.addColumn('string','Nome');
        tabela.addColumn('number','valor');
        let arraySpendValues = this._spendList._spendList.map(spend => new Array(spend._name, spend._value))
        tabela.addRows(arraySpendValues);
        var grafico = new google.visualization.PieChart(this._graficoSpends);
        grafico.draw(tabela,{width: 400,
            height: 240,
            borderRadius:10,
            title: 'Gastos',
            colors: ['#8B0000', '#FA8072', '#FF7F50', '#FFA500', '#FFD700','#F08080','#F4A460','#B8860B'],
            is3D: true});
    
    }
    
}
