import {FinanceController} from "./controllers/FinanceController.js"

let financeController = new FinanceController()

let formEarning = document.getElementById("formEarning")

formEarning.addEventListener("submit", (evento) => { financeController.createEarning(evento)})

let formSpending = document.getElementById("formSpending")

formSpending.addEventListener("submit", (evento) => {financeController.createSpend(evento)})