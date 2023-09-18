const meterIn = document.getElementById("meter-In")
const m2cmBtn = document.getElementById("m2cm-Btn")
const m2cmEl = document.getElementById("m2cm")

m2cmBtn.addEventListener("click", function(){
    let Centimeter = meterIn.value * 100
    m2cmEl.textContent = Centimeter 
})



