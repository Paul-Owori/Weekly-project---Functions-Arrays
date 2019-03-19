//These are the helper functions for var logger which is at the bottom of the page.
var oddEvens = i => {
  var log = "";
    i%2==0 ? log = true : log = false;
        return (log);
      };

/* var oddEvens checks if a number is odd or even. If the number is even, it returns true,
if the number is odd, it returns false
*/

var primeLogger = n => {
  var prime = false;
  var x = 2;
      (n%x===0 && x!==n && n!==1)? prime = false : prime = true;
      return (prime);
    };

/* var primeLogger checks if a number is a prime number. If the number is a prime number
number, it returns true, if it is not a prime number, it returns false.
*/

var fizzBuzz = l => {
  var fizz_buzz = "";
  l%3===0 && l%5===0 && l!==0 ? fizz_buzz = true : fizz_buzz = false;
  return (fizz_buzz)
}

/* var fizzBuzz checks if a number is a multiple of both 3 and 5. If the number is a multiple of both 3 and 5
 it returns true, if it is not a multiple of both 3 and 5, it returns false.
*/

var fizz = g => {
  var fizzs = "";
  g%3===0 && g%5!== 0 && g!==0? fizzs = true : fizzs = false;
  return (fizzs)
}

/* var fizz checks if a number is a multiple of 3. If the number is a multiple of 3
 it returns true, if it is not a multiple of 3, it returns false.
*/

var buzz = h => {
  var buzzs = "";
  h%5===0 && h%3!== 0 && h!==0? buzzs = true : buzzs = false;
  return (buzzs)
}

/* var fizz checks if a number is a multiple of 5. If the number is a multiple of 5
 it returns true, if it is not a multiple of 5, it returns false.
*/


/*
var logger uses all the above helper functions to determine the properties of a number,
i.e if it is a prime number, it will print prime, if it is an odd number, it will print odd,
if it is an even number, it will print even if it is a multiple of both 3 and 5 it will
print fizzBuzz, if it is a multiple of 3 it will print fizz, and if it is a multiple of 5,
it will print buzz.
*/
var logger = num => {
  countOdd = 0;
  countEven = 0;
  countFizz = 0;
  countBuzz = 0;
  countFizzBuzz = 0;
  countPrime = 0;

  for (p=0; p<=num; p++){
    var temporary = []
    //var temporary contains the values that each if statement below will produce for p, in the current loop
    if (oddEvens(p)===true){temporary.push("even"); countEven++;} else{temporary.push("odd"); countOdd++;};
    //calls the oddEvens function and inputs current p, uses the output to determine what values(odd or even) to push to temporary while counting their instances
    if (primeLogger(p)===true){temporary.push("prime"); countPrime++;};
    //calls the primeLogger function and inputs current p, if the output is true, it pushes "prime" to temporary, and increments countPrime.
    if (fizzBuzz(p)===true){temporary.push("fizzBuzz"); countFizzBuzz++;};
    //calls the fizzBuzz function and inputs current p, if the output is true, it pushes "prime" to temporary, and increments countFizzBuzz.
    if (fizz(p)===true){temporary.push("fizz"); countFizz++;};
    //calls the fizz function and inputs current p, if the output is true, it pushes "fizz" to temporary, and increments countFizz.
    if (buzz(p)===true){temporary.push("buzz"); countBuzz++;};
    //calls the buzz function and inputs current p, if the output is true, it pushes "buzz" to temporary, and increments countBuzz.
    console.log(p,temporary)
    //prints the current value of p and temporary.
  }
  console.log("There are " + countPrime + " prime numbers, " + countOdd + " odd numbers, " + countEven +
              " even numbers, " + countFizz + " multiples of only 3 (fizz), " + countBuzz +
              " multiples of only 5 (buzz) and " + countFizzBuzz + " multiples of both 3 and 5 (fizzBuzz).");
 //Prints the values of all the counters in a single statement.
  }
