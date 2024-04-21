// Creating the button
const a = document.createElement("a");
a.classList.add("btn")
a.classList.add("btn-link")
a.textContent = "Show Remaining";
const li = document.createElement("li");
li.appendChild(a);

// Clear all rows that are not marked as checked in
li.onclick = () => [...document.getElementsByClassName('checked d-none')]
  .map(n => n && n.parentElement.classList.add('d-none'));

// Inserting the button into the DOM
const right_header_buttons = document.getElementsByClassName("header_nav right")[0];
right_header_buttons.insertBefore(li, right_header_buttons.firstChild);