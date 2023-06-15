"use strict";

const button = document.getElementById("button");
const todoId = document.getElementById("todoId");
const output = document.getElementById("output");



window.onload = init;

function init() {

  button.onclick = onButtonClicked;


}


function onButtonClicked() {


  console.log('clicked');
  let theUrl = "http://localhost:3000/todos/" + todoId.value;
  fetch(theUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let message = `TODO:<br> UserId: ${data.userId}<br> Id: ${data.id}<br>Title: ${data.title}<br>  Completed: ${data.completed}`;

      output.innerHTML = message

    });


}