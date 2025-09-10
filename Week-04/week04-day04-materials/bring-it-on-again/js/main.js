// *Variables*
// Declare a variable, assign it a value, and alert the value
let x = 4
alert(x)
// Create a variable, divide it by 10, and console log the value
let y = 5
console.log(5 / 10)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multThreeAlert(num1, num2, num3) {
    let product = num1 * num2 * num3
    alert(product)
}
multThreeAlert(3, 4, 5)
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function addTwoSubTwo(num1, num2, num3, num4) {
    let sum = num1 + num2
    let diff = num3 - num4
    let result = [sum, diff]
    console.log = result
}
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function addSubDiv(num1, num2, num3) {
    let result = (100 + num1 - num2) / num3
    if (result > 25) {
        console.log('WE HAVE A WINNNA')
    } else {
        console.log('WE HAVE A LOOOSSSAA')
    }
}
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function daysOfTheWeek(day) {
    if (day.toLowerCase() === "saturday" || day.toLowerCase() === "sunday") {
        alert("Weekend")
    }
    else if (day.toLowerCase() === "monday" || day.toLowerCase() === "tuesday" || day.toLowerCase() === "wednesday" || day.toLowerCase() === "thursday" || day.toLowerCase() === "friday"){
        alert("Weekday")
    }else{
    alert(`${day} is not a day of the week you dipshit! Try again!`)
    }
}
daysOfTheWeek("hi")
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function countByThree(number){
    for(i = 1; i <= number; i+=3){
        console.log(i) 
    }
    // count = 1
    // while (count < number){
    //     console.log(count)
    //     count+= 3
    // }
}
countByThree(40)