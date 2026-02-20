/* 
QUESTION: Write a Java program to find the GCD of an array of integers.
EXAMPLES:
[Input: {12, 18, 24}
Output: 6]
*/

//  SOLUTION - O(n * log(min(a,b))) 
public class Main
{
 	public static void main(String[] args) {
		int x[] = {12,18,24};
		int res = gcdOfArray(x);
		System.out.println(res);
	}
	public static int gcdOfArray(int[] a){
	    int res = a[0];
	    for(int i=1;i<a.length;++i){
            res = gcd(res, a[i]);	        
	    }
	    return res;
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