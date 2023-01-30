import {FinanceController} from "./controllers/FinanceController.js"

let financeController = new FinanceController()

let formEarning = document.getElementById("formEarnings")

formEarning.addEventListener("submit", (evento) => { financeController.createEarnings(evento)})
