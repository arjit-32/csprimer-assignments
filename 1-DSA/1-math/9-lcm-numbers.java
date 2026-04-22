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

//  SOLUTION - O(min (a,b))
public class Main
{
 	public static void main(String[] args) {
		int a=12,b=18;
		int res = lcm(a,b);
		System.out.println(res);
	}
	
	public static int lcm(int a, int b){
	    int max= Math.max(a,b);
	    int lcm=max;
	    while(true){
	        if(lcm%a==0 && lcm%b==0)    return lcm;
	        lcm+=max;
	    }
	}
}

//  SOLUTION - O(log(min(a,b)))
public class Main {
    public static void main(String[] args) {
        int a = 12, b = 18;
        
        int gcdValue = gcd(a, b);
        int lcmValue = (a * b) / gcdValue;
        System.out.println(lcmValue);
    }

    // Euclidean algorithm for GCD
    public static int gcd(int x, int y) {
        while (y != 0) {
            int temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }
}

