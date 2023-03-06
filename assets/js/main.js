import {FinanceController} from "./controllers/FinanceController.js"


let financeController = new FinanceController()

let formEarning = document.getElementById("formEarning")

formEarning.addEventListener("submit", (evento) => { financeController.createEarning(evento)})

let formSpending = document.getElementById("formSpending")

formSpending.addEventListener("submit", (evento) => {financeController.createSpend(evento) })

document.onload = financeController.showFinanceLocalStorage()

console.log(financeController._earningList._earningList)

let buttonRemoveEarn = document.querySelectorAll("#buttonRemoveEarn")

let buttonRemoveEarnArray = []

buttonRemoveEarn.forEach(item =>  buttonRemoveEarnArray.push(item)) 

buttonRemoveEarnArray.map(item => item.addEventListener('click', () => financeController.itemRemoveEarn(buttonRemoveEarnArray.indexOf(item))))






