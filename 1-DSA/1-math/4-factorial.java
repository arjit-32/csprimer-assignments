/* 
QUESTION: Write a Java program to compute the factorial of a given integer.
EXAMPLES:
[Input: 5
Output: 120]
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