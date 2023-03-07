export class Draws{
    constructor(){

        this._drawEarns = []
        this._drawSpends = []

    }

    drawChartEarn(item,local){
        const tabela = new google.visualization.DataTable()
        tabela.addColumn('string','Nome');
        tabela.addColumn('number','valor');
        let arrayEarnValues = item.map(earn => this._drawEarns.push(new Array(earn._name, earn._value)))
        tabela.addRows(this._drawEarns);
        var grafico = new google.visualization.PieChart(local);
        grafico.draw(tabela,{width: 400,
            height: 240,
            title: 'Ganhos',
            colors: ['#3CB371', '#228B22', '#00FF00', '#8FBC8F', '#00FA9A'],
            is3D: true});
    }

    drawChartSpend(item, local){
        const tabela = new google.visualization.DataTable()
        tabela.addColumn('string','Nome');
        tabela.addColumn('number','valor');
        let arraySpendValues = item.map(spend => this._drawSpends.push(new Array(spend._name, spend._value)))
        tabela.addRows(this._drawSpends);
        var grafico = new google.visualization.PieChart(local);
        grafico.draw(tabela,{width: 400,
            height: 240,
            borderRadius:10,
            title: 'Gastos',
            colors: ['#8B0000', '#FA8072', '#FF7F50', '#FFA500', '#FFD700','#F08080','#F4A460','#B8860B'],
            is3D: true});
    
    }

    clearDrawEarns(){
        this._drawEarns = []
    }

    clearDrawSpends(){
        this._drawSpends = []
    }
}