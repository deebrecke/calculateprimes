/* verify functions in prime_modules.js by calling the functions and running test data
Author: Dee Brecke
Date: 2/12/2022
file:informal_tests.js
 */

//test to make sure isPrime function works properly using test data sets:
//Prime numbers, should return true: 2, 7, 19, 23, 53, 83, 89 --all do return true

let num = 2;
num = 7;
num = 19;
num = 23;
num = 53;
num = 83;
num = 89;

//Numbers that are not prime, should return false: 4, 8, 15, 21, 45, 68, 96 --all do return false
num = 4;
num = 8;
num = 15;
num = 21;
num = 45;
num = 68;
num = 96; //Output looks like: Is 96 Prime? false

let testDataPrime = isPrime(num);
console.log(`Is ${num} Prime? ${testDataPrime}`);

//test to make sure factors function works properly using test data sets: 8, 21, 23, 42, 58, 86
//Some test numbers and their factors with console output commented next to them
let number = 8; //Factors of 8 are 1,2,4,8
number = 21; //Factors of 21 are 1,3,7,21
number = 23 // testing on a prime number (should only show 2 factors) Factors of 23 are 1,23
number = 42 // Factors of 42 are 1,2,3,6,7,14,21,42 (the answer to life, the universe, and everything)
number = 58 // Factors of 58 are 1,2,29,58
number = 86 //Factors of 86 are 1,2,43,86


let testDatafactors = factors(number);
console.log(`Factors of ${number} are ${testDatafactors}`);

//test to make sure primesIn function works properly using test data sets: 1-15, 10-30, 50-75, 65-101

let primesInRange = [1, 15] // The primes from  1 to 15  are 2,3,5,7,11,13
primesInRange = [10, 30] //The primes from  10 to 30  are 11,13,17,19,23,29
primesInRange = [50,75] //The primes from  50 to 75  are 53,59,61,67,71,73
primesInRange = [65, 101] //The primes from  65 to 101  are 67,71,73,79,83,89,97,101

let testPrimesIn = primesIn(primesInRange[0], primesInRange[1]);
console.log(`The primes from  ${primesInRange[0]} to ${primesInRange[1]}  are ${testPrimesIn}`);

////test to make sure howManyPrimes function works properly using test data sets: 2-35, 15-47,
// and 65-101(repeat data set from above: looking for output of 8)

let testHowMany = [2, 35];//There are 11 primes from  2 to 35
testHowMany = [15, 47]; //There are 9 primes from  15 to 47
testHowMany = [65, 101];//There are 8 primes from  65 to 101

let howManyOutput = howManyPrimes(testHowMany[0], testHowMany[1]);
console.log(`There are ${howManyOutput} primes from  ${testHowMany[0]} to ${testHowMany[1]}`);

