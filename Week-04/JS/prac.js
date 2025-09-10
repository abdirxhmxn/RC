

function fizzbuzz() {
  let x = 1;
  while (x >= 1 && x <= 100) {
    if (x % 3 === 0) {
      console.log('Fizz');
      x++;
    }
    else {
      if (x%5===0 && x%3!==0) {
        console.log('Buzz');
        x++;
      }
      else {
        console.log(x);
        x++;
      }
    }

  }
}
console.log('start')
fizzbuzz();
console.log('end')