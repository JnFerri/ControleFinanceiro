import { View } from "./View.js"
import { tranformNumberInMonetary } from "../helpers/tranformNumberInMonetary.js"

export class EarnView extends View{
    constructor(elemento) {
        super(elemento)

    }

    layout(item) {
        return `${item.map(props =>
         ` <div class='item'>
        <div type="none" class="item__list"> 
     <span class="list__name"> Ganho : ${props._name}</span>
     <span class="list__value"> Valor : R$ ${tranformNumberInMonetary.tranformToReais(Number(props._value))}</span>
    </div>
    </div>
    `).join('')}
     <div class="box__result"><p class='result__total-spend'>Total de ganhos = ${tranformNumberInMonetary.tranformToReais(item.reduce((total,item) => Number(total) + Number(item._value) , 0 ))}</p></div>
     `
    }

}