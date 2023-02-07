import { View } from "./View.js"

export class EarnView extends View{
    constructor(elemento) {
        super(elemento)

    }

    layout(item) {
        return `${item._earningList.map(props =>
         ` <div class='item'>
        <div type="none" class="item__list"> 
     <p class="list__name"> Ganho : ${props.name}</p>
     <p class="list__value"> Valor : R$${props.value}</p>
    </div>
    </div>
    `)}
     <div class="box__result"><p class='result__total-spend'>Total de ganhos = ${item.calculateTotalEarnings()}</p></div>
     `
    }

}