// Task 2 Adding Employee Cards Dynamically

function createEmployeeCard(name, position){ 

    const employeeContainer = document.getElementById(`employeeContainer`);

    const card = document.createElement(`div`);
    card.setAttribute(`class`, `employee-card`); // Setting attribures for employee cards

    const heading = document.createElement(`h3`); // Setting the heading as employee name
    heading.textContent = name;

    const paragraph = document.createElement(`p`); // Setting Employee postition as a paragraph
    paragraph.textContent = position;

    const removeButton = document.createElement(`button`); // Creating a remove button
    removeButton.textContent = `Remove`;

    

    card.appendChild(heading); // appending heading 
    card.appendChild(paragraph); // appending paragraph
    card.appendChild(removeButton); // appending remove button

    employeeContainer.appendChild(card); // appending the employee card
    
    

}

createEmployeeCard("Tyreek Hill", "Wide Reciever"); // Created a new employee card
createEmployeeCard("Tua Tagovailoa", "Quarterback"); // Created a new employee card
createEmployeeCard("Mike McDaniel", "Head Coach"); // Created a new employee card

