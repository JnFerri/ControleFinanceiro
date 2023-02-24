import { tranformNumberInMonetary } from "../helpers/tranformNumberInMonetary.js";
import { View } from "./View.js";

export class SpendView extends View{
    constructor(elemento){
        super(elemento)
    }

    layout(item) {
        return `${item._spendList.map(props =>
            ` <div class='item'>
     <div type="none" class="item__list"> 
     <span class="list__name"> Gasto : ${props._name}</span>
     <span class="list__value"> Valor : R$ ${tranformNumberInMonetary.tranformToReais(Number(props._value))}</span>
     </div>
      </div>
    `).join("")}
     <div class="box__result"><p class='result__total-spend'>Total de gastos = ${tranformNumberInMonetary.tranformToReais(item.calculateTotalSpendings())}</p></div>
     `
    }
}