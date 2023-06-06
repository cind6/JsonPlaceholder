"use strict";



const output = document.getElementById("output");
const tablebody = document.getElementById("tablebody");

window.onload = () => {

    fetch("http://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {

            //here is where I loop throught the resulting data....
            for (let user of users){
                console.log(user);
                addRowForUser(user);
            }

        });
}

function addRowForUser(user){
    let newrow = tablebody.insertRow(-1);
    let cell1 = newrow.insertCell(0);
    cell1.innerHTML = user.name;

    let cell2 = newrow.insertCell(1);
    cell2.innerHTML = user.username;

    let cell3 = newrow.insertCell(2);
    cell3.innerHTML = user.email;
    
    let cell4 = newrow.insertCell(3);
    cell4.innerHTML = user.phone;

    let cell5 = newrow.insertCell(4);
    cell5.innerHTML = user.website;

    let cell6 = newrow.insertCell(5);
    cell6.innerHTML = user.company.name;

}
