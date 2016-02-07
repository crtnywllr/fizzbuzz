//original version
/*for (var counter = 1; counter <= 100; counter++) {

    if ((counter % 3 == 0) && (counter % 5 == 0)) {
        console.log('fizz buzz');
    } else if (counter % 5 == 0) {
        console.log('buzz');
    } else if (counter % 3 == 0) {
        console.log('fizz');
    } else {
        console.log(counter);
    }
}*/

/*//cleaner version
for (var counter = 1; counter <= 100; counter++) {
    var output = counter;
    if ((counter % 15 == 0) {
            output = 'fizz buzz';
        }
        if (counter % 5 == 0) {
            output = 'buzz';
        }
        if (counter % 3 == 0) {
            output = 'fizz';
        }
        console.log(output);
    }*/


$(document).ready(function () {
    //Step 1 Declare Functions

    //get user input
    function startGame(userInput) {

        //check user input
        function check(n) {
            var listItem = "<li>" + n + "</li>";


            if (n % 5 == 0) {
                listItem = "<li>buzz</li>";
            }
            if (n % 3 == 0) {
                listItem = "<li>fizz</li>";
            }
            if (n % 15 == 0) {
                listItem = "<li>fizz buzz</li>";
            }
            return listItem;
        }
        //add to ol
        for (var counter = 1; counter <= userInput; counter++) {
            $('#showResults').append(check(counter));
        }
    }
    //Step 2 Use Functions
    var userInput = prompt('Please enter a 3 digit limit.');

    var userInputCorrect = true;


    while (userInput.length < 3) {
        var userInput = prompt("Please enter 3 digits.");
        userInputCorrect = false;
    }
    while (userInput.indexOf(' ') >= 0) {
        var userInput = prompt("Please don't enter spaces - try a number!");
        userInputCorrect = false;
    }
    while (Math.floor(userInput) != userInput) {

        var userInput = prompt('Please try again and use only numbers.');
        userInputCorrect = false;
    }
    if (userInputCorrect = true) {
        startGame(userInput);
    }
});
