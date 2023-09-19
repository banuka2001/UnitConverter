const meterIn = document.getElementById("meter-In")
const m2cmBtn = document.getElementById("m2cm-Btn")
const outputEl = document.getElementById("output")
const DisplayInput = document.getElementById("input")


m2cmBtn.addEventListener("click", function(){
    let Centimeter = meterIn.value * 100
    outputEl.textContent = Centimeter + "cm"
    DisplayInput.textContent = meterIn.value + "m"
    meterIn.value = ""
})



