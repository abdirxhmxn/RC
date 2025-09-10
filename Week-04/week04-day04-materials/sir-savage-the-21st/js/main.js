//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function loop21(){
    for(i = 0; i<21; i++){
        console.log(21)
        document.querySelector('#savageSays').innerText= '21'
        console.log(21)
        document.querySelector('#savageSays').innerText= '21'
    }
}
loop21();
//Bonus can you make it print '21' 21 times to the dom?
