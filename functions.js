/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  // Your code here
  console.log(`Hello ${name}`);
}

// greet('Saleh AlQattan');

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  // Your code here
  if (n % 2 != 0) return true;
  else return false;
}

// isOdd(7);

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 *
 * 7 -> 3
 * 6 -> 3
 * 5 -> 2
 * 4 -> 2
 * 3 -> 1
 * 2 -> 1
 *
 */
function oddsSmallerThan(n) {
  // Your code here

  if (n % 2 === 0) {
    return n / 2;
  } else return (n - 1) / 2;
}

// oddsSmallerThan(7);

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here

  if (n % 2 === 0) {
    return n * 2;
  } else if (n % 2 != 0) {
    return n * n;
  }
}

// squareOrDouble(16);

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
