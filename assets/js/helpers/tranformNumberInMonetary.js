export class tranformNumberInMonetary{
    constructor(){

    }

    static tranformToReais(value){
        return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});}
    }
