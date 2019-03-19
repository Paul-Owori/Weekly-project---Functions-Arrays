var oddEvens = i => {
  var log = "";
    i%2==0 ? log = true : log = false;
        console.log(log);
      };

var primeLogger = n => {
  var prime = false;
  var x = 2;
      (n%x===0 && x!==n && n!==1)? prime = false : prime = true;
      console.log(prime);
    };

var fizzBuzz = l => {
  var fizz_buzz = "";
  l%3===0 && l%5===0 && l!==0 ? fizz_buzz = true : fizz_buzz = false;
  console.log(fizz_buzz)
}

var fizz = g => {
  var fizzs = "";
  g%3===0 && g%5!== 0 && g!==0? fizzs = true : fizzs = false;
  console.log(fizzs)
}

var buzz = h => {
  var buzzs = "";
  h%5===0 && h%3!== 0 && h!==0? buzzs = true : buzzs = false;
  console.log(buzzs)
}
