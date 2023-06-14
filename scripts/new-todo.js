"use strict";

const todoTitle = document.getElementsById("todoTitle");
const todoCompleted = document.getElementById("todoCompleted");
const todoUserId = document.getElementById("todoUserId");
const todoButton = document.getElementById("todoButton");
const messageText = document.getElementById("messageText");

window.onload =  function(){

    todoButton.onclick = onButtonClick;
}

function onButtonClicked(){

let bodyData = {
    title: todoTitle.value,
    completed: todoCompleted.value,
    userId: todoUserId.value,
}




//send the request
fetch("http://localhost:3000/todos", {
method: "POST",
body: JSON.stringify(bodyData),
headers: {
    "Content-type": "application/json; charset=UTF-8"
}
})

.then(response => response.json())
.then(json => {
// If the POST finishes successfully, display a message
messageText.innerHTML = "New todo added with ID of" + json.id;
})
.catch(err => {
// If the POST returns an error, display a message

messageText.innerHTML = "Unexpected error";
});

};
