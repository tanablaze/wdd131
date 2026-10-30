/* WDD 131 - W02 DOM Activity */
/* Author: Unity Santana Sunday */

// 1. Select the HTML elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// 2. Create a new list item
const li = document.createElement('li');

// 3. Create a delete button
const deleteButton = document.createElement('button');

// 4. Add the input value to the list item
li.textContent = input.value;

// 5. Set the delete button text
deleteButton.textContent = '❌';

// 6. Add an accessible label
deleteButton.setAttribute('aria-label', 'Remove chapter');

// 7. Append the delete button to the list item
li.append(deleteButton);

// 8. Append the list item to the unordered list
list.append(li);
