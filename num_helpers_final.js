var oddEvens = i => {
  var log = "";
    i%2==0 ? log = true : log = false;
        return (log);
      };

var primeLogger = n => {
  var prime = false;
  var x = 2;
      (n%x===0 && x!==n && n!==1)? prime = false : prime = true;
      return (prime);
    };

var fizzBuzz = l => {
  var fizz_buzz = "";
  l%3===0 && l%5===0 && l!==0 ? fizz_buzz = true : fizz_buzz = false;
  return (fizz_buzz)
}

var fizz = g => {
  var fizzs = "";
  g%3===0 && g%5!== 0 && g!==0? fizzs = true : fizzs = false;
  return (fizzs)
}

var buzz = h => {
  var buzzs = "";
  h%5===0 && h%3!== 0 && h!==0? buzzs = true : buzzs = false;
  return (buzzs)
}

var logger = num => {
  countOdd = 0;
  countEven = 0;
  countFizz = 0;
  countBuzz = 0;
  countFizzBuzz = 0;
  countPrime = 0;

  for (p=0; p<=num; p++){
    var temporary = []
    if (oddEvens(p)===true){temporary.push("even"); countEven++;} else{temporary.push("odd"); countOdd++;};
    if (primeLogger(p)===true){temporary.push("prime"); countPrime++;};
    if (fizzBuzz(p)===true){temporary.push("fizzBuzz"); countFizzBuzz++;};
    if (fizz(p)===true){temporary.push("fizz"); countFizz++;};
    if (buzz(p)===true){temporary.push("buzz"); countBuzz++;};

    console.log(p,temporary)
  }
  console.log("There are " + countPrime + " prime numbers, " + countOdd + " odd numbers, " + countEven +
              " even numbers, " + countFizz + " multiples of only 3 (fizz), " + countBuzz +
              " multiples of only 5 (buzz) and " + countFizzBuzz + " multiples of both 3 and 5 (fizzBuzz).");              
  }
