var myArray = ['1', '2', 'Andela', '77', '6', '34', '32', 'x', '19', '17', '54', '66', '13', 'angel', '23', '41', 'women'];

function arraySort(myArray) {
    //array to hold even numbers
    var evens = [];

    //array to hold odd numbers
    var odds = [];

    //array to hold characters and strings
    var chars = [];

    //loop through the original array
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] % 2 == 0) {
            evens.push(myArray[i]);
        } else if (myArray[i] % 2 == 1) {

            odds.push(myArray[i]);
        } else {
            chars.push(myArray[i]);

        }

    }
    //display original array array
    document.getElementById("input").innerHTML = "Input Numbers = " + "[" + myArray + "]" + " ";

    //display the evens array
    document.getElementById("evens").innerHTML = "Even Numbers = " + "[" + evens + "]" + " ";

    //display the odds array
    document.getElementById("odds").innerHTML = "Odd Numbers = " + "[" + odds + "]" + " ";

    //display the character strings.
    document.getElementById("chars").innerHTML = "character strings =  " + "[" + chars + "]" + " ";

} //end function
arraySort(myArray); // Your code here


module.exports = arraySort;