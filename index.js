"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// Dom Elements
const namesList = document.querySelector("#names-list");
const youngCharactersList = document.querySelector("#young-characters-list");
const functionList = document.querySelector("#function-list");

// broken test data for exercise 6

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
(function () {
  let html = ``;
  users.forEach((user) => {
    console.log(user.name);
    html += `<li>${user.name}</li>`;
  });
  namesList.innerHTML = html;
})();
// I am scoping them into an IIFE because i want to use the html variable multiple times without having to empty it every time.

// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
(function () {
  let html = ``;
  const filteredUsers = users.filter((user) => user.age < 40);
  filteredUsers.forEach((user) => {
    console.log(user.name);
    html += `<li>${user.name}</li>`;
  });
  youngCharactersList.innerHTML = html;
})();

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"
const listPopulator = function (array) {
  let html = ``;
  array.forEach((item) => {
    console.log(item.name);
    html += `<li>${item.id}. ${item.name}</li>`;
  });
  functionList.innerHTML = html;
};
listPopulator(users);

// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"

// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"
