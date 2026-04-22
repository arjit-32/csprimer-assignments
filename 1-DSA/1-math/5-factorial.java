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

//  SOLUTION - O(n)
public class Main
{
	public static void main(String[] args) {
		int n=5;
		int res = factorial(n);
		System.out.println(res);
	}
	
	static int factorial(int n){
	    if(n==0) return 1;
	    return n*factorial(n-1);
	}
}