/* 
ID: 3-palindrome-number
TITLE: "Check if Number is Palindrome",

QUESTION: Write a Java program to check whether a given integer is a palindrome.

TESTS: [
  { input: [121], expected: true },
  { input: [123], expected: false },
  { input: [7], expected: true }
],
*/

//  SOLUTION - O(log{10}(n))
public class Main
{
	public static void main(String[] args) {
		int n=3221;
		boolean res = checkPallindrome(n);
		System.out.println(res);
	}
	
	static boolean checkPallindrome(int n){
	    int t = n;
	    int revNum=0;
	    while(t>0){
	        int mod = t%10;
	        revNum = revNum*10 + mod;
	        t=t/10;
	    }
	    if(n==revNum) return true;
	    return false;
	}
}
