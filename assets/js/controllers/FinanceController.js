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
        google.charts.setOnLoadCallback(drawChart);
        
    }

    createSpend(evento){
        evento.preventDefault()
        this._spendList.addSpendList(new Spending(this._inputNameSpend.value, Number(this._inputValueSpend.value)))
        this.clearInput()
        this._spendView.update(this._spendList)
        google.charts.setOnLoadCallback(drawChart);
        
    }

 
    clearInput(){
        this._inputNameEarn.value = ''
        this._inputNameSpend.value = ''
        this._inputValueEarn.value = ''
        this._inputValueSpend.value = ''
        this._inputNameSpend.focus()
    }

    drawChart(){
        const tabela = new google.visualization.DataTable()
        tabela.addColumn('string','Nome');
        tabela.addColumn('number','valor');
        const teste = this._spendList._spendList.map(spend => new Array(spend.name, spend.value))
        tabela.addRows([teste]);
        var grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
        grafico.draw(tabela);
    
    }
    
}
