//listen for change (cel or far) hit degreeConversion
document.querySelector('#convert').addEventListener('click', degreeConversion)
//document.querySelector('#degree').addEventListener('change', degreeConversion)

function degreeConversion() {
    //look at what input it is and make sure it is a number and treat it as a float
    let initDeg = parseFloat(document.querySelector('#temp').value)
    let selectCel = document.querySelector('#degree').value
    let newDeg
    //if cel do --> math to farenheit
    if (selectCel === 'celsius') {
        newDeg = (initDeg * 1.8) + 32
        document.querySelector('#print').innerText = `${initDeg}\u00B0 celsius converted to farenheit is ${newDeg}\u00B0`
    } else if (selectCel === 'farenheit') {
        //if far do --> math to celsius
        newDeg = (initDeg - 32) / 1.8
        document.querySelector('#print').innerText = `${initDeg}\u00B0 farenheit converted to celsius is ${newDeg}\u00B0`
    }

}
