/* 
QUESTION: Write a Java program to find the GCD of two integers.
EXAMPLES:
[Input: 12, 18
Output: 6]
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