/* 
QUESTION: Write a Java program to count trailing zeros in the factorial of a given integer.
EXAMPLES:
[Input: 10
Output: 2]   // 10! = 3628800
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