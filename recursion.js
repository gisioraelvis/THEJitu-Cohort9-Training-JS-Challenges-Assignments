/**
 * Recursion function that displays all the factorials in ascending order of any number
 */

// Iterative function to calculate factorial of a number n 
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

function factorialRecursion(n) {
  if (n === 0) {
    return 1;
  }
  return factorialRecursion(n - 1) + " " + factorial(n);
}

console.log(factorialRecursion(20));
