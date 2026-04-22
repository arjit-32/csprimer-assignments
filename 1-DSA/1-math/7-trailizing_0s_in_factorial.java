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


//  SOLUTION - O(log_5(n))
public class Main
{
 	public static void main(String[] args) {
		int n=10;
		int res = countTrailingZeros(n);
		System.out.println(res);
	}
	
	public static int countTrailingZeros(int n){
       int count=0;
       for(int i=5;i<=n;i*=5){
           count+=n/i;
       }
       return count;
	}
}