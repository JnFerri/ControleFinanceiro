import { View } from "./View.js"

export class FinalBalanceView extends View{
    constructor(elemento){
        super(elemento)
    }

    layout(item){
        return `<span id="finalBalance">${item}</span>`
    }
}