/* 
ID: 2-reverse-number
TITLE: "Reverse a Number",

QUESTION: Write a Java program to reverse the digits of a given integer.

TESTS: [
  { input: [1234], expected: 4321 },
  { input: [120], expected: 21 },
  { input: [5], expected: 5 }
],
*/

// O(log{10}(n))
import java.util.*;

public class Main{
    public static void main(String s[]){
        int res = reverseNumber(123);
        System.out.println(res);
    }

    public static int reverseNumber(int n){
        if(n==0) return 1;
        int reversedNumber=0;
        while(n>0){  
            int digit = n%10;
            reversedNumber = reversedNumber*10 + digit;
            n=n/10;
        }
        return reversedNumber;
    }
}
