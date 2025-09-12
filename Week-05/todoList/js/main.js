//listen for the add task button --> addTask()
document.querySelector('#addTask').addEventListener('click', addTask)

//listen for the clear all button --> clearAll()
document.querySelector('#clearAll').addEventListener('click', clearAll)

//listen for the clear last button --> clearLast()
document.querySelector('#clearLast').addEventListener('click', clearLast)



function addTask() {
    //take in the input as a variable
    //initalize an array object
    let taskList = []
    // initialize an element
    let newElementList = document.createElement('li')
    const parent = document.querySelector('ol')
    newElementList.textContent = 'Testing'

    document.querySelector('ol').appendChild(newElementList)
    // add it the empty array as an li
    console.log(taskList.push(newElementList))
}

function clearAll() {
    console.log("Clear All")
}
function clearLast() {
    console.log("Clear Last")
}
