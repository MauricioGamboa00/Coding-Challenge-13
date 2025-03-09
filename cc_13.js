// Task 2 Adding Employee Cards Dynamically

function createEmployeeCard(name, position) { 

    const employeeContainer = document.getElementById('employeeContainer');

    const card = document.createElement('div');
    card.setAttribute(`class`, `employee-card`); // Setting attribures for employee cards

    const heading = document.createElement('h3'); // Setting the heading as employee name
    heading.textContent = name;

    const paragraph = document.createElement('p'); // Setting Employee postition as a paragraph
    paragraph.textContent = position;

    const removeButton = document.createElement('button'); // Creating a remove button
    removeButton.textContent = 'Remove';

    const editButton = document.createElement('button'); // Creating an edit button for task 5
    editButton.textContent = 'Edit Employee Card'

    card.appendChild(heading); // Appending heading to card
    card.appendChild(paragraph); // Appending paragraph to card
    card.appendChild(removeButton); // Appending remove button to card
    card.appendChild(editButton); // Appending edit button to to card
    
    // Task 5 Modifications

    editButton.addEventListener('click', (event) => {; // Adding an event listener to the edit button
    
    const nameInput = document.createElement('input'); // create an input field for employee name when edit button is clicked
    nameInput.value = heading.textContent;

    const positionInput = document.createElement('input'); // create an input field for employee position when edit button is clicked
    positionInput.value = paragraph.textContent;

    const saveButton = document.createElement('button'); // Create a save button when edit employee card is clicked
    saveButton.textContent = 'Save Changes';

    saveButton.addEventListener('click', (event) => {; // Adding an event listener to the save button
        heading.textContent = nameInput.value;
        paragraph.textContent = positionInput.value;
        card.removeChild(saveButton); // remove save button when save chnages is clicked
        card.removeChild(positionInput); // remove position input field when save changes is clicked
        card.removeChild(nameInput); // remove name input field when save changes is clicked
})
    



    card.appendChild(nameInput); // appending name input field
    card.appendChild(positionInput); // appending position input field
    card.appendChild(saveButton); // appending the save button field
    
    })


    // Task 4 Modifications

    card.addEventListener('click', event => {; // Added an Event Listener when an employee card is clicked
        console.log(heading.textContent, "Employee card clicked"); // Display message in console when an employee card is clicked
    })

    removeButton.addEventListener('click', (event) => {
        card.remove(); // Adding an event listener to remove an employee card when it is clicked

        console.log(heading.textContent, 'Employee Card Removed.'); // Log to console everytime remove button is clicked for an employee card
    

        event.stopPropagation(); // Prevent the clicks from effecting the parent container
    }); 
    

    employeeContainer.appendChild(card); // appending the employee container to the card
    
    

}

createEmployeeCard("Tyreek Hill", "Wide Reciever"); // Created a new employee card
createEmployeeCard("Tua Tagovailoa", "Quarterback"); // Created a new employee card
createEmployeeCard("Mike McDaniel", "Head Coach"); // Created a new employee card

// Task 3 Converting NodeLists to Arrays for Bulk Updates

const cards = document.querySelectorAll('.employee-card'); // Used query selectorAll to select all employee cards
const cardArray = [...cards]; // Converting Nodelist to an array

cardArray.forEach(card => {
card.style.backgroundColor = 'orange'; // Updated the employee cards to be orange
    });
