let total = 0

document.querySelector('#dominosPizza').addEventListener('click', plus)
document.querySelector('#pumpkin').addEventListener('click', subtract)
document.querySelector('#zebra').addEventListener('click', divide)
document.querySelector('#cantThinkOfAnything').addEventListener('click', multiply)
document.querySelector('#AC').addEventListener('click', reset)
document.querySelector('#equal').addEventListener('click', equal)

document.querySelector('#one').addEventListener('click', one)
document.querySelector('#two').addEventListener('click', two)
document.querySelector('#three').addEventListener('click', three)
document.querySelector('#four').addEventListener('click', four)
document.querySelector('#five').addEventListener('click', five)
document.querySelector('#six').addEventListener('click', six)
document.querySelector('#seven').addEventListener('click', seven)
document.querySelector('#eight').addEventListener('click', eight)
document.querySelector('#nine').addEventListener('click', nine)
document.querySelector('#zero').addEventListener('click', zero)
document.querySelector('#decimal').addEventListener('click', decimal)


function Total() {

}
function one() {
  total += 1
  document.querySelector('#placeToPutResult').innerText = total
  document.body.style.backgroundColor = 'rgba(0, 255, 255, 0.526)'

}
function two() {
  total /= 2
  document.querySelector('#placeToPutResult').innerText = total
  document.body.style.backgroundColor = 'rgb(195, 112, 112)'
}
function three() {
  total *= 3
  document.querySelector('#placeToPutResult').innerText = total
  document.body.style.backgroundColor = '#5c8222'

}
function four() {
  total -= 4
  document.querySelector('#placeToPutResult').innerText = total
  document.body.style.backgroundColor = 'rgba(0, 136, 255, 0.571)'
}
function five() {
  total /= 5
  document.querySelector('#placeToPutResult').innerText = total
  document.body.style.backgroundColor = 'rgba(255, 0, 128, 0.427)'

}
function six() {
  total += 6
  document.querySelector('#placeToPutResult').innerText = total
  document.body.style.backgroundColor = 'rgb(255, 225, 0)'
}
function seven() {
  total += 7
  document.querySelector('#placeToPutResult').innerText = total
  document.body.style.backgroundColor = 'rgb(134, 22, 22)'

}
function eight() {
  total *= 8
  document.querySelector('#placeToPutResult').innerText = total
  document.body.style.backgroundColor = '#8a9b70'
}
function nine() {
  total -= 9
  document.querySelector('#placeToPutResult').innerText = total
  document.body.style.backgroundColor = 'rgb(120, 60, 166)'

}
function decimal() {
  total += 0.7
  document.querySelector('#placeToPutResult').innerText = total
  document.body.style.backgroundColor = 'rgb(120, 90, 105)'
}
function zero() {
  total *= 0.0
  document.querySelector('#placeToPutResult').innerText = total
  document.body.style.backgroundColor = 'rgb(139, 49, 10)'
}
function reset() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
  document.body.style.backgroundColor = 'aqua'
}
function plus() {
  document.querySelector('#placeToPutResult').innerText = total
  document.body.style.backgroundColor = '#ff0000'
}
function subtract() {
  document.querySelector('#placeToPutResult').innerText = total
  document.body.style.backgroundColor = 'aqua'
}
function multiply() {
  document.querySelector('#placeToPutResult').innerText = total
  document.body.style.backgroundColor = 'rgb(0, 136, 255)'
}
function divide() {
  document.querySelector('#placeToPutResult').innerText = total
  document.body.style.backgroundColor = '#adff2f'
}
function equal() {
  document.querySelector('#placeToPutResult').innerText = total
  document.body.style.backgroundColor = 'rgb(255, 0, 128)'
}
