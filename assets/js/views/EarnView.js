import { View } from "./View.js"
import { tranformNumberInMonetary } from "../helpers/tranformNumberInMonetary.js"

export class EarnView extends View{
    constructor(elemento) {
        super(elemento)

    }

    layout(item) {
        return `${item._earningList.map(props =>
         ` <div class='item'>
         <button id="buttonRemoveEarn" ">X</button>
        <div type="none" class="item__list"> 
     <span class="list__name"> Ganho : ${props._name}</span>
     <span class="list__value"> Valor :${tranformNumberInMonetary.tranformToReais(parseFloat(props._value))} </span>
    </div>
    </div>
    `).join('')}
     <div class="box__result"><p class='result__total-spend'>Total de ganhos = ${tranformNumberInMonetary.tranformToReais(item.calculateTotalEarnings())}</p></div>
     `
    }

}