import { View } from "./View.js";

export class SpendView extends View{
    constructor(elemento){
        super(elemento)
    }

    layout(item) {
        return `${item._spendList.map(props =>
            ` <div class='item'>
     <div type="none" class="item__list"> 
     <span class="list__name"> Gasto : ${props.name}</span>
     <span class="list__value"> Valor : R$${props.value}</span>
     </div>
      </div>
    `)}
     <div class="box__result"><p class='result__total-spend'>Total de gastos = ${item.calculateTotalSpendings()}</p></div>
     `
    }
}