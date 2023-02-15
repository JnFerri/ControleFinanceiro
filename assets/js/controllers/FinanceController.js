import Earning from "../models/Earning.js"
import Spending from "../models/Spending.js"
import { EarningList } from "../models/EarningList.js"
import { SpendList } from "../models/SpendList.js"
import { EarnView } from "../views/EarnView.js"
import { SpendView } from "../views/SpendView.js"
import { tranformNumberInMonetary } from "../helpers/tranformNumberInMonetary.js"

export class FinanceController{
    constructor(){
        let $ = document.querySelector.bind(document)
        this._inputNameEarn = $('#earnName')
        this._inputValueEarn = $('#earnValue')
        this._inputNameSpend = $('#spendName')
        this._inputValueSpend =$('#spendValue')
        this._earningList = new EarningList()
        this._spendList = new SpendList()
        this._earnView = new EarnView($('#earns'))
        this._spendView = new SpendView($('#spends'))

    }

    createEarning(evento){
        evento.preventDefault()
        this._earningList.addEarningList(new Earning(this._inputNameEarn.value , Number(this._inputValueEarn.value) ))
        this.clearInput()
        this._earnView.update(this._earningList)
        this.drawChartEarn()
        google.charts.setOnLoadCallback(this.drawChartEarn)
    }

    createSpend(evento){
        evento.preventDefault()
        this._spendList.addSpendList(new Spending(this._inputNameSpend.value, Number(this._inputValueSpend.value)))
        this.clearInput()
        this._spendView.update(this._spendList);
        this.drawChartSpend()
        google.charts.setOnLoadCallback(this.drawChartSpend)
        
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
        let arrayEarnValues = this._earningList._earningList.map(earn => new Array(earn.name, earn.value))
        tabela.addRows(arrayEarnValues);
        var grafico = new google.visualization.PieChart(document.getElementById('graficoPizzaEarns'));
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
        let arraySpendValues = this._spendList._spendList.map(spend => new Array(spend.name, spend.value))
        tabela.addRows(arraySpendValues);
        var grafico = new google.visualization.PieChart(document.getElementById('graficoPizzaSpends'));
        grafico.draw(tabela,{width: 400,
            height: 240,
            title: 'Gastos',
            colors: ['#8B0000', '#FA8072', '#FF7F50', '#FFA500', '#FFD700','#F08080','#F4A460','#B8860B'],
            is3D: true});
    
    }
    
}
