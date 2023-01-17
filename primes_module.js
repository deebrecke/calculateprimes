/* Part 1 Write a module with functions related to prime numbers,
and test the module informally on the browser console (this is done in informal_tests.js).
Author: Dee Brecke
date: 2/11/2022
file: primes_module.js
 */

/*
1. isPrime(num)
This function accepts an integer and returns true if the number is prime or false if not.
*/

function isPrime(num)
{
    if(num === 1)
    {
        return false;
    }
    else
    {
        for(let i = 2; i<= num-1; i++)
        {
            if(num % i === 0)
            {
                return false;
            }
        }
        return true
    }
}

/*
2. factors(num)
This functions accepts an integer and returns the factors of the number in an array.
*/

function factors(num)
{
    let numFactors = [];
    for(let i = 1; i<= num; i++)
    {
        if(num % i === 0)
        {
            numFactors.push(i);
        }
    }
    return numFactors;
}

/*
3. primesIn(low, high)
This function accepts the components of the range [low, high] as inputs.
The function returns an array of any primes that fall within the specified range.
*/

function primesIn(low, high)
{
    let primeArray = [];
    for(let i = low; i <= high; i++)
    {
        if(isPrime(i))
        {
            primeArray.push(i);
        }
    }
    return primeArray;
}
/*
4. howManyPrimes(low, high)
This function accepts the components of the range [low, high] as inputs.
The function returns the number of primes that fall within the specified range.
*/
function howManyPrimes(low, high)
{
    return primesIn(low, high).length
}
