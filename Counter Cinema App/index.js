let countEl = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")
let resetIcon = document.getElementById("reset-icon")

let count = 0 

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEL.textContent = saveEL.textContent + countStr
    count = 0
    countEl.textContent = count
}

function reset() {
     count = 0
     countEl.textContent = count 
}