/* 
QUESTION: Write a Java program to check if a given integer is a palindrome.
EXAMPLES:
[Input: 121
Output: true]
[Input: 123
Output: false]
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
