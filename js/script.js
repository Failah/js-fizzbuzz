console.log('JS OK!')

const grid = document.querySelector('.squares-grid');

for (let index = 1; index <= 100; index++) {
    const square = document.createElement('div');
    if (index % 3 === 0 && index % 5 !== 0) {
        square.append('Fizz');
        square.classList.add('bg-red');
        console.log('Fizz');
    } else if (index % 5 === 0 && index % 3 !== 0) {
        square.append('Buzz');
        square.classList.add('bg-green');
        console.log('Buzz');
    } else if (index % 5 === 0 && index % 3 === 0) {
        square.append('FizzBuzz');
        square.classList.add('bg-yellow');
        console.log('FizzBuzz');
    } else {
        square.append(index.toFixed());
        console.log(index);
    }

    grid.append(square);

}