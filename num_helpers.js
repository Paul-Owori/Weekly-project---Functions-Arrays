/* The allLogger function contains 4 helper functions that work together to print
all the numbers in an assigned range while stating wheter they are even or numbers,
assigning fizz to multiples of 3, buzz to multiples of 5 and fizzBuzz to multiples
of both 3 and 5, while also indicating which numbers are prime numbers.

The allLogger does this by using the first three helper functions to build an array each,
one for prime numbers, one for odd and even numbers, and one for the fizzBuzz function.

A fourth array then combines the results of the first three arrays into one
comprehensive array which the allLogger outputs. The final array  fulfills the assignment requirements.

*/

var allLogger = (num) => {


      /* This function takes input and returns fizz for multiples of 3,
      buzz to multiples of 5 and fizzBuzz to multiples of 5 and 3
      */

      var fizzBuzzing = (f) => {
        var fizzBuzz = [];

        for (var n =1; n <= f; n++){
        if (n%3===0 && n%5===0){
          fizzBuzz.push( n + " FizzBuzz! ");
        }else if (n%3===0) {
          fizzBuzz.push(n + " Fizz! ");
        }else if (n%5===0){
          fizzBuzz.push(n + " Buzz! ");
        }else{
          fizzBuzz.push(n);
        }
      ;}
      return (fizzBuzz);
    }

    var allFizzBuzz = fizzBuzzing (num);


    /* This function takes input and returns even for even numbers and odd for
    odd numbers.
    */

      var oddEvens = (odds) => {
        var oddEven = []
        for (i=1; i<=odds; i++) {
          if(i%2==0){oddEven.push(" even ");}
         else {oddEven.push(" odd ");}
      ;}
      return (oddEven);
    }

    var allOddEven = oddEvens(num);


    /*This function takes input returns "Prime" for prime numbers and a space " "
    for non prime numbers
    */

      var primeLogger = n => {
      var prime = [];
       for (var nmbr = 1; nmbr <= n; nmbr++) {

         var notPrime = false;
         for (var x = 2; x <= nmbr; x++) {
             if (nmbr%x===0 && x!==nmbr && nmbr!==1) {
                 notPrime = true;
             }
         }
         if (notPrime === false && nmbr !== 1) {
           prime.push (" Prime ");
         } else {prime.push (" " );
       }
       ;}
       return (prime);
     }
     var allPrime = primeLogger(num);



     /* This function takes input from all the three above helper functions
     and compiles them into one new array that fulfills the assignment requirements.
     */

    var arrayConcatenator = (a, b, c) => {
      var all = [];
      for (var l = 0; l < num; l++) {
        all.push (a[l]+b[l]+c[l]);
      }
      return (all);
    };

  var arrayOfAll = arrayConcatenator (allFizzBuzz, allOddEven, allPrime);
  return (arrayOfAll);
  }



 var test = allLogger (100)

 console.log (test)
