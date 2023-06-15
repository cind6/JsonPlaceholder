"use strict";

const todoButtonSubmit = document.getElementById("todoButtonSubmit");
const todoButtonUpdate = document.getElementById("todoButtonUpdate");
const cancelButton = document.getElementById("cancelButton");
const messageText = document.getElementById("messageText");


const updateForm = document.getElementById("updateForm");
const todoId = document.getElementById("todoId");
const todoUserId = document.getElementById("todoUserId");
const todoTitle = document.getElementById("todoTitle");
const todoCompleted = document.getElementById("todoCompleted");



window.onload = init;

function init() {
    todoButtonSubmit.onclick = onTodoButtonClick;
    todoButtonUpdate.onclick = onUpdateButtonClick;
    cancelButton.onclick = onCancelButtonClick;

    
}

function disableIdField() {
    todoId.disabled = true;
}


hideUpdateForm();


function onTodoButtonClick() {
    console.log("clicked");

    let theUrl = "http://localhost:3000/todos/" + todoId.value;
    fetch(theUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);


            console.log(todoUserId);
            todoTitle.value = data.title;

            todoCompleted.value = data.completed;
            todoUserId.value = data.userId;


        });

    disableIdField();
    showUpdateForm();

}

function onUpdateButtonClick() {
    // Implement the logic to update the TODO data here


    // Create JSON object to include in the request body
    let bodyData = {

        title: todoTitle.value,
        completed: todoCompleted.value,
        userId: todoUserId.value,
    }
    let theUrl = "http://localhost:3000/todos/" + todoId.value;
   
    fetch(theUrl, {
        method: "PUT",
        body: JSON.stringify(bodyData),
        headers: {"Content-type": "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then(data => {

            console.log("it worked");
            messageText.innerHTML = "TODO updated successfully!";
        })
        .catch(err => {
            console.error(err);
            // errorMessageText.innerHTML = "Failed to update TODO.";
        });


}


function onCancelButtonClick() {

    window.location.href = "index.html";

}


function hideUpdateForm() {
    updateForm.style.display = "none";
}
function showUpdateForm() {
    updateForm.style.display = "block";
}



