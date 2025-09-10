//--- Easy
//create a variable and assign it a number
let x = 100
//minus 10 from that number
x -= 10
//print that number to the console
console.log(x)
//--- Medium


//--- Hard
//create a variable that holds the h1
const clicker = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
clicker.addEventListener('click', run)

function run() {
    let inputNum = Number(document.querySelector('#danceDanceRevolution').value)
    //add 25 to that number
    inputNum += Number(25)
    //alert that number
    alert(inputNum)
    console.log(Number(inputNum) + Number(x))
}