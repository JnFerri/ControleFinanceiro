import { View } from "./View.js"

export class EarnView extends View{
    constructor(elemento) {
        super(elemento)

    }

    layout(item) {
return ` <div>
     <ul>${item._earningList.map(props => `
     <li>${props.name}</li>
     <li>${props.value}</li>
    </ul>
    `)}
     </div>
     <div>Total de ganhos = ${item.calculateTotalEarnings()}
     `
    }

}