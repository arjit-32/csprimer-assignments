/* 
QUESTION: Write a Java program to count the number of digits in a given integer.

EXAMPLES:
[Input: 12345
Output: 5]
*/

//  SOLUTION - O(log{10}(n))
import java.util.*;

class Main{
    public static void main(String s[]){
        int res = countDigits(0);
        System.out.println(res);
    }

    public static int countDigits(int n){
        if(n==0) return 1;
        n = Math.abs(n);
        int count=0;
        while(n>0){  
            n=n/10;
            count+=1;
        }
        return count;
    }
}


//  SOLUTION - O(1)
public static int countDigits(int n) {
    if (n == 0) return 1;
    return (int)Math.log10(Math.abs(n)) + 1;
}