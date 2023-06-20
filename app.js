var deleteItemList = [];
deleteItemList = document.querySelectorAll(".list-group");
let clearAllToDo = document.querySelector("#todoClearButton");
let addToDoButton = document.querySelector("#todoAddButton");
let todoListParent = document.querySelector(".ul-group");
let inputTodoName = document.querySelector(".form-control");




DeleteToDo();
console.log(inputTodoName);


clearAllToDo.addEventListener("click", ClearAllTodo);
addToDoButton.addEventListener("click", AddToDo);
inputTodoName.addEventListener("keyup", function (event) {
  


});

function DeleteToDo() {

    deleteItemList.forEach(element => {

        element.addEventListener("click", function () {

            element.remove();
        })
    });
}

function ClearAllTodo() {

    deleteItemList.forEach(element => {

        element.remove();
    });
}


function AddToDo() {

    
    if(inputTodoName.value != ""){
        CreateToDo();
    }
    else{
        alert("Enter Valid Value");
    }
  
}

function CreateToDo() {
    let newTodo = document.createElement("li");
    newTodo.className = "list-group";
    newTodo.textContent = inputTodoName.value;
    todoListParent.insertBefore(newTodo, todoListParent.firstChild);
    deleteItemList = document.querySelectorAll(".list-group");
    CreateDeleteItem(newTodo);
    inputTodoName.value = "";
    console.log(newTodo);
}

function CreateDeleteItem(parent) {
    let createHref = document.createElement("a");
    createHref.href = "#";
    createHref.className = "delete-item";
    createHref.addEventListener("click",DeleteToDo);
    let createi = document.createElement("i");
    createi.className = "fa fa-remove";
    createHref.appendChild(createi);
    parent.appendChild(createHref);
}

