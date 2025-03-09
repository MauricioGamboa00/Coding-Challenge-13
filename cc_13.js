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
    
    // Task 4 Modifications

    removeButton.addEventListener(`click`, (event) => {
        card.remove(); // Adding an event listener to remove an employee card when it is clicked

        console.log(`Employee Card Removed.`); // Log to console everytime remove button is clicked for an employee card
    

        event.stopPropagation(); // Prevent the clicks from effecting the parent container
    }); 

    card.appendChild(heading); // appending heading 
    card.appendChild(paragraph); // appending paragraph
    card.appendChild(removeButton); // appending remove button

    employeeContainer.appendChild(card); // appending the employee card
    
    

}

createEmployeeCard("Tyreek Hill", "Wide Reciever"); // Created a new employee card
createEmployeeCard("Tua Tagovailoa", "Quarterback"); // Created a new employee card
createEmployeeCard("Mike McDaniel", "Head Coach"); // Created a new employee card

// Task 3 Converting NodeLists to Arrays for Bulk Updates

const cards = document.querySelectorAll(`.employee-card`); // Used query selectorAll to select all employee cards
const cardArray = [...cards]; // Converting Nodelist to an array

cardArray.forEach(card => {
card.style.backgroundColor = `orange`; // Updated the employee cards to be orange
    });
