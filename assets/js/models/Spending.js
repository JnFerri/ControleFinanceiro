export default class Spending{
    constructor(name, value){
        this._name = name
        this._value = value
    }
    get name(){
        return this._name
    }
    get value(){
        return this._value
    }
}

