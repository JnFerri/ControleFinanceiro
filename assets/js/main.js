import {FinanceController} from "./controllers/FinanceController.js"


let financeController = new FinanceController()

let formEarning = document.getElementById("formEarning")

formEarning.addEventListener("submit", (evento) => { financeController.createEarning(evento)})

let formSpending = document.getElementById("formSpending")

formSpending.addEventListener("submit", (evento) => {financeController.createSpend(evento) })

document.onload = financeController.showFinanceLocalStorage()

console.log(financeController._earningList._earningList)

let buttonRemoveEarn = new Array(document.querySelectorAll("#buttonRemoveEarn"))

buttonRemoveEarn.forEach(item => item.addEventListener('click', () => console.log(item)))





