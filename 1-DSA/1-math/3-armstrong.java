/* 
QUESTION: Write a Java program to check if a given integer is an Armstrong number.
EXAMPLES:
[Input: 153
Output: true]
[Input: 123
Output: false]
*/

//  SOLUTION - O(log{10}(n))
public class Main
{
	public static void main(String[] args) {
		int n=153;
		boolean res = isArmstrong(n);
		System.out.println(res);
	}
	
	static boolean isArmstrong(int n){
	    int digits = (int)Math.log10(Math.abs(n)) + 1;
	    int t=n;
	    int output=0;
	    while(t>0){
	        int mod=t%10;
	        output= output + (int)Math.pow(mod,digits);
	        t=t/10;
	    }
	    return output==n;
	}
}
