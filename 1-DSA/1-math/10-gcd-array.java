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