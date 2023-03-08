import {FinanceController} from "./controllers/FinanceController.js"


let financeController = new FinanceController()

let formEarning = document.getElementById("formEarning")

formEarning.addEventListener("submit", (evento) => { financeController.createEarning(evento)})

let formSpending = document.getElementById("formSpending")

formSpending.addEventListener("submit", (evento) => {financeController.createSpend(evento) })

document.onload = financeController.showFinanceLocalStorage()

console.log(financeController._earningList._earningList)

let buttonRemoveEarn = document.querySelectorAll("#buttonRemoveEarn")

let buttonRemoveSpend = document.querySelectorAll("#buttonRemoveSpend")

let buttonRemoveEarnArray = []

let buttonRemoveSpendArray = []

buttonRemoveEarn.forEach(item =>  buttonRemoveEarnArray.push(item)) 

function removeItemEarn(item){
    financeController.itemRemoveEarn(buttonRemoveEarnArray.indexOf(item))
    
}
buttonRemoveEarnArray.map(item => item.addEventListener('click', function (){ removeItemEarn(item)} ))

buttonRemoveSpend.forEach(item =>  buttonRemoveSpendArray.push(item)) 

function removeItemSpend(item){
    financeController.itemRemoveSpend(buttonRemoveSpendArray.indexOf(item))
   
}
buttonRemoveSpendArray.map(item => item.addEventListener('click', function (){ removeItemSpend(item)} ))


let clearAllButton = document.getElementById('limparTudo')

clearAllButton.addEventListener('click', function(){financeController.clearAll()})




