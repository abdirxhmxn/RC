//listen for the add task button --> addTask()
document.querySelector('#addTask').addEventListener('click', addTask)

//listen for the clear all button --> clearAll()
document.querySelector('#clearAll').addEventListener('click', clearAll)

//listen for the clear last button --> clearLast()
document.querySelector('#clearLast').addEventListener('click', clearLast)

let taskList = []

function addTask() {
    document.querySelector('h4').innerText = ''
    //take in the input as a variable
    let inputTask = document.querySelector('#item').value
    //initalize an array object

    // initialize an element
    const li = document.createElement('li')
    const input = document.createElement('input')
    input.type = 'checkbox'

    const label = document.createElement('span')
    li.appendChild(input)
    li.appendChild(label)
    const parent = document.querySelector('#taskList')

    label.textContent = inputTask

    parent.appendChild(li)
}

function clearAll() {
    const parent = document.querySelector('#taskList')
    if (parent.firstChild == null) {
        document.querySelector('h4').innerText = 'Todo List is empty. Add tasks before trying to remove.'
    } else {

        //set the ol tag to be empty
        parent.innerHTML = ""
    }
}
function clearLast() {
    const parent = document.querySelector('#taskList')

    //conditional logic for empty list
    if (parent.firstChild == null) {
        document.querySelector('h4').innerText = 'Todo List is empty. Add tasks before trying to remove.'
    } else {
        const li = document.querySelector('li')
        //remove the last li
        parent.removeChild(parent.lastChild)
    }
}
