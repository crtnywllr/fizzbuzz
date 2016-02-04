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

//cleaner version
for (var counter = 1; counter <= 100; counter++) {
    var output = counter;
    if ((counter % 3 == 0) && (counter % 5 == 0)) {
        output = 'fizz buzz';
    }
    if (counter % 5 == 0) {
        output = 'buzz';
    }
    if (counter % 3 == 0) {
        output = 'fizz';
    }
    console.log(output);
}
