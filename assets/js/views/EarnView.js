export class EarnView{
    constructor(elemento){
        this._elemento = elemento
    }

    layout(item){
        return console.log(item.map(item => `${item.name}`))
        // item.map(item => { return`<div>
        // <ul>
        // <li>${item.name}</li>
        // <li>${item.value}
        // </ul>
        // </div>`})
    }

    update(){
        this._elemento.innerHTML = this.layout
    }
}