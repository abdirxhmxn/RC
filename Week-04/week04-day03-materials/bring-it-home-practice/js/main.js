// *Variables*
// Create a variable and console log the value
let x = 5
console.log(x);
// Create a variable, add 10 to it, and alert the value
let y = x;
y += 10;
alert(y);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFour() {
    let num1 = 10
    let num2 = 100
    let num3 = 1000
    let num4 = 10000
    alert(num1 - num2 - num3 - num4)
}
subFour();
// Create a function that divides one number by another and returns the remainder
function divTwo(number) {
    const num1 = 10;
    number %= 10;
    return number;
}
divTwo(45);

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(num1, num2){
    if(num1+num2 > 50){
        let sum = num1+num2
        console.log(sum)
        alert("Jumanji")
    }else{
        console.log("The two numbers' sum are below 50.")
    }
}
jumanji(3, 90);
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multThree(num1, num2, num3){
    let product = num1*num2*num3;
    if(product%3===0){
        alert("Zebra")
    }
    else{
        console.log(`The product, ${product} is not divisible by 3`);
    }
}
multThree(1, 5, 4);