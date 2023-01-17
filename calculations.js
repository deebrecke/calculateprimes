/*Output part 1 to a web page to interact with user
Autor: Dee Brecke (with starter code by Josh Archer)
date: 2/18/2022
calculations.js
*/

//register button clicks when the page loads
window.onload = function() {
    let analyze = document.getElementById("analyze");
    let generate = document.getElementById("generate");
    analyze.onclick = analyzeNumberOnClick;
    generate.onclick = generatePrimesOnClick;
}

//top half of web page--isPrime and factors
function analyzeNumberOnClick(event)
{
    //prevent the form from submitting
    event.preventDefault();

    //get user input from web form
    let analyzeBox = document.getElementById("number");
    let analyzeText = analyzeBox.value;
    let analyzeNum = parseInt(analyzeText);

    //get rid of previous inputs/outputs
    let factorArray = document.getElementById("factors");
    factorArray.innerHTML = "";

    let foundFactors = document.getElementById("factors-found");
    foundFactors.innerHTML = "Factors";

    //check to see if input is valid
    if(Number.isNaN(analyzeNum))
    {
        let clearNumPrime = document.getElementById("prime-status");
        clearNumPrime.innerHTML = "";
        analyzeError(`(${analyzeText}) is not a number`);
    }
    else
    {
        //get rid of error message
        let clearErrorAn = document.getElementById("analyze-error");
        clearErrorAn.innerHTML = "";

        //call functions to check if a number is prime and print out factors
        let analyzeTest = isPrime(analyzeNum);
        if(analyzeTest === true)
        {
            checkPrime(analyzeNum + " is prime");
        }
        else
        {
            checkPrime(analyzeNum + " is not prime");
        }
        let allFactors = factors(analyzeNum);
        for(let i = 0; i < allFactors.length; i++)
        {
            factorArray.innerHTML += `<li>${allFactors[i]}</li>`;
        }
        foundFactors.innerHTML = `Factors (${allFactors.length} found)`;
    }
}

function checkPrime(primeCheck)
{
    let numCheck = document.getElementById("prime-status");
    numCheck.innerHTML = primeCheck;
}

//function to produce an error message if input not valid
function analyzeError(anErrMsg)
{
    let numError = document.getElementById("analyze-error");
    numError.innerHTML = anErrMsg;
}

//bottom half of web page--generate primes
function generatePrimesOnClick(event)
{
    //prevent the form from submitting
    event.preventDefault();

    //get user input from web form
    let lowBox = document.getElementById("low");
    let lowText = lowBox.value;
    let lowNum = parseInt(lowText);

    let highBox = document.getElementById("high");
    let highText = highBox.value;
    let highNum = parseInt(highText);

    //remove all content of previous checks
    let allPrimes = document.getElementById("primes-list");
    allPrimes.innerHTML = "";

    let foundPrimes = document.getElementById("primes-found");
    //check to see if user input is valid
    if(Number.isNaN(lowNum) || Number.isNaN(highNum))
    {
        foundPrimes.innerHTML = "Primes";
        generateError("Low or High are not a number");
    }
    else
    {
        //call functions to output primes
        let clearErrorGen = document.getElementById("generate-error");
        clearErrorGen.innerHTML = "";
        let primeNumbers = primesIn(lowNum, highNum);
        for(let j = 0; j < primeNumbers.length; j++)
        {
            allPrimes.innerHTML += `<li>${primeNumbers[j]}</li>`;
        }
        foundPrimes.innerHTML = `Primes (${howManyPrimes(lowNum, highNum)} found)`;
    }
}

//function to produce an error message if input not valid
function generateError(genErrMsg)
{
    let highLowError = document.getElementById("generate-error");
    highLowError.innerHTML = genErrMsg;
}
