# Math Questions

## 🔢 Digits & Number Properties

/* 
ID: 1-count-digits
TITLE: "Count Digits in an Integer",

QUESTION: Write a Java program to count the number of digits in a given integer using a loop.
    
TESTS: [
  { input: [12345], expected: 5 },
  { input: [7], expected: 1 },
  { input: [1000], expected: 4 }
],
*/


/* 
ID: 2-reverse-number
TITLE: "Reverse a Number",

QUESTION: Write a Java program to reverse the digits of a given integer.

TESTS: [
  { input: [1234], expected: 4321 },
  { input: [120], expected: 21 },
  { input: [5], expected: 5 }
],
*/

/* 
ID: 3-palindrome-number
TITLE: "Check if Number is Palindrome",

QUESTION: Write a Java program to check whether a given integer is a palindrome.

TESTS: [
  { input: [121], expected: true },
  { input: [123], expected: false },
  { input: [7], expected: true }
],
*/

/* 
ID: 4-armstrong-number
TITLE: "Check Armstrong Number",

QUESTION: Write a Java program to check whether a given number is an Armstrong number.

TESTS: [
  { input: [153], expected: true },
  { input: [370], expected: true },
  { input: [123], expected: false }
],
*/

---

## ➕ Factorials & Combinatorics Basics

/* 
ID: 5-factorial
TITLE: "Factorial",

QUESTION: Write a Java program to compute the factorial of a number using an iterative approach.

TESTS: [
  { input: [5], expected: 120 },
  { input: [3], expected: 6 },
  { input: [0], expected: 1 }
],
*/

/* 
ID: 6-large-factorial
TITLE: "Factorial Modulo 1e9+7",

QUESTION: Write a Java program to compute the factorial of a number modulo 1000000007.

TESTS: [
  { input: [5], expected: 120 },
  { input: [10], expected: 3628800 },
  { input: [1], expected: 1 }
],
*/

/* 
ID: 7-trailing-zeros-factorial
TITLE: "Trailing Zeros in Factorial",

QUESTION: Write a Java program to count the number of trailing zeros in n!.

TESTS: [
  { input: [5], expected: 1 },
  { input: [10], expected: 2 },
  { input: [25], expected: 6 }
],
*/

---

## 🔁 GCD / LCM

/* 
ID: 8-gcd-euclidean
TITLE: "GCD of Two Numbers",

QUESTION: Write a Java program to find the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.

TESTS: [
  { input: [54, 24], expected: 6 },
  { input: [48, 18], expected: 6 },
  { input: [7, 3], expected: 1 }
],
*/

/* 
ID: 9-lcm-numbers
TITLE: "LCM of Two Numbers",

QUESTION: Write a Java program to compute the least common multiple (LCM) of two numbers using GCD.

TESTS: [
  { input: [4, 6], expected: 12 },
  { input: [5, 3], expected: 15 },
  { input: [7, 2], expected: 14 }
],
*/

/* 
ID: 10-gcd-array
TITLE: "GCD of an Array",

QUESTION: Write a Java program to compute the GCD of all numbers in an array.

TESTS: [
  { input: [[2, 4, 6, 8]], expected: 2 },
  { input: [[3, 9, 27]], expected: 3 },
  { input: [[5, 10, 15]], expected: 5 }
],
*/

---

## 🔍 Prime Numbers

/* 
ID: 11-check-prime
TITLE: "Check Prime Number",

QUESTION: Write a Java program to check if a number is prime.

TESTS: [
  { input: [2], expected: true },
  { input: [17], expected: true },
  { input: [18], expected: false }
],
*/

/* 
ID: 12-print-primes
TITLE: "Print Primes up to N",

QUESTION: Write a Java program to print all prime numbers up to N 

TESTS: [
  { input: [10], expected: [2,3,5,7] },
  { input: [5], expected: [2,3,5] },
  { input: [2], expected: [2] }
],
*/

---

## 🧩 Prime Factors & Divisors

/* 
ID: 13-prime-factors
TITLE: "Prime Factors of a Number",

QUESTION: Write a Java program to print the prime factors of a number.

TESTS: [
  { input: [12], expected: [2,2,3] },
  { input: [18], expected: [2,3,3] },
  { input: [7], expected: [7] }
],
*/

/* 
ID: 14-count-divisors
TITLE: "Count Number of Divisors",

QUESTION: Write a Java program to count the number of divisors of a given number.

TESTS: [
  { input: [6], expected: 4 },
  { input: [10], expected: 4 },
  { input: [7], expected: 2 }
],
*/

/* 
ID: 15-sum-of-divisors
TITLE: "Sum of Divisors",

QUESTION: Write a Java program to compute the sum of all divisors of a given number.

TESTS: [
  { input: [6], expected: 12 },
  { input: [10], expected: 18 },
  { input: [7], expected: 8 }
],
*/

---

## ⚡ Power & Modulo

/* 
ID: 16-power-normal
TITLE: "Compute Power a^n (Normal)",

QUESTION: Write a Java program to compute a raised to the power n using a simple iterative approach.

TESTS: [
  { input: [2, 3], expected: 8 },
  { input: [5, 2], expected: 25 },
  { input: [3, 0], expected: 1 }
],
*/

/* 
ID: 17-fast-exponentiation
TITLE: "Fast Exponentiation",

QUESTION: Write a Java program to compute a^n using binary exponentiation.

TESTS: [
  { input: [2, 10], expected: 1024 },
  { input: [3, 5], expected: 243 },
  { input: [5, 0], expected: 1 }
],
*/

/* 
ID: 18-power-modulo
TITLE: "Power Modulo (Binary Exponentiation)",

QUESTION: Write a Java program to compute (a^n) % m using binary exponentiation.

TESTS: [
  { input: [2, 10, 1000], expected: 24 },
  { input: [3, 5, 7], expected: 5 },
  { input: [5, 3, 13], expected: 8 }
],
*/