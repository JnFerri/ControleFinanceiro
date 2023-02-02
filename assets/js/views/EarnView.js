import { View } from "./View.js"

export class EarnView extends View{
    constructor(elemento) {
        super(elemento)
    }

    layout(item) {
        let html = ''

        item.map(props => {
    html = `<div>
     <ul>
     <li>${props.name}</li>
     <li>${props.value}
     </ul>
     </div>`}
        )

        return html
    }

}