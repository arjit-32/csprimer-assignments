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


//  SOLUTION - O(n)
public class Main
{
    static final int MOD = 1000000007;
    
	public static void main(String[] args) {
		int n=1000000;
		long res = factorial(n);
		System.out.println(res);
	}
	
	public static long factorial(int n){
        long result=1;
        for(int i=2;i<=n;++i){
            result = (result*i) % MOD;
        }
        return result;
	}
}