document.querySelector('#convert').addEventListener('click', convert)




function convert() {
    let initialDeg = parseFloat(document.querySelector('#temp').value)
    let selectCel = document.querySelector('#degree').value
    let newDeg
    if (selectCel === 'celsius') {
        newDeg = (initialDeg * 1.8) + 32
        document.querySelector('#print').innerText = `${initialDeg}\u00B0 celsius converted to farenheit is ${newDeg}\u00B0`
    } else if (selectCel === 'farenheit') {
        newDeg = (initialDeg - 32) / 1.8
        document.querySelector('#print').innerText = `${initialDeg}\u00B0 farenheit converted to celsius is ${newDeg}\u00B0`
    }else{
        document.querySelector('#print').innerText = `Input a number and then select what unit it is before you convert it.${initialDeg} ${newDeg}`
    }
    
}