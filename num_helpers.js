/* The allLogger function contains 4 helper functions that work together to print
all the numbers in an assigned range while stating wheter they are even or numbers,
assigning fizz to multiples of 3, buzz to multiples of 5 and fizzBuzz to multiples
of both 3 and 5, while also indicating which numbers are prime numbers.

The allLogger does this by using the first three helper functions to build an array each,
one for prime numbers, one for odd and even numbers, and one for the fizzBuzz function.

A fourth array then combines the results of the first three arrays into one
comprehensive array which the allLogger outputs. The final array  fulfills the assignment requirements.

*/
//var endStatement = "";
var allLogger = (num) => {


      /* This function takes input and returns fizz for multiples of 3,
      buzz to multiples of 5 and fizzBuzz to multiples of 5 and 3
      */
      var fizzCount = 0;
        //fizzCount will increment every time a multiple of 3 is detected.
      var buzzCount = 0;
        //buzzCount will increment every time a multiple of 5 is detected.
      var fizzBuzzCount = 0;
        //fizzBuzzCount will increment every time a multiple of both 3 and 5 is detected.
      var fizzBuzzing = (f) => {
        var fizzBuzz = [];

        for (var n =1; n <= f; n++){
        if (n%3===0 && n%5===0){
          fizzBuzz.push( n + " FizzBuzz! ");
          fizzBuzzCount++;
          //If a multiple of both 3 and 5 is detected, the value of n + " FizzBuzz! " is pushed to the var fizzBuzz array.
        }else if (n%3===0) {
          fizzBuzz.push(n + " Fizz! ");
          fizzCount++;
          //If a multiple of 3 is detected, the value of n + " Fizz! " is pushed to the var fizzBuzz array
        }else if (n%5===0){
          fizzBuzz.push(n + " Buzz! ");
          buzzCount++;
          //If a multiple of 3 is detected, the value of n + " Buzz! " is pushed to the var fizzBuzz array
        }else{
          fizzBuzz.push(n);
          //If no ultiples are detected, then only the value of n is pushed to the var fizzBuzz array
        }
      ;}
      return (fizzBuzz);
    }

    var allFizzBuzz = fizzBuzzing (num);


    /* This function takes input and returns even for even numbers and odd for
    odd numbers.
    */
      var oddCount = 0
      //oddCount will increment every time an odd number is detected.
      var evenCount = 0
      //evenCount will increment every time an even number is detected.
      var oddEvens = (odds) => {
        var oddEven = []
        for (i=1; i<=odds; i++) {
          if(i%2==0){oddEven.push(" even ");
                     evenCount++;
                     //If an even number is detected, " even " is pushed to the var oddEven array.
                    }
         else {oddEven.push(" odd ");
               oddCount++;
               //If an odd number is detected, " odd " is pushed to the var oddEven array
             }
      ;}
      return (oddEven);
    }

    var allOddEven = oddEvens(num);


    /*This function takes input returns "Prime" for prime numbers and a space " "
    for non prime numbers
    */
      var countPrime = 0
      //countPrime will increment every time a prime number is detected.
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
             countPrime++
             //If a prime number is detected, " Prime " is pushed to the var prime array
           } else {prime.push (" " );
           //If no prime number is detected, " " is pushed to the var prime array
         }
         ;}


         return prime
     }
     var allPrime = primeLogger(num);



     /* This function takes output arrays from all the three above helper functions
     and compiles them into one new array that fulfills the assignment requirements.
     */

    var arrayConcatenator = (a, b, c) => {
      var all = [];
      for (var l = 0; l < num; l++) {
        all.push (a[l]+b[l]+c[l]);
        /*This uses the value of l as an index locator and pushes all the values of
        the three input arrays at index[l] to index [l] of the new array, var all
        */
      }
      return (all);
    };

  var arrayOfAll = arrayConcatenator (allFizzBuzz, allOddEven, allPrime);
  /* This sends the three arrays which all have the same number of elements into
  the arrayConcatenator and stores the output in var arrayOfAll
  */
  var endStatement = ("There are " + countPrime + " prime numbers, " + oddCount + " odd numbers, " + evenCount + " even numbers, " + fizzCount +
              " multiples of only 3 (fizz), " + buzzCount + " multiples of only 5 (buzz) and " + fizzBuzzCount + " multiples of both 3 and 5 (fizzBuzz).");


console.log (arrayOfAll)
console.log (endStatement)
}
 var test = allLogger (100)
