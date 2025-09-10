//Create a function that grabs the number of snacks from the input and tells you to stop that many times

//listen for the click then run function
document.querySelector('#help').addEventListener('click', snackHelp)

function snackHelp() {
    //take in the input as a variable
    let inputNum = Number(document.querySelector('input').value)
    //create a new variable count
    let count = 0;

    document.querySelector('#stops').innerText = ''

    //while the inputNum is less than count and greater than 0
    while (count < inputNum && inputNum > 0) {
        //print stop
        document.querySelector('#stops').innerText += ' Stop'
        //increment count
        count++
    }
    if (inputNum == 0) {
        document.querySelector('#stops').innerText = 'Go get some snacks broke boi'
    } else if (inputNum < 0) {
        document.querySelector('#stops').innerText = 'You can\'t have negative snacks you dipshit!'
    } else {
        console.log('Enter a number you bozo!')
    }
}