//add button listener
document.querySelector('#addition').addEventListener('click', add)
// subtract button listener
document.querySelector('#sub').addEventListener('click', sub)
// multiply button listener
document.querySelector('#mult').addEventListener('click', mult)
//divide button listener
document.querySelector('#div').addEventListener('click', div)
//function for each one (keep it simple)

// function that takes both varibales and does the add math 
function add() {
    //declare variable for first input
    let num1 = Number(document.querySelector('#num1').value)
    //declare variable for second input
    let num2 = Number(document.querySelector('#num2').value)
    let sum = num1 + num2
    document.querySelector('h2').innerText = sum
    console.log(sum)
}
// function that takes both varibales and does the sub math
function sub() {
    //declare variable for first input
    let num1 = Number(document.querySelector('#num1').value)
    //declare variable for second input
    let num2 = Number(document.querySelector('#num2').value)

    let diff = num1 - num2
    document.querySelector('h2').innerText = diff
    console.log(diff)
}
// function that takes both varibales and does the mult math
function mult() {
    //declare variable for first input
    let num1 = Number(document.querySelector('#num1').value)
    //declare variable for second input
    let num2 = Number(document.querySelector('#num2').value)

    let product = num1 * num2
    document.querySelector('h2').innerText = product
    console.log(product)
}
// function that takes both varibales and does the div math
function div() {
    //declare variable for first input
    let num1 = Number(document.querySelector('#num1').value)
    //declare variable for second input
    let num2 = Number(document.querySelector('#num2').value)

    let quotient = num1 / num2
    document.querySelector('h2').innerText = quotient
    console.log(quotient)
}