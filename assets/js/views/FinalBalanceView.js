import { View } from "./View.js"
import { tranformNumberInMonetary } from "../helpers/tranformNumberInMonetary.js"

export class FinalBalanceView extends View{
    constructor(elemento){
        super(elemento)
    }

    layout(item){
        return `<span class="finalBalance__text">Saldo Final : ${tranformNumberInMonetary.tranformToReais(item)}</span>`
    }
}