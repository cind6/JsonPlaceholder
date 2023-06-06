"use strict";

const button = document.getElementById("button");
const userid = document.getElementById("userid");
const table = document.getElementById("table");
const output = document.getElementById("output");

window.onload = init;

function init() {
  button.onclick = onButtonClicked;
}

function onButtonClicked() {
  fetch("https://jsonplaceholder.typicode.com/users/" + userid.value)
    .then(response => response.json())
    .then(data => {
      if (data && Object.keys(data).length !== 0) {
        table.innerHTML = `
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${data.id}</td>
              <td>${data.name}</td>
              <td>${data.username}</td>
              <td>${data.email}</td>
              <td>${data.phone}</td>
              <td>${data.website}</td>
            </tr>
          </tbody>
        `;
        output.innerHTML = ""; // Clear any previous error message
      } else {
        table.innerHTML = "";
        output.innerHTML = "<p>User not found</p>";
      }
    
    });
}
