// *Variables*
// Create a variable and console log the value
let x = 10
console.log(x)
// Create a variable, add 10 to it, and alert the value
let y = 15
y += 10
alert(y)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourAndAlert(n1, n2, n3, n4) {
    let diff = n1 - n2 - n3 - n4
    alert(diff)
}
subFourAndAlert(1, 2, 3, 4)
// Create a function that divides one number by another and returns the remainder
function divAndRemainder(n1, n2) {
    let div = n1 % n2
    console.log(div)
    return div
}
divAndRemainder(59, 5)
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function Jumanji(num1, num2) {
    let sum = num1 + num2
    if (sum > 50) {
        alert('Jumanji')
    } else {
        console.log('sum is less than 50')
    }
}
Jumanji(45, 10)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multThreeDiv(num1, num2, num3) {
    let product = num1 * num2 * num3
    if (product % 3 === 0) {
        alert('Zebra')
    } else {
        console.log('It is not divisible by 3 because theres a remainder of: ' + product % 3)
    }
}
multThreeDiv(7, 3, 13)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

// document.querySelector('button').addEventListener('click', loopVar)
// function loopVar(){
//     let word = document.querySelector('#word').value
//     let number = document.querySelector('#number').value
//     document.querySelector('h2').innerText = ''
//     count = 0
//     while(count < number && number > 0){
//         document.querySelector('h2').innerText += ` ${word} `
//         count++
//     }
// }
function loopVar(word, number){
    count = 0
    while(count < number && number > 0){
        console.log(word)
        count++
    }
}
loopVar('Ham', 7)