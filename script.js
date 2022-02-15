
/*  Analusis DOM document
console.dir(document) // dir show objects
console.log(typeof document)
console.log(document.title)
console.log(document.URL)
console.log(document.domain)
console.log(document.head)
console.log(document.body)
document.title = 'DOM' we can change title 
console.log(document.all[5]) // all data

for (let data of document.all){
    console.log(data)
}

console.log(document.images)
console.log(document.links)
*/


/*Travarsing DOM using method

get element by id

console.log(document.getElementById('inp-id'))

let headerelement = document.getElementById('header')
headerelement.textContent = 'To-Do-List' // code read kore
headerelement.innerText = 'To Do List' // browser output read kore
console.log(headerelement.textContent)
console.log(headerelement.innerText)
console.log(headerelement.innerHTML)

console.dir(headerelement)
headerelement.style.color = 'red'
headerelement.style.borderBottom = '5px solid'
headerelement.style.fontSize = '50px'
console.log(document.getElementsByClassName('u-class'))
console.log(document.getElementsByTagName('h1'))

let tag = document.getElementsByTagName('h1')
for(let i = 0; i<tag.length;i++){
    tag[i].style.color = 'white'
}


Query Selector

let header = document.querySelector('#header:last-child')
console.log(header)

let header = document.querySelectorAll('.headd:last-child')
// console.log(header)

for (let head of header){
    head.style.color = 'white'
}

let header = document.querySelector('.headd:nth-child(1)')

header.style.color = 'red'*/





/*DOM Hierarchy

const parent = document.querySelector('#items')
const children = parent.children

console.log(children)

const child = document.querySelector('.item')
// const parent = child.parentElement

// console.log(parent)
const grandParent = child.closest('.grand-parent')
console.log(grandParent)

const grand = document.querySelector('.grand-parent')
const child = grand.querySelectorAll('#item')

console.log(child[1])
const grand = document.querySelector('.grand-parent')
const child = document.querySelector('.item')
const subchild = child.nextElementSibling

subchild.style.color = 'red'
console.log(subchild)


const childtwo = document.querySelector('.item').nextElementSibling
const childone = childtwo.previousElementSibling
childone.style.color = 'red'
console.log(childone)*/



// manipulate DOM

/*const divElement = document.createElement('div')
divElement.className = 'red'
divElement.setAttribute('id', 'red')
divElement.setAttribute('title', 'DOM')
divElement.append("hello horld")
divElement.style.paddingTop = '2%'
divElement.style.textTransform = 'uppercase'


const continar = document.querySelector('.u-class')
const divtag = continar.querySelector('.m-class')

continar.insertBefore(divElement,divtag)

console.log(continar.insertBefore(divElement,divtag))

// continar.appendChild(divElement)

const list = document.querySelector('.items')

list.style.paddingLeft = '3%'*/


// event listner
// click
//dblclick
//mouseup
//mousedown
//mouseenter only select outer
// mouseleave 
//mouseover select indide element also outer
//mouseout
// mousemove
//keydown
//keyup
//keypress
//focus
//blur
//cut
//paste
//input
//submit

// const clistEvent = document.querySelector('#header')
// const inputFelid = document.querySelector('input[type="text"]')
// // // clistEvent.addEventListener('mouseenter', (event)=> {
// // //     console.log(event)
// // // })
// // inputFelid.addEventListener('input', (event)=> {
// //     console.log(event)
// // })


// const formSubmit = document.querySelector('form')
// inputFelid.addEventListener('keyup', (event)=> {
//     // event.preventDefault()
//     console.log(event.target.value)
// })
// console.log(formSubmit)




let newtask = document.querySelector('#inp-id')
let form = document.querySelector('form')
let todoul = document.querySelector('.secound-cls ul')
let compltul = document.querySelector('.first-cls ul')



// functions

let createTask = function(task){
    let listItem = document.createElement('li')
    let checkbox = document.createElement('input')
    let label = document.createElement('label')

    label.innerText = task
    checkbox.type = 'checkbox'
    listItem.appendChild(checkbox)
    listItem.appendChild(label)
    console.log(listItem)

    return listItem
}


let addTask = function(event){
    event.preventDefault()
    let listItem = createTask(newtask.value)
    todoul.appendChild(listItem)
    newtask.value = ""
    // bind the list item
    // console.log(bindComplements(listItem, complateTask))
    bindComplements(listItem, complateTask)
}

let complateTask = function(){
    let listItem = this.parentNode
    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Delete'
    deleteBtn.className = 'delete'
    listItem.appendChild(deleteBtn)
    console.log(listItem)
    let checkbox = listItem.querySelector("input[type='checkbox']")
    checkbox.remove()
    // console.log(compltul.appendChild(listItem))
    compltul.appendChild(listItem)

    bindCompleteItems(listItem, deleteTask)
}

let deleteTask= function(){
    let listItem = this.parentNode
    let ul = listItem.parentNode
    ul.removeChild(listItem)
}

let bindCompleteItems = function(taskitems, deleteButtonClick){
    let deletebutton = taskitems.querySelector('.delete')
    deletebutton.onclick = deleteButtonClick;
}


let bindComplements = function(taskitems, checkboxclick){
    let checkbox = taskitems.querySelector("input[type='checkbox']")
    checkbox.onchange = checkboxclick;
}
for(let i=0; i<todoul.children.length; i++){
    bindComplements(todoul.children[i], complateTask)
}
for(let i=0; i<compltul.children.length; i++){
    bindCompleteItems(compltul.children[i], deleteTask)
}

form.addEventListener('submit', addTask)
 