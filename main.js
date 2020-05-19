//Complete the TODO below
// Create a "Roll Button"element.
// Create a "Show All Rolls Button" element.
// Create a "Reset Button" element

let RollButton = document.querySelector('#Roll-button')
let ShowAllRollsButton = document.querySelector('#ShowAll-Rolls-button')
let resetButton = document.querySelector('#reset-button')
let textbox = document.querySelector('#textbox')
let ordereList = document.querySelector("ol")

//Create a variable, named dieRolls, and define it as an empty array 
//(which later you will use as a list of each die that has been rolled). (1 point)
//Add a click event listener for your "Roll!" button. (1 point)
//On click, you need to get the value from the text input box, so that you know how many dice to roll.
// Assign this to a variable within your event listener. (1 point)
//Then you need to roll the dice. It is time to write a loop. Use Math.random() to simulate rolling a single six-sided die X number of times, where X is the number from the text input box. X is also the number of times you will loop. (4 points)
//Push the result of each roll onto your dieRolls array. (2 points)
//Sum all your dice rolls and display the result in the Total area on the page using innerHTML. (2 point)

let dieRolls = [];

RollButton.addEventListener('click', function () {
    console.log("Roll-button click");

    let newRollValue = Number(textbox.value);

    let random = Math.random()
    console.log(random)

    let counter = 1
    while (counter <= newRollValue) {
        counter += 1
        let diceRoll = Math.floor(Math.random() * 6) + 1;
        console.log(diceRoll)
        dieRolls.push(diceRoll)
    }
    console.log(dieRolls)
})

let newtotalValue = Number(total.innerHTML) + 1;
total.innerHTML = newtotalValue;



// Ready to display for the user all the rolls you've recorded in your dieRolls array.
// Eventually, when the user clicks "Show All Rolls", 
// you will loop through each roll in the dieRolls array and, for each, 
// create a List Item tag ( <li>...</li>) containing the result of that single die roll. 
// You will add each LI element to the innerHTML 
// of an "All Rolls" Ordered List you are creating in this step. 

ShowAllRollsButton.addEventListener('click', function () {
    console.log("ShowAll-Rolls-button click");

    let newAllRollselement = Number(total.innerHTML);
    total.innerHTML = newAllRollselement;

    let random = Math.random()
    console.log(random)

    let counter = 1
    while (counter >= 6) {
        console.log
        counter += 6
    }
})

// TO DO 2:clicking the "RESET" button should reset all the shot and goal counter,
//and add 1 to the number of reset.


// This line says, "I want to listen for someone to CLICK my
// reset-button, and any time I 'hear' that event occur,
// I want some code to run.

resetButton.addEventListener("click", function () {
    console.log("reset-button-click");

    let newresetValue = Number(reset.innerHTML);
    reset.innerHTML = newresetValue;

    ShowAllRolls.innerHTML = 0;
    Roll.innerHTML = 0;
    array_dieRolls.innerText = 0;
})

