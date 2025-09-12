//listen for the add task button --> addTask()
document.querySelector('#addTask').addEventListener('click', addTask)

//listen for the clear all button --> clearAll()
document.querySelector('#clearAll').addEventListener('click', clearAll)

//listen for the clear last button --> clearLast()
document.querySelector('#clearLast').addEventListener('click', clearLast)

function addTask() {
    document.querySelector('h4').innerText = ''
    //take in the input as a variable
    let inputTask = document.querySelector('#item').value
    //initalize an array object

    // initialize an element
    const li = document.createElement('li')
    const input = document.createElement('input')
    input.type = 'checkbox'
    input.className = 'scratch'
    const label = document.createElement('span')
    li.appendChild(input)
    li.appendChild(label)
    const parent = document.querySelector('#taskList')

    label.textContent = inputTask

    if (inputTask == '') {
        document.querySelector('h4').innerText = 'Cannot add empty task.'
    } else if (document.querySelectorAll('#taskList li span').length > 23) {
        document.querySelector('h2').innerText = 'Maximum Task Inputs. Remove an item before adding a new one.'
    } else {
        parent.appendChild(li)
        let taskComplete = input
        taskComplete.addEventListener('click', scratch)
    }

}
function scratch() {
    const items = document.querySelectorAll('ol li')

    for (const item of items) {
        const checkbox = item.querySelector('input[type="checkbox"]')
        const span = item.querySelector('span')

        if (checkbox && span) {
            if (checkbox.checked) {
                span.style.textDecoration = 'line-through'
            } else {
                span.style.textDecoration = 'none'
            }
        }
    }
    document.querySelector('h4').innerText = ''
    document.querySelector('h2').innerText = ''
}


function clearAll() {
    const parent = document.querySelector('#taskList')
    if (parent.firstChild == null) {
        document.querySelector('h4').innerText = 'Todo List is empty. Add tasks before trying to remove.'
    } else {
        //set the ol tag to be empty
        parent.innerHTML = ""
        document.querySelector('h4').innerText = ''
        document.querySelector('h2').innerText = ''
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
        document.querySelector('h4').innerText = ''
        document.querySelector('h2').innerText = ''
    }
}
