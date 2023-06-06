"use strict";

const button = document.getElementById("button");
const todoid = document.getElementById("todoid");
const output = document.getElementById("output");



window.onload = init;

function init(){

  button.onclick = onButtonClicked;
   

}


function onButtonClicked(){

    
    console.log('clicked');
fetch("https://jsonplaceholder.typicode.com/todos/" + todoid.value)
.then(response => response.json())
.then(data => {
    console.log(data);
    let message = `TODO:<br> UserId: ${data.userId}<br> Id: ${data.id}<br>Title: ${data.title}<br>  Completed: ${data.completed}`;

    output.innerHTML = message

    });

   
}