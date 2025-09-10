document.querySelector('button').addEventListener('click', run)
function run() {
    const age = document.querySelector('#danceDanceRevolution').value
    //Create a conditonal that checks their age
    //If under 16, tell them they can not drive
    if (age < 16) {
        document.querySelector('#message').innerText = 'You cannot drive!';
    }//If under 18, tell them they can't hate from outside the club, because they can't even get in
    else if (age < 18) {
        document.querySelector('#message').innerText = "You can't hate from outside the club cuz you can't even get in!";
    }
    //If under 21, tell them they can not drink
    else if (age < 21) {
        document.querySelector('#message').innerText = 'You cannot drink!';
    }
    //If under 25, tell them they can not rent cars affordably
    else if (age < 25) {
        document.querySelector('#message').innerText = 'You cannot rent cars affordably!';
    }
    //If under 30, tell them they can not rent fancy cars affordably
    else if (age < 30) {
        document.querySelector('#message').innerText = 'You cannot rent fancy cars affordably!';
    } //If under over 30, tell them there is nothing left to look forward too
    else {
        document.querySelector('#message').innerText = 'You got nothing to look forward to!';
    }

}


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
