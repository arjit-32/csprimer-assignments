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

//  SOLUTION - O(log(min(x,y)))
public class Main
{
 	public static void main(String[] args) {
		int x=12,y=8;
		int res = gcd(x,y);
		System.out.println(res);
	}
	
	public static int gcd(int x, int y){
	    while (y != 0) {
            int temp = y;
            y = x % y;
            x = temp;
        }
        return x;
	}
}